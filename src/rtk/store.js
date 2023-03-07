import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../rtk/features/posts/postsSlice'
import postReducer from '../rtk/features/post/postSlice';
import relatedPostReducer from '../rtk/features/relatedPosts/relatedPostsSlice';
import likesReducer from '../rtk/features/like/likeSlice';
import savedReducer from '../rtk/features/save/saveSlice';
import filterReducer from '../rtk/features/filter/filterSlice';
export const store = configureStore({
  reducer: {
    posts: postsReducer,
    post: postReducer,
    relatedPosts: relatedPostReducer,
    likes: likesReducer,
    isSaved: savedReducer,
    filter: filterReducer
  },
});
