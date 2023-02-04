import { createSlice } from "@reduxjs/toolkit";
//Slice
const slice = createSlice({
    name: 'users',
    initialState: {
        users: []
    },
    reducers: {
        UsersSuccess: (state, action) => {
            state.users = action.payload;
            stat
        }
    },
});
export default slice.reducer;