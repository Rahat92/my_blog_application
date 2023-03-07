import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import createRequest from "../../axios"

const initialState = {
}

export const updateLike = createAsyncThunk('like/updateLike', async({id,likesCount}) => {
    console.log(likesCount);
    const {data} = await createRequest.patch(`/${id}`,{
        likes:likesCount
    })
    return data.likes
})

const likeSlice = createSlice({
    name:'like',
    initialState,
    extraReducers:(builder) => {
        builder.addCase(updateLike.fulfilled, (state,action) => {
            state.totalLikes = action.payload
        })
    }
})

export default likeSlice.reducer;