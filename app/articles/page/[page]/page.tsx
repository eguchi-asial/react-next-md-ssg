import Link from 'next/link'
import AppHeader from '../../../../components/AppHeader'
import styles from './page.module.scss'
import { getMarkdownsByPage } from '../../../../lib/api'

export default async function Articles({ params }: { params: { page: number } }) {
  const contents = await getPosts(params.page)
    return (
      <div className={styles.contents}>
        <AppHeader />
        { params.page } ページ

        { contents.length > 0 &&
        <div className={styles.contents}>
          <div className={styles['latest-reviews']}>
            <div className={styles['items-wrapper']}>
              <ul className={styles.items}>
                { contents.map((post, index) =>
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

        <Link href="/" replace={true}>戻る</Link>
      </div>
    )
}

const getPosts = async (page: number) => {
  return await getMarkdownsByPage(page, [
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])
}
