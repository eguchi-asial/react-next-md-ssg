import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { Markdown, Markdowns } from '../types/app'

const postsDirectory = join(process.cwd(), '_posts')

export async function getMarkdowns(): Promise<Markdowns> {
  const response = await fetch(`${process.env.API_BASE_URL}/api/articles/`,
    {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      }
    }
  )
  const json = await response.json()
  return json
}

export async function getMarkdownObjBySlug(slug: string): Promise<Markdown> {
  const response = await fetch(`${process.env.API_BASE_URL}/api/articles/${slug}`,
    {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      }
    }
  )
  return await response.json()
}

export function getPostByMarkdown(md: Markdown, fields: string[] = []) {
  const { data, content } = matter(md.markdown)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = md.slug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export async function getLatest10Posts(fields: string[] = []) {
  const markdowns: Markdown[] = (await getMarkdowns()).markdowns
  console.log(markdowns)
  const posts = markdowns.map((md: Markdown) => getPostByMarkdown(md, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}
