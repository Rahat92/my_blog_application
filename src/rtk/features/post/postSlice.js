import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import createRequest from "../../axios";
import getPosts from "../posts/postsApi";

const initialState = {
    loading: false,
    post:{},
    isError: false,
    error: null
}


export const fetchPost = createAsyncThunk('post/fetchPost', async(postId)=> {
    const {data} = await createRequest.get(`/${postId}`)
    return data
})

const postSlice = createSlice({
    name:'post',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchPost.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchPost.fulfilled, (state, action) => {
            state.loading = false;
            state.post = action.payload
        })
        .addCase(fetchPost.rejected, (state, action) => {
            state.loading = false;
            state.post = {};
            state.isError = true;
            state.error = action.error.message
        })

    }
})

export default postSlice.reducer