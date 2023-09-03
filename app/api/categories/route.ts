import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
  const markdownCateogyIds = await prisma.markdowns_categories.findMany({
    select: {
      category_id: true
    },
    distinct: ['category_id']
  })
  const categories = await prisma.categories.findMany({
    where: {
      id: {
        in: markdownCateogyIds.map(mcid => mcid.category_id)
      }
    }
  })

  return NextResponse.json({
    categories
  }, {
    headers: {
      'Cache-Control': 'no-store',
      'CDN-Cache-Control': 'no-store',
      'Vercel-CDN-Cache-Control': 'no-store'
    }
  })
}
