import Link from 'next/link'
import AppHeader from '../../../../components/AppHeader'
import { notFound } from 'next/navigation'
import styles from './page.module.scss'
import { getMarkdownsByCategoryName } from '../../../../lib/api'

export async function generateMetadata({ params }:  { params: { name: string } }) {
  return {
    title: `カテゴリー ${params.name} の一覧 - AREKORE`
  }
}

export default async function CategoryArticle({ params }: { params: { name: string } }) {
  try {
    const categoryName = decodeURI(params.name)
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