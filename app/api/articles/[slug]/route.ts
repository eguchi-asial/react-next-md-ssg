import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  const markdown = await prisma.markdowns.findFirstOrThrow({ where: { slug: params.slug } })
  return NextResponse.json(markdown, {
    headers: {
      'Cache-Control': 'no-store',
      'CDN-Cache-Control': 'no-store',
      'Vercel-CDN-Cache-Control': 'no-store'
    }
  })
}
