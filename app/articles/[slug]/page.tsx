import Link from 'next/link'
import { getPostBySlug } from '../../../lib/api'
import markdownToHtml from '../../../lib/markdownToHtml'
import styles from './page.module.css'
import AppHeader from '../../../components/AppHeader'

export function generateMetadata({ params }:  { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, ['slug', 'title', 'content'])
  return {
    title: `${post.title} - AREKORE`
  }
}

export default async function Articles({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, ['slug', 'title', 'content'])
  const content = await markdownToHtml(post.content || '')
  return (
    <div>
      <AppHeader title={post.title} />
      <div dangerouslySetInnerHTML={{ __html: content }}
      />
      <Link href="/" replace={true}>戻る</Link>
    </div>
  )
}
