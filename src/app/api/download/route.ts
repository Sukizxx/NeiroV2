import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { url: mediaUrl } = await req.json();
    const res = await fetch(`https://api.synoxcloud.xyz/downloader?url=${encodeURIComponent(mediaUrl)}`);
    if (!res.ok) throw new Error('Download failed');
    const data = await res.json();
    return NextResponse.json(data);
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : 'Unknown error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
