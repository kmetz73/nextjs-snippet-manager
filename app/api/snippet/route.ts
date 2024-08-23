import { NextRequest, NextResponse } from 'next/server';
import { createSnippet, readAllSnippet } from './Service';

export async function GET() {
  return NextResponse.json(await readAllSnippet());
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  return NextResponse.json(await createSnippet(body));
}
