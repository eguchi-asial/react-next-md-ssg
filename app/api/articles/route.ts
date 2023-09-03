import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { MarkdownParams } from '../../../types/app'
const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  let jsonData: MarkdownParams | undefined = undefined
  try {
    jsonData = await request.json()
  } catch(err) {
    jsonData = undefined
  }
  const categoryName = jsonData?.categoryName || ''
  const categoryOne = categoryName ? await prisma.categories.findFirstOrThrow({ where: { name: categoryName } }) : undefined
  const markdownsCategoriesMany = categoryOne ? await prisma.markdowns_categories.findMany({ where: { category_id: categoryOne.id } }) : undefined

  const whereObj = markdownsCategoriesMany ? {
    where: {
      id: {
        in: markdownsCategoriesMany.map(mcm => mcm.markdown_id)
      }
    }
  } : undefined

  const markdowns = whereObj ? await prisma.markdowns.findMany(whereObj) : await prisma.markdowns.findMany()

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
