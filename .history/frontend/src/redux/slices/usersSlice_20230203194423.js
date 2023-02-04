import { createSlice } from "@reduxjs/toolkit";
//Slice
const slice = createSlice({
    name: 'users',
    initialState: {
        users: []
    },
    reducers: {
        getUsers: (state, action) => { state.users = action.payload }
    },
});
export default