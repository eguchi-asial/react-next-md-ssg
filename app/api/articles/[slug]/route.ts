import { NextRequest, NextResponse } from 'next/server'

export async function POST(_request: NextRequest, { params }: { params: { slug: string } }) {
  return NextResponse.json({ slug: params.slug })
}
