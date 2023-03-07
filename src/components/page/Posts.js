import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../rtk/features/posts/postsSlice'
import PostCard from '../PostCard'
import SortFilter from '../SortFilter'

const Posts = () => {
    const {posts, loading, isError, error} = useSelector(state => state.posts)
    const {filter} = useSelector(state=> state.filter)
    const dispatch = useDispatch()
    
    useEffect(()=> {
        dispatch(fetchPosts())
    },[dispatch])
    let content;
    if(loading){
      content = <h1>Data is Loading, Please wait</h1>
    }
    if(isError){
      content = <h1>{error}</h1>
    }
    if(posts?.length>0){
      content = posts.map(video=> <PostCard video = {video} />)
    }
    if(posts?.length === 0&& filter === 'Saved'){
      content = 'No Saved Post you have right now'
    }
  return (
    <>
    <section className="wrapper">
        <SortFilter />
        <main className="post-container" id="lws-postContainer">
          {content}
        </main>
    </section>
  </>
  )
}

export default Posts