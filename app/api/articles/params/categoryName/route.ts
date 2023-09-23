import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../../../lib/prisma'

export async function OPTIONS() {
  return new NextResponse('ok', {
    status: 200,
    headers: {
      'Cache-Control': 'no-store',
      'CDN-Cache-Control': 'no-store',
      'Vercel-CDN-Cache-Control': 'no-store',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  })
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const categoryName = searchParams.get('categoryName')
  if (!categoryName) {
    return NextResponse.json({
      markdowns: []
    })
  }
  const categoryOne = await prisma.categories.findFirstOrThrow({ where: { name: categoryName } })
  const markdownsCategoriesMany =  await prisma.markdowns_categories.findMany({ where: { category_id: categoryOne.id } })

  const markdowns = await prisma.markdowns.findMany({
    where: {
      id: {
        in: markdownsCategoriesMany.map(mcm => mcm.markdown_id)
      }
    }
  })

  return NextResponse.json({
    markdowns
  }, {
    headers: {
      'Cache-Control': 'no-store',
      'CDN-Cache-Control': 'no-store',
      'Vercel-CDN-Cache-Control': 'no-store',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  })
}
