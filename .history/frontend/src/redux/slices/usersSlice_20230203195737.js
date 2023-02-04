import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../../apis/auth";

//Slice
const slice = createSlice({
    name: 'users',
    initialState: {
        users: []
    },
    reducers: {
        UsersSuccess: (state, action) => {
            state.users = action.payload;
            state.isLoading = false;
        },
    },
});
export default slice.reducer;

const { usersSuccess } = slice.actions;

export const fetchUsers = () => async dispatch => {
    try {
        await getUsers(usersSuccess).then((response) =>dispatch(usersSuccess(response)))
    } catch (err) {
        console.log(err);
    }
}