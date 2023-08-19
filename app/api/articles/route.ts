import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET(request: NextRequest) {

  const articles = await prisma.markdowns.findMany()

  return NextResponse.json({
    code: 200,
    articles
  })
}
