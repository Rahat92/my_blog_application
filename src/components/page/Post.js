import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { fetchPost } from '../../rtk/features/post/postSlice'
import MainPost from '../MainPost'
import RelatedPosts from '../RelatedPosts'
const Post = () => {
    const dispatch = useDispatch()
    const {postId} = useParams()
    useEffect(()=> {
        dispatch(fetchPost(postId))
    },[postId])
    const {post, loading, isError, error} = useSelector(state=> state.post)
    if(Number(postId) === post.id){
        console.log('hello world')
    }
    let content;
    if(loading){
        content = <div>Loading data....</div>
    }
    if(isError){
        content = <div>{error}</div>
    }
    if(!loading&&!isError&&post=={}){
        content = <div>No data available</div>
    }
    if(!loading&&!isError&&post&&Number(postId) === post.id){
        content = <>
            <div className="container mt-8">
                <Link to="/" className="inline-block text-gray-600 home-btn" id="lws-goHome"><i
                className="mr-2 fa-solid fa-house"></i>Go Home</Link>
            </div>
            <section className="post-page-container">
                <MainPost post = {post}/>
                <RelatedPosts tags = {post.tags} currentId = {post.id}/>
            </section>            
        </>
    }
  return (
    <>
        {content}
    </>
  )
}

export default Post