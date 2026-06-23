import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { imageUrl, prompt } = await req.json();
    const url = `https://api.synoxcloud.xyz/edit/nanobanana?url=${encodeURIComponent(imageUrl)}&prompt=${encodeURIComponent(prompt)}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('Image edit failed');
    const data = await res.json();
    return NextResponse.json(data);
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : 'Unknown error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
