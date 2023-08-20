import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET(request: NextRequest) {

  const markdowns = await prisma.markdowns.findMany({ take: 10 })

  return NextResponse.json({
    markdowns
  })
}
