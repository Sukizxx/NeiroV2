'use client';
import { useState, useCallback, useRef } from 'react';
import { Message, ModelId, Chat } from '@/types';
import { MODELS } from '@/lib/models';
import { v4 as uuid } from 'uuid';

export function useChat() {
  const [isStreaming, setIsStreaming] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  const sendMessage = useCallback(async (
    chat: Chat,
    userContent: string,
    model: ModelId,
    thinking: boolean,
    onUpdate: (msg: Message) => void,
    onThinking: (t: string) => void,
    onDone: () => void,
  ) => {
    setIsStreaming(true);
    const controller = new AbortController();
    abortRef.current = controller;

    const modelInfo = MODELS[model];
    const isNeiroPlus = model === 'neiroplus';

    const contextMessages = chat.messages
      .filter(m => m.role !== 'system')
      .map(m => ({ role: m.role, content: m.content }));
    contextMessages.push({ role: 'user', content: userContent });

    const systemMsg = {
      role: 'system',
      content: 'You are NeiroAI, a premium AI assistant. You are helpful, accurate, and professional. Respond in the same language as the user. For code, always use markdown code blocks with language labels.',
    };

    const payload: Record<string, unknown> = {
      messages: [systemMsg, ...contextMessages],
      thinking,
    };

    if (isNeiroPlus) {
      payload.mode = 'neiroplus';
    } else {
      payload.model = modelInfo.modelString;
      payload.provider = modelInfo.provider;
    }

    const assistantMsg: Message = {
      id: uuid(),
      role: 'assistant',
      content: '',
      model,
      timestamp: Date.now(),
      thinking: '',
      isStreaming: true,
    };

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      if (!res.ok) throw new Error('Request failed');

      const reader = res.body!.getReader();
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
          if (d === '[DONE]') break;

          try {
            const j = JSON.parse(d);
            if (j.type === 'thinking') {
              assistantMsg.thinking = (assistantMsg.thinking || '') + j.content;
              onThinking(assistantMsg.thinking);
            } else if (j.type === 'content') {
              assistantMsg.content += j.content;
              onUpdate({ ...assistantMsg });
            }
          } catch {}
        }
      }
    } catch (e: unknown) {
      if (e instanceof DOMException && e.name === 'AbortError') {
        // User stopped
      } else {
        assistantMsg.content += '\n\n⚠️ Error occurred. Please try again.';
        onUpdate({ ...assistantMsg });
      }
    } finally {
      assistantMsg.isStreaming = false;
      onUpdate({ ...assistantMsg });
      setIsStreaming(false);
      abortRef.current = null;
      onDone();
    }
  }, []);

  const stopStreaming = useCallback(() => {
    abortRef.current?.abort();
    setIsStreaming(false);
  }, []);

  return { sendMessage, stopStreaming, isStreaming };
}
