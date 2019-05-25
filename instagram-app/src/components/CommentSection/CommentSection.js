import React from 'react'
import './CommentSection.css'

const CommentSection = props => {
  return (

    <div className="comment-section">
      {props.comments.map(comment => {
         return (<p><strong>{comment.username}</strong> {comment.text}</p>)
      })}
    </div>
  )
}

export default CommentSection