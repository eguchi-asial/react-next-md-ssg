import Link from 'next/link'
import type { Metadata } from 'next'
import { getLatest10Posts } from '../lib/api'
import styles from './page.module.scss'
import AppHeader from '../components/AppHeader'

export const metadata: Metadata = {
  title: 'AREKORE',
  description: 'View articles with news, reviews, testimonials, and impressions. On this TOP page, the latest 10 items are displayed.',
}

export default async function Home() {
  const latest10Contents = await getPosts()

  return (
    <div>
      <AppHeader />
      {
        latest10Contents.length > 0 &&
        <div className={styles.contents}>
          <div className={styles.main}>
            <h2 className={styles['latest-reviews-title']}>
              新着({ latest10Contents.length })
            </h2>
            <div className={styles['items-wrapper']}>
              <ul className={styles.items}>
                { latest10Contents.map((post, index) =>
                <li key={ index }>
                  <Link
                    as={`/articles/${post.slug}`}
                    href="/articles/[slug]"
                  >
                    {post.title}
                  </Link>
                </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

const getPosts = () => {
  const allPosts = getLatest10Posts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return allPosts
}
