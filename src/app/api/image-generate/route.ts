import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();
    const url = `https://api.synoxcloud.xyz/ai-generate/text-2-image?prompt=${encodeURIComponent(prompt)}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('Image generation failed');
    const data = await res.json();
    return NextResponse.json(data);
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : 'Unknown error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
