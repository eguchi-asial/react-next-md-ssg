'use client'

import CommentInput from "./CommentInput"

const CommentInputClient = ({ slug }: { slug: string }) => {
  const sendComment = async (comment: string) => {
    await fetch(`/api/articles/${slug}`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ comment })
      }
    )
    location.reload()
  }

  return (
    <CommentInput onClickCallback={sendComment} />
  )
}

export default CommentInputClient
