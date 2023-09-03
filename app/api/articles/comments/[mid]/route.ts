import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

type Payload = {
  comment: string
}

export async function GET(_request: NextRequest, { params }: { params: { mid: number } }) {
  const comment = await prisma.comments.findMany({ where: { markdowns_id: Number(params.mid) } })
  return NextResponse.json(comment, {
    headers: {
      'Cache-Control': 'no-store',
      'CDN-Cache-Control': 'no-store',
      'Vercel-CDN-Cache-Control': 'no-store'
    }
  })
}

export async function POST(request: NextRequest, { params }: { params: { mid: number } }) {
  const jsonData: Payload = await request.json()
  const comment = jsonData.comment
  await prisma.comments.create({ data: { markdowns_id: Number(params.mid), comment } })
  return NextResponse.json({
    status: 'Created',
    code: 201,
    markdowns_id: params.mid,
    comment
  })
}
