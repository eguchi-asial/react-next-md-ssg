import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'

export async function OPTIONS() {
  return new NextResponse('ok', {
    status: 200,
    headers: {
      'Cache-Control': 'no-store',
      'CDN-Cache-Control': 'no-store',
      'Vercel-CDN-Cache-Control': 'no-store',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': '*'
    }
  })
}

/**
 * ページ指定で10件づつ取得する
 * @param request 
 * @returns 
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const categoryName = searchParams.get('categoryName')

  const option: any = {
    take: 10,
    orderBy: {
      id: 'desc'
    }
  }

  if (categoryName) {
    const categoryOne = await prisma.categories.findFirstOrThrow({ where: { name: categoryName } })
    const markdownsCategoriesMany =  await prisma.markdowns_categories.findMany({ where: { category_id: categoryOne.id } })
    option.where = {
      id: {
        in: markdownsCategoriesMany.map(mcm => mcm.markdown_id)
      }
    }
  }

  const page = searchParams.get('page')

  if (page) {
    option.skip = (Number(page) - 1) * 10
  }

  const markdowns = await prisma.markdowns.findMany(option)
  const total = await prisma.markdowns.count()

  return NextResponse.json({
    markdowns,
    total
  }, {
    headers: {
      'Cache-Control': 'no-store',
      'CDN-Cache-Control': 'no-store',
      'Vercel-CDN-Cache-Control': 'no-store',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': '*'
    }
  })
}
