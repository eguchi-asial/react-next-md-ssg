export interface Markdown {
  id: number
  slug: string
  title: string
  markdown: string
  category_id: number
}

export interface Comment {
  id: number
  markdown_id: number
  comment: string
  created_at: string
  updated_at: string
}

export interface Markdowns {
  markdowns: Markdown[]
}

export interface Comments {
  markdowns: Comment[]
}

export interface Category {
  id: number
  name: string
}

export interface Categories {
  categories: Category[]
}
