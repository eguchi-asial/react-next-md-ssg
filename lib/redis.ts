import { kv } from "@vercel/kv"

export async function getAllComments(slug: string) {
  const comments: string[] = await kv.lrange(`${slug}:comments`, 0, -1) || []
  return comments.filter(v => v)
}

export async function appendComment(slug: string, comment: string) {
  await kv.rpush(`${slug}:comments`, comment)
}