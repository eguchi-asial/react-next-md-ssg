import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../../../lib/prisma'

type Payload = {
  comment: string
}

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

export async function GET(request: NextRequest, { params }: { params: { mid: number } }) {
  const comment = (await prisma.comments.findMany({
    where: { markdowns_id: Number(params.mid) },
    orderBy: {
      updated_at: 'desc'
    }
  }))
  return NextResponse.json(comment, {
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

export async function POST(request: NextRequest, { params }: { params: { mid: number } }) {
  const jsonData: Payload = await request.json()
  const comment = jsonData.comment
  if (!comment) {
    return NextResponse.json({
      status: 'Invalid Param',
      code: 400,
      markdowns_id: params.mid,
      comment
    })
  }
  const slicedComment = comment.slice(0, 140)
  await prisma.comments.create({ data: { markdowns_id: Number(params.mid), comment: slicedComment } })
  return NextResponse.json({
    status: 'Created',
    code: 201,
    markdowns_id: params.mid,
    comment
  })
}
