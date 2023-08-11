import { getPostBySlug } from '../../../lib/api'
import markdownToHtml from '../../../lib/markdownToHtml'
import styles from './page.module.css'

export default async function Articles({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, ['slug', 'title', 'content'])
  const content = await markdownToHtml(post.content || '')
  return (
    <div>
      <div className={styles.main}>
        { post.title }
      </div>
      <div dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
