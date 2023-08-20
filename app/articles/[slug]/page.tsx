import Link from 'next/link'
import { getMarkdownObjBySlug, getPostByMarkdown } from '../../../lib/api'
import markdownToHtml from '../../../lib/markdownToHtml'
import AppHeader from '../../../components/AppHeader'
import { getAllComments } from '../../../lib/redis'
import CommentInputClient from '../../../components/CommentInputClient'
import { notFound } from 'next/navigation'
import styles from './page.module.scss'

export async function generateMetadata({ params }:  { params: { slug: string } }) {
  return {
    title: `${params.slug} - AREKORE`
  }
}

export default async function Articles({ params }: { params: { slug: string } }) {
  try {
    const markdown = await getMarkdownObjBySlug(params.slug)
    const post = getPostByMarkdown(markdown, ['slug', 'title', 'content'])
    const content = await markdownToHtml(post.content || '')
    const comments = await getAllComments(post.slug)
    return (
      <div className={styles.article}>
        <AppHeader title={post.title} />
        <div className={styles.markdown} dangerouslySetInnerHTML={{ __html: content }}
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
  } catch (err) {
    return notFound()
  }
}
