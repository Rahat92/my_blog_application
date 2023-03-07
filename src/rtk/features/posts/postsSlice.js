import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import createRequest from "../../axios";
import getPosts from "./postsApi";

const initialState = {
    loading: false,
    posts:[],
    isError: false,
    error: null
}


export const fetchPosts = createAsyncThunk('posts/fetchPost', async(filter)=> {
    console.log(filter);
    const {data} = await createRequest.get('/')
    let result = data&&data.length>0&&filter&&filter.filter === 'Saved'? data.filter(el=>el.isSaved === true):data;
    if(filter&&filter.sort === 'most_liked'){
        result = result.sort((a,b) => {
            return (b.likes - a.likes)
        })
    }else if(filter&&filter.sort === 'newest'){
        result = result.sort((a,b)=> new Date(b.createdAt) - new Date(a.createdAt))
    }
    return result;
})

const postsSlice = createSlice({
    name:'posts',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchPosts.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.posts = action.payload
        })
        .addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false;
            state.posts = [];
            state.isError = true;
            state.error = action.error.message
        })

    }
})

export default postsSlice.reducer