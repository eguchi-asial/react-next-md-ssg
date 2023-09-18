'use client'
import { useState } from 'react'

const CommentInput = ({ onClickCallback, isAwaiting }: { onClickCallback: Function, isAwaiting: boolean }) => {
  const [ commentValue, setCommentValue ] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setCommentValue(() => e.target.value)

  const onClick = () => {
    onClickCallback(commentValue)
  }
  return (
    <div>
      <input type="text" defaultValue={commentValue} onChange={ handleChange } /> <button onClick={ onClick } disabled={ isAwaiting }>送信</button>
    </div>
  )
}

export default CommentInput
