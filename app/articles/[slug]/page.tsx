import Link from 'next/link'
import { getPostBySlug } from '../../../lib/api'
import markdownToHtml from '../../../lib/markdownToHtml'
import AppHeader from '../../../components/AppHeader'
import { getAllComments } from '../../../lib/redis'
import CommentInputClient from '../../../components/CommentInputClient'

export function generateMetadata({ params }:  { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, ['slug', 'title', 'content'])
  return {
    title: `${post.title} - AREKORE`
  }
}

export default async function Articles({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, ['slug', 'title', 'content'])
  const content = await markdownToHtml(post.content || '')
  const comments = await getAllComments(post.slug)
  return (
    <div>
      <AppHeader title={post.title} />
      <div dangerouslySetInnerHTML={{ __html: content }}
      />
      <div>
        <p>コメント</p>
        { comments.length > 0 &&
          <ul>
            {comments.map((comment: string, index: number) => <li key={`comments-${index}`}>{comment}</li>)}
          </ul>
        }
      </div>
      <Link href="/" replace={true}>戻る</Link>
      <CommentInputClient slug={post.slug} />
    </div>
  )
}
