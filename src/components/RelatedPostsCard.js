import React from 'react'
import { Link } from 'react-router-dom';

const RelatedPostsCard = ({post}) => {
    const {createdAt, id, image, tags, title} = post;
  return (
        <div className="space-y-4 related-post-container">
            <div className="card">
                <Link to={`/posts/${id}`}>
                    <img src={image} className="card-image" alt="" />
                </Link>
                <div className="p-4">
                    <Link to={`/posts/${id}`} className="text-lg post-title lws-RelatedPostTitle">
                    {title}
                    </Link>
                    <div className="mb-0 tags">
                    {tags?.length>0&&tags.map((tag,i)=>{
                        return <span>#{tag}{i!==tags.length-1&&', '}</span>
                    })}
                    </div>
                    <p>{createdAt}</p>
                </div>
            </div>
        </div>
  )
}

export default RelatedPostsCard