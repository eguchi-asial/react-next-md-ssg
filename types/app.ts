export interface Markdown {
  id: number
  slug: string
  title: string
  markdown: string
  category_id: number
}

export interface Markdowns {
  markdowns: Markdown[]
}