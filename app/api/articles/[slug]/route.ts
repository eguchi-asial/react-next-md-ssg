import { NextRequest, NextResponse } from 'next/server'
import { appendComment } from '../../../../lib/redis'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

type Payload = {
  comment: string
}

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  const markdown = await prisma.markdowns.findFirstOrThrow({ where: { slug: params.slug } })
  return NextResponse.json(markdown)
}

export async function POST(request: NextRequest, { params }: { params: { slug: string } }) {
  const jsonData: Payload = await request.json()
  const comment = jsonData.comment
  await appendComment(params.slug, comment)
  return NextResponse.json({
    status: 'Created',
    code: 201,
    slug: params.slug,
    comment
  })
}
