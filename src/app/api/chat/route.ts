import { NextRequest } from 'next/server';

const OPENROUTER_KEY = process.env.OPENROUTER_API_KEY!;
const NVIDIA_KEY = process.env.NVIDIA_API_KEY!;

interface ChatPayload {
  messages: { role: string; content: string }[];
  model: string;
  provider: 'openrouter' | 'nvidia';
  thinking?: boolean;
}

async function callProvider(payload: ChatPayload): Promise<ReadableStream> {
  const { messages, model, provider, thinking } = payload;

  let url: string;
  let headers: Record<string, string>;
  let body: Record<string, unknown>;

  if (provider === 'openrouter') {
    url = 'https://openrouter.ai/api/v1/chat/completions';
    headers = {
      'Authorization': `Bearer ${OPENROUTER_KEY}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': 'https://neiroai.app',
    };
    body = {
      model,
      messages,
      stream: true,
      temperature: 0.7,
      max_tokens: 4096,
    };
  } else {
    url = 'https://integrate.api.nvidia.com/v1/chat/completions';
    headers = {
      'Authorization': `Bearer ${NVIDIA_KEY}`,
      'Content-Type': 'application/json',
    };
    body = {
      model,
      messages,
      stream: true,
      temperature: 0.6,
      max_tokens: 4096,
    };
    if (thinking) {
      body.temperature = 0.6;
      body.thinking = { type: 'enabled', budget_tokens: 1024 };
    }
  }

  const res = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Provider error ${res.status}: ${err}`);
  }

  return res.body!;
}

function createSSEStream(providerStream: ReadableStream, thinking: boolean): ReadableStream {
  const reader = providerStream.getReader();
  const decoder = new TextDecoder();
  let buffer = '';

  return new ReadableStream({
    async pull(controller) {
      try {
        const { done, value } = await reader.read();
        if (done) {
          controller.enqueue(new TextEncoder().encode('data: [DONE]\n\n'));
          controller.close();
          return;
        }

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed || !trimmed.startsWith('data: ')) continue;
          const data = trimmed.slice(6);
          if (data === '[DONE]') {
            controller.enqueue(new TextEncoder().encode('data: [DONE]\n\n'));
            continue;
          }

          try {
            const json = JSON.parse(data);
            const delta = json.choices?.[0]?.delta;
            if (!delta) continue;

            // Handle thinking content
            if (thinking && delta.reasoning_content) {
              controller.enqueue(new TextEncoder().encode(
                `data: ${JSON.stringify({ type: 'thinking', content: delta.reasoning_content })}\n\n`
              ));
            }

            if (delta.content) {
              controller.enqueue(new TextEncoder().encode(
                `data: ${JSON.stringify({ type: 'content', content: delta.content })}\n\n`
              ));
            }
          } catch {
            // skip malformed
          }
        }
      } catch (e) {
        controller.error(e);
      }
    },
    cancel() {
      reader.cancel();
    },
  });
}

async function callNonStream(payload: ChatPayload): Promise<string> {
  const { messages, model, provider } = payload;

  let url: string;
  let headers: Record<string, string>;

  if (provider === 'openrouter') {
    url = 'https://openrouter.ai/api/v1/chat/completions';
    headers = {
      'Authorization': `Bearer ${OPENROUTER_KEY}`,
      'Content-Type': 'application/json',
    };
  } else {
    url = 'https://integrate.api.nvidia.com/v1/chat/completions';
    headers = {
      'Authorization': `Bearer ${NVIDIA_KEY}`,
      'Content-Type': 'application/json',
    };
  }

  const res = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      model,
      messages,
      stream: false,
      temperature: 0.6,
      max_tokens: 4096,
    }),
  });

  if (!res.ok) throw new Error(`Provider error ${res.status}`);
  const json = await res.json();
  return json.choices?.[0]?.message?.content || '';
}

export async function POST(req: NextRequest) {
  try {
    const { messages, model, provider, thinking, mode } = await req.json();

    // NeiroPlus mode
    if (mode === 'neiroplus') {
      return handleNeiroPlus(messages, thinking);
    }

    // Discussion mode
    if (mode === 'discussion') {
      return handleDiscussion(messages);
    }

    // Single model
    const stream = await callProvider({ messages, model, provider, thinking });
    const sseStream = createSSEStream(stream, thinking);

    return new Response(sseStream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : 'Unknown error';
    return new Response(JSON.stringify({ error: msg }), { status: 500 });
  }
}

async function handleNeiroPlus(messages: { role: string; content: string }[], thinking: boolean) {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      try {
        // Stage 1: Drafts (parallel)
        controller.enqueue(encoder.encode(
          `data: ${JSON.stringify({ type: 'thinking', content: '🔄 Stage 1: Generating drafts from multiple models...\n' })}\n\n`
        ));

        const [gptDraft, nemotronDraft] = await Promise.allSettled([
          callNonStream({
            messages,
            model: 'openai/gpt-4.1',
            provider: 'openrouter',
          }),
          callNonStream({
            messages,
            model: 'nvidia/llama-3.3-nemotron-super-49b-v1',
            provider: 'nvidia',
          }),
        ]);

        const gptResult = gptDraft.status === 'fulfilled' ? gptDraft.value : '';
        const nemotronResult = nemotronDraft.status === 'fulfilled' ? nemotronDraft.value : '';

        if (!gptResult && !nemotronResult) {
          controller.enqueue(encoder.encode(
            `data: ${JSON.stringify({ type: 'content', content: 'All models failed. Please try again.' })}\n\n`
          ));
          controller.enqueue(encoder.encode('data: [DONE]\n\n'));
          controller.close();
          return;
        }

        controller.enqueue(encoder.encode(
          `data: ${JSON.stringify({ type: 'thinking', content: '✅ Drafts received.\n🔄 Stage 2: Cross evaluation...\n' })}\n\n`
        ));

        // Stage 2: Cross evaluation
        const evalPrompt = `You are a critical reviewer. Analyze these two AI-generated responses to the user's question.

User Question: ${messages[messages.length - 1]?.content}

--- Response A (GPT-OSS) ---
${gptResult || '(No response)'}

--- Response B (Nemotron Ultra) ---
${nemotronResult || '(No response)'}

Identify: strengths, weaknesses, hallucinations, missing information, and suggest improvements for each.`;

        const evaluation = await callNonStream({
          messages: [{ role: 'user', content: evalPrompt }],
          model: 'nvidia/llama-3.3-nemotron-super-49b-v1',
          provider: 'nvidia',
        }).catch(() => '');

        controller.enqueue(encoder.encode(
          `data: ${JSON.stringify({ type: 'thinking', content: '✅ Evaluation complete.\n🔄 Stage 3: Final synthesis by Judge...\n' })}\n\n`
        ));

        // Stage 3: Judge (Nemotron Ultra)
        const judgePrompt = `You are the Chief Judge AI. Your job is to synthesize the best possible answer.

User Question: ${messages[messages.length - 1]?.content}

--- Draft A (GPT-OSS) ---
${gptResult || '(No response)'}

--- Draft B (Nemotron Ultra) ---
${nemotronResult || '(No response)'}

--- Cross Evaluation ---
${evaluation || '(Skipped)'}

Instructions:
- Combine the best parts of both drafts
- Remove any hallucinations or weak information
- Remove duplications
- Produce a clean, accurate, well-structured final answer
- If the question is simple, keep it concise
- If the question is complex, be thorough
- For coding questions, provide clean, production-ready code
- Do NOT mention the drafts or evaluation process in your answer
- Answer directly as if you are the AI assistant`;

        const judgeStream = await callProvider({
          messages: [
            { role: 'system', content: 'You are NeiroAI, a premium AI assistant. Respond in the same language as the user.' },
            ...messages.slice(0, -1),
            { role: 'user', content: judgePrompt },
          ],
          model: 'nvidia/llama-3.3-nemotron-super-49b-v1',
          provider: 'nvidia',
          thinking: false,
        });

        controller.enqueue(encoder.encode(
          `data: ${JSON.stringify({ type: 'thinking', content: '✅ Synthesizing final answer...\n' })}\n\n`
        ));

        // Stream the judge's response
        const reader = judgeStream.getReader();
        const decoder = new TextDecoder();
        let buf = '';

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buf += decoder.decode(value, { stream: true });
          const lines = buf.split('\n');
          buf = lines.pop() || '';
          for (const line of lines) {
            const t = line.trim();
            if (!t.startsWith('data: ')) continue;
            const d = t.slice(6);
            if (d === '[DONE]') continue;
            try {
              const j = JSON.parse(d);
              const c = j.choices?.[0]?.delta?.content;
              if (c) {
                controller.enqueue(encoder.encode(
                  `data: ${JSON.stringify({ type: 'content', content: c })}\n\n`
                ));
              }
            } catch {}
          }
        }

        controller.enqueue(encoder.encode('data: [DONE]\n\n'));
        controller.close();
      } catch (e) {
        controller.enqueue(encoder.encode(
          `data: ${JSON.stringify({ type: 'content', content: 'Error in NeiroPlus pipeline. Please try again.' })}\n\n`
        ));
        controller.enqueue(encoder.encode('data: [DONE]\n\n'));
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
  });
}

async function handleDiscussion(messages: { role: string; content: string }[]) {
  const encoder = new TextEncoder();
  const userQ = messages[messages.length - 1]?.content || '';

  const stream = new ReadableStream({
    async start(controller) {
      try {
        // GPT-OSS answers
        controller.enqueue(encoder.encode(
          `data: ${JSON.stringify({ type: 'discussion', model: 'GPT-OSS 120B', stage: 'draft' })}\n\n`
        ));

        const gptAnswer = await callNonStream({
          messages: [{ role: 'user', content: userQ }],
          model: 'openai/gpt-4.1',
          provider: 'openrouter',
        }).catch(() => 'Unable to respond.');

        controller.enqueue(encoder.encode(
          `data: ${JSON.stringify({ type: 'discussion-content', model: 'GPT-OSS 120B', content: gptAnswer })}\n\n`
        ));

        // Nemotron Ultra critiques
        controller.enqueue(encoder.encode(
          `data: ${JSON.stringify({ type: 'discussion', model: 'Nemotron-3 Ultra', stage: 'critique' })}\n\n`
        ));

        const ultraCritique = await callNonStream({
          messages: [{
            role: 'user',
            content: `Question: ${userQ}\n\nGPT-OSS's answer:\n${gptAnswer}\n\nProvide your analysis and critique. Point out strengths, weaknesses, and your own perspective.`,
          }],
          model: 'nvidia/llama-3.3-nemotron-super-49b-v1',
          provider: 'nvidia',
        }).catch(() => 'Unable to respond.');

        controller.enqueue(encoder.encode(
          `data: ${JSON.stringify({ type: 'discussion-content', model: 'Nemotron-3 Ultra', content: ultraCritique })}\n\n`
        ));

        // Conclusion
        controller.enqueue(encoder.encode(
          `data: ${JSON.stringify({ type: 'discussion', model: 'Nemotron-3 Ultra', stage: 'conclusion' })}\n\n`
        ));

        const conclusion = await callNonStream({
          messages: [{
            role: 'user',
            content: `Based on this discussion, provide a final conclusion.\n\nQuestion: ${userQ}\nGPT-OSS: ${gptAnswer}\nCritique: ${ultraCritique}`,
          }],
          model: 'nvidia/llama-3.3-nemotron-super-49b-v1',
          provider: 'nvidia',
        }).catch(() => 'Unable to conclude.');

        controller.enqueue(encoder.encode(
          `data: ${JSON.stringify({ type: 'discussion-content', model: 'Conclusion', content: conclusion })}\n\n`
        ));

        controller.enqueue(encoder.encode('data: [DONE]\n\n'));
        controller.close();
      } catch {
        controller.enqueue(encoder.encode('data: [DONE]\n\n'));
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
  });
}
