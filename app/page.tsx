import Link from 'next/link'
import type { Metadata } from 'next'
import { getCategories, getLatestMarkdowns } from '../lib/api'
import styles from './page.module.scss'
import AppHeader from '../components/AppHeader'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'AREKORE',
  description: 'View articles with news, reviews, testimonials, and impressions. On this TOP page, the latest 10 items are displayed.',
}

export default async function Home() {
  const latest10Contents = await getPosts()
  const categories = await getCategories()

  return (
    <div>
      <AppHeader />
      {
        latest10Contents.length > 0 &&
        <div className={styles.contents}>
          <div className={styles['latest-reviews']}>
            <h2 className={styles['latest-reviews-title']}>
              新着({ latest10Contents.length })
            </h2>
            <div className={styles['items-wrapper']}>
              <ul className={styles.items}>
                { latest10Contents.map((post, index) =>
                <li className="oddcolor" key={ index }>
                  <Link
                    className={styles.link}
                    as={`/articles/${post.slug}`}
                    href="/articles/[slug]"
                  >
                    <p className={styles.title}>{post.title}</p>
                    <p className={styles.date}>{post.date}</p>
                  </Link>
                </li>
                )}
              </ul>
            </div>
            <p>
            <Link
              className="arrowlink"
              as={'/articles/page/1'}
              href="/articles/page/[page]"
            >
              すべてみる
            </Link>
            </p>
          </div>
          <div className={styles.categories}>
            <h2 className={styles['categories-title']}>
              カテゴリー
            </h2>
            <div className={styles['items-wrapper']}>
              <ul className={styles.items}>
                { categories.map((category, index) =>
                <li className="oddcolor" key={ index }>
                  <Link
                    href={`/articles/categories/${category.name}`}
                  >
                    {category.name}
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

const getPosts = async () => {
  const allPosts = await getLatestMarkdowns(10, [
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return allPosts
}
