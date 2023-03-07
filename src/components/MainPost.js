import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateLike } from '../rtk/features/like/likeSlice'
import { updateSave } from '../rtk/features/save/saveSlice'

const MainPost = ({post}) => {
    const { title, description, image, tags, likes, isSaved, id} = post
    const {Saved} = useSelector(state=>state.isSaved)
    console.log(Saved);
    const [likesCount, setLikesCount] = useState(likes)
    const [savedPost, setSavedPost] = useState(isSaved)
    console.log(savedPost)
    const {totalLikes} = useSelector(state=>state.likes)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(updateLike({id,likesCount}))
    },[likesCount])
    useEffect(()=>{
        dispatch(updateSave({id, savedPost}))
    },[Saved,savedPost])
    const likeHandler = () => {
        setLikesCount(prev=>prev+1)
    }
    const saveHandler = () => {
        setSavedPost(prev=>!prev)
    }
  return (
    <main className="post">
        <img src={image} alt="githum" className="w-full rounded-md" id="lws-megaThumb" />
        <div>
            <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
            {title}
            </h1>
            <div className="tags" id="lws-singleTags">
            {tags?.length>0&&tags.map((tag,i)=>{
                return <span>#{tag}{i!==tags.length-1&&', '}</span>
            })}
            </div>
            <div className="btn-group">
            <button className="like-btn" id="lws-singleLinks" onClick={likeHandler}>
                <i className="fa-regular fa-thumbs-up"></i> {totalLikes}
            </button>
            <button className={`${Saved&&'active'} save-btn`} id="lws-singleSavedBtn" onClick={saveHandler}>
                <i className={`fa-regular fa-bookmark`}></i> {Saved?'Saved':'Save'}
            </button>
            </div>
            <div className="mt-6">
            <p>
                {description}
            </p>
            </div>
        </div>
    </main>
  )
}

export default MainPost