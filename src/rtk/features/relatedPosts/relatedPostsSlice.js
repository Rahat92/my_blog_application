import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import createRequest from "../../axios";
import getPosts from "../posts/postsApi";

const initialState = {
    loading: false,
    relatedPosts:[],
    isError: false,
    error: null
}


export const fetchRelatedPosts = createAsyncThunk('relatedPosts/fetchPost', async({tags, id})=> {
   
    let string = tags&&tags.length>0?(
        tags.map(tag=> `tags_like=${tag}`)
    ).join('&')+`&id_ne=${id}`:`id_ne=${id}`
    const {data} = await createRequest.get(`/?${string}`)
    return data
})

const relatedPostsSlice = createSlice({
    name:'relatedPosts',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchRelatedPosts.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchRelatedPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.relatedPosts = action.payload
        })
        .addCase(fetchRelatedPosts.rejected, (state, action) => {
            state.loading = false;
            state.relatedPosts = [];
            state.isError = true;
            state.error = action.error.message
        })

    }
})

export default relatedPostsSlice.reducer