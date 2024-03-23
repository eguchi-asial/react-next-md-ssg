import Link from 'next/link'
import AppHeader from '../../../../components/AppHeader'
import styles from './page.module.scss'
import { getMarkdowns } from '../../../../lib/api'

export default async function Articles({ params }: { params: { page: number } }) {
  const { posts = [], total = 0 } = getPosts(params.page)
  return (
    <div className={styles.contents}>
      <AppHeader />
      { params.page } ページ

      { posts.length > 0 &&
      <div className={styles.contents}>
        <div className={styles['latest-reviews']}>
          <div className={styles['items-wrapper']}>
            <ul className={styles.items}>
              { posts.map((post, index) =>
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
        </div>
      </div>
    }

      {
        params.page > 1 &&
        <Link href={`/articles/page/${Number(params.page) - 1}`} replace={true}>戻る</Link>
      }
      {
        (params.page * 10) < total &&
        <Link href={`/articles/page/${Number(params.page) + 1}`}>次へ</Link>
      }
    </div>
  )
}

const getPosts = (page: number) => {
  const markdowns = getMarkdowns(10, [
    'category',
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ],
  page)
  return markdowns
}
