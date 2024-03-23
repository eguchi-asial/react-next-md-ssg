import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'
import { Items } from '../types/app'
import { DateTime } from 'luxon'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory)
}

export function getMarkdownObjBySlug(slug: string, fields: string[] = []) {
  const markdownFiles = getPostSlugs()
  const postObject: Items[] = markdownFiles.map((slug) => getPostBySlug(slug, fields)) 
  return postObject.find((post: Items) => post.slug === slug)
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }
    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  items.date = items.date ? DateTime.fromISO(items.date, { zone: 'Asia/Tokyo' }).toFormat('yyyy-MM-dd') : ''

  return items
}


export function getMarkdowns(size: number = 10, fields: string[] = [], page: number = 1) {
  try {
    const markdownFiles = getPostSlugs()
    const posts = markdownFiles
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    .slice(page - 1, size)
    return { posts: posts, total: markdownFiles.length }
  } catch(err) {
    // ignore
    console.error(err)
    return {}
  }
}

export function getMarkdownsByCategoryName(categoryName: string, fields: string[] = []) {
  try {
    const markdownFiles = getPostSlugs()
    const posts = markdownFiles
    .map((slug) => getPostBySlug(slug, fields))
    .filter((post) => post.category === categoryName)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    return posts
  } catch(err) {
    // ignore
    console.error(err)
    return []
  }
}

export function getCategories() {
  const markdownFiles = getPostSlugs()
  const categories = markdownFiles
    .map((slug) => getPostBySlug(slug, [ 'category' ]).category)
  return [...new Set(categories)]
}
