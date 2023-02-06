import { createSlice } from "@reduxjs/toolkit";
import { getUsers, getUserById, deleteUser } from "../../apis/users.js";

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
        await getUsers().then((res) =>dispatch(usersSuccess(res.data)))
    } catch (e) {
        console.error(e.message);
    }
}

export const fetchUser = (id) => async dispatch => {
    try {
        await getUserById(id).then((res) =>dispatch(usersSuccess(res.data)))
    } catch (e) {
        console.error(e.message);
    }
}