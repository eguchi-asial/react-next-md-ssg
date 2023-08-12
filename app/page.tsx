import Link from 'next/link'
import type { Metadata } from 'next'
import { getAllPosts } from '../lib/api'
import styles from './page.module.scss'
import AppHeader from '../components/AppHeader'

export const metadata: Metadata = {
  title: 'AREKORE',
  description: 'View articles with news, reviews, testimonials, and impressions. On this TOP page, the latest 10 items are displayed.',
}

export default async function Home() {
  const morePosts = getPosts()

  return (
    <div>
      <AppHeader title={'AREKORE'}></AppHeader>
      {
        morePosts.length > 0 &&
        <div>
          <ul>
            { morePosts.map((post, index) =>
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
      }
    </div>
  )
}

export const getPosts = () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return allPosts
}
