import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const size = Number((searchParams.get('size') || 10))
  const markdowns = await prisma.markdowns.findMany({ take: size })

  return NextResponse.json({
    markdowns
  }, {
    headers: {
      'Cache-Control': 'no-store',
      'CDN-Cache-Control': 'no-store',
      'Vercel-CDN-Cache-Control': 'no-store',
      'Access-Control-Allow-Origin': '*'
    }
  })
}
