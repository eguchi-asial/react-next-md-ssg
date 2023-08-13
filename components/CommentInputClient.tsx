'use client'

import CommentInput from "./CommentInput"

const CommentInputClient = ({ slug }: { slug: string }) => {
  const sendComment = (_comment: string) => fetch(`/api/articles/${slug}`, { method: 'POST' })
  
  return (
    <CommentInput onClickCallback={sendComment}/>
  )
}

export default CommentInputClient
