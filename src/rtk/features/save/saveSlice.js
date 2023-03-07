import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import createRequest from "../../axios"

const initialState = {
      
}


export const updateSave = createAsyncThunk('save/fetchSave', async({id, savedPost}) => {
    const {data} = await createRequest.patch(`/${id}`,{
        isSaved : savedPost
    })
    return data.isSaved
})
const saveSlice = createSlice({
    name:'save',
    initialState,
    extraReducers:(builder) => {
        builder.addCase(updateSave.pending, (state, action) => {
            state.Saved = state.Saved
        })
        builder.addCase(updateSave.fulfilled, (state, action) => {
            state.Saved = action.payload
        })
        builder.addCase(updateSave.rejected, (state, action) => {
            state.Saved = state.Saved
        })
    }
})

export default saveSlice.reducer