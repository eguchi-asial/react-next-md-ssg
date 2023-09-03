import matter from 'gray-matter'
import { Categories, Comment, Markdown, MarkdownParams, Markdowns } from '../types/app'

export async function getMarkdowns(params?: MarkdownParams): Promise<Markdowns> {
  const requestUrl = `${process.env.API_BASE_URL}/api/articles/?cc=${new Date().getTime()}`
  const options: RequestInit = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    }
  }
  if (params) {
    options.body = JSON.stringify(params)
  }
  const response = await fetch(requestUrl, options)
  const json: Markdowns = await response.json()
  return json
}

export async function getMarkdownObjBySlug(slug: string): Promise<Markdown> {
  const response = await fetch(`${process.env.API_BASE_URL}/api/articles/${slug}?cc=${new Date().getTime()}`,
    {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      }
    }
  )
  return await response.json()
}

export async function getCommentObjByMid(mid: number): Promise<Comment[]> {
  const response = await fetch(`${process.env.API_BASE_URL}/api/articles/comments/${mid}?cc=${new Date().getTime()}`,
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

export async function getLatest10Markdowns(fields: string[] = []) {
  try {
    const markdownsJsonObj = await getMarkdowns()
    const { markdowns = [] } = markdownsJsonObj
    const posts = markdowns
      .map((md: Markdown) => getPostByMarkdown(md, fields))
      .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    return posts
  } catch(err) {
    // ignore
    console.error(err)
    return []
  }
}

export async function getMarkdownsByCategoryName(categoryName: string, fields: string[] = []) {
  try {
    const markdownsJsonObj = await getMarkdowns({ categoryName })
    const { markdowns = [] } = markdownsJsonObj
    const posts = markdowns
      .map((md: Markdown) => getPostByMarkdown(md, fields))
      .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    return posts
  } catch(err) {
    // ignore
    console.error(err)
    return []
  }
}

export async function getCategories() {
  try {
    const requestUrl = `${process.env.API_BASE_URL}/api/categories/?cc=${new Date().getTime()}`
    const response = await fetch(requestUrl,
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        }
      }
    )
    const json: Categories = await response.json()
    return json.categories
  } catch(err) {
    // ignore
    console.error(err)
    return []
  }
}
