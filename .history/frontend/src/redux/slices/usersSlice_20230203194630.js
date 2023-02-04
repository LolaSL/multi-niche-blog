import { createSlice } from "@reduxjs/toolkit";
//Slice
const slice = createSlice({
    name: 'users',
    initialState: {
        users: []
    },
    reducers: {
        Users: (state, action) => { state.users = action.payload }
    },
});
export default slice.reducer;