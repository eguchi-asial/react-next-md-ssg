import Link from 'next/link'
import AppHeader from '../../../../components/AppHeader'
import { notFound } from 'next/navigation'
import styles from './page.module.scss'
import { getMarkdownsByCategoryName } from '../../../../lib/api'

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params: { name } }:  { params: { name: string } }) {
  const categoryName = decodeURI(name)
  return {
    title: `カテゴリー ${categoryName} の一覧 - AREKORE`
  }
}

export default async function CategoryArticle({ params: { name } }: { params: { name: string } }) {
  try {
    const categoryName = decodeURI(name)
    const markdowns = await getPosts(categoryName)
    return (
      <div>
      <AppHeader />
      {
        markdowns.length > 0 &&
        <div className={styles.contents}>
          <div className={styles['latest-reviews']}>
            <h2 className={styles['latest-reviews-title']}>
              カテゴリー { categoryName } の記事一覧
            </h2>
            <div className={styles['items-wrapper']}>
              <ul className={styles.items}>
                { markdowns.map((post, index) =>
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
    </div>
    )
  } catch (err) {
    return notFound()
  }
}

const getPosts = async (categoryName: string) => {
  const allPosts: {
    [key: string]: string
  }[] = await getMarkdownsByCategoryName(categoryName, [
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return allPosts
}