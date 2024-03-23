import Link from 'next/link'
import { getMarkdownObjBySlug } from '../../../lib/api'
import markdownToHtml from '../../../lib/markdownToHtml'
import AppHeader from '../../../components/AppHeader'
import { notFound } from 'next/navigation'
import styles from './page.module.scss'
import { Items } from '../../../types/app'

export async function generateMetadata({ params }:  { params: { slug: string } }) {
  return {
    title: `${params.slug} - AREKORE`
  }
}

export default async function Articles({ params }: { params: { slug: string } }) {
  try {
    const post: Items | undefined = getMarkdownObjBySlug(params.slug, ['slug', 'title', 'content'])
    if (!post) {
      return notFound()
    }
    const content = await markdownToHtml(post.content || '')
    return (
      <div className={styles.article}>
        <AppHeader title={post.title} />
        <div className={styles.markdown} dangerouslySetInnerHTML={{ __html: content }}
        />
        <Link href="/" replace={true}>戻る</Link>
      </div>
    )
  } catch (err) {
    return notFound()
  }
}
