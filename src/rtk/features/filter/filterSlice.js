import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    sort:'Default',
    filter:'All'
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers:{
        setFilterValue:(state, action) => {
            state.sort = action.payload.sort;
            state.filter = action.payload.filter;
        }
    }
})

export default filterSlice.reducer;
export const {setFilterValue} = filterSlice.actions

