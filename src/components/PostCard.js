import React from 'react'
import { Link } from 'react-router-dom'

const PostCard = ({video}) => {
  const {createdAt, description, id, image, isSaved, like, likes, tags, title} = video;

  return (
    <div className="lws-card">
        <Link to={`/posts/${id}`}>
            <img src={image} className="lws-card-image" alt="" />
        </Link>
        <div className="p-4">
        <div className="lws-card-header">
            <p className="lws-publishedDate">{createdAt}</p>
            <p className="lws-likeCount"><i className="fa-regular fa-thumbs-up"></i>{likes}</p>
        </div>
        <Link to= {`/posts/${id}`} className="lws-postTitle"> {title} </Link>
        <div className="lws-tags">
          {tags?.length>0&&tags.map((tag,i)=>{
            return <span>#{tag}{i!==tags.length-1&&','}</span>
          })}
        </div>
        <div className="flex gap-2 mt-4">
            {isSaved&&<span className="lws-badge"> Saved </span>}
        </div>
        </div>
    </div>
  )
}

export default PostCard