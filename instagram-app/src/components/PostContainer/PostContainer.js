import React from 'react'
import './PostContainer.css'
// import CommentSection from '../CommentSection/CommentSection'

const PostContainer = (props) => {
  return (
    <div className="post-card">
      <div id="x">
        <div className="card-header">
          <img src={props.dummies.thumbnailUrl} alt="" className="profile-pic"></img>
          <p className="username">{props.dummies.username}</p>
        </div>
        <div className="post-img">
          <img src={props.dummies.imageUrl} alt="''" className="card-img"></img>
        </div>
        <div className="functions">
          <button className="function-btn like"><i class="far fa-heart"></i></button>
          <button className="function-btn comment"><i class="far fa-comment"></i></button>
        </div>
        <p className="like-counter"><strong>{props.dummies.likes } likes</strong></p>
        {/* <CommentSection dummies={props.dummies.comments.username}/> */}
      </div>
    </div>
)}

export default PostContainer