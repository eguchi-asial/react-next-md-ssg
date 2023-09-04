import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'

export async function GET(_request: NextRequest) {
  const markdowns = await prisma.markdowns.findMany({ take: 10 })

  return NextResponse.json({
    markdowns
  }, {
    headers: {
      'Cache-Control': 'no-store',
      'CDN-Cache-Control': 'no-store',
      'Vercel-CDN-Cache-Control': 'no-store'
    }
  })
}
