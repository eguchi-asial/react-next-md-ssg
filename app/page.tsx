import Link from 'next/link'
import { getAllPosts } from '../lib/api'

export default async function Home() {
  const morePosts = getPosts()

  return (
    <div>
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
