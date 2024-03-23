export interface Markdown {
  id: number
  slug: string
  title: string
  markdown: string
  category_id: number
}

export interface Markdowns {
  markdowns: Markdown[],
  total?: number
}

export interface Category {
  id: number
  name: string
}

export interface Categories {
  categories: Category[]
}

export type Items = {
  [key: string]: string
}
