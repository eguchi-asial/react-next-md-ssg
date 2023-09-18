'use client'

import { useState } from 'react'
import CommentInput from './CommentInput'

/** CSRコンポーネント `CommentInput` 専用のラッパー */
const CommentInputClient = ({ mid }: { mid: number }) => {
  const [ isAwaiting, setisAwaiting ] = useState(false)
  const sendComment = async (comment: string) => {
    setisAwaiting(true)
    await fetch(`/api/articles/comments/${mid}`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ comment })
      }
    )
    setisAwaiting(false)
    location.reload()
  }

  return (
    <CommentInput onClickCallback={sendComment} isAwaiting={isAwaiting} />
  )
}

export default CommentInputClient
