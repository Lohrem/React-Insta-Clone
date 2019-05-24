import React from 'react'
import './PostContainer.css'

const PostContainer = () => {
  return (
    <div className="post-card">
      <div className="card-header">
        <img src="#" alt="" className="profile-pic"></img>
        <p className="username"></p>
      </div>
      <div className="post-img">
        <img src="#" alt="''" className="card-img"></img>
      </div>
      <div className="functions">

      </div>
      <p className="like-counter"></p>
    </div>
  )
}

export default PostContainer