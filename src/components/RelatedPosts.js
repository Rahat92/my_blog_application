import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRelatedPosts } from '../rtk/features/relatedPosts/relatedPostsSlice'
import RelatedPostsCard from './RelatedPostsCard'
const RelatedPosts = ({tags, currentId}) => {
    const dispatch = useDispatch()
    const { relatedPosts} = useSelector(state=>state.relatedPosts)
    useEffect(()=> {
        dispatch(fetchRelatedPosts({tags,id:currentId}))
    },[dispatch, tags, currentId])
  return (
    <aside>
        <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">Related Posts</h4>
        {relatedPosts?.length>0?relatedPosts.map(post=>{
            return <RelatedPostsCard post = {post}/>
        }):'No Related Post Found'}
    </aside>
  )
}

export default RelatedPosts