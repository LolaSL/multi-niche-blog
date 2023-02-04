import { createSlice } from "@reduxjs/toolkit";
//Slice
const slice = createSlice({
    name: 'users',
    initialState: {
        users:[]
    },
    reducers: {
        getUsers: ()
    }
})