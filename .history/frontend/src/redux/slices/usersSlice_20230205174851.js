import { createSlice } from "@reduxjs/toolkit";
import { getUsers, getUserById, deleteUserById } from "../../apis/users.js";

//Slice
const usersSlice = createSlice({
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

const { usersSuccess } = usersSlice.actions;

const fetchUsers = () => async dispatch => {
    try {
        await getUsers().then((res) =>dispatch(usersSuccess(res.data)))
    } catch (e) {
        console.error(e.message);
    }
}
 const fetchUser = (id) => async dispatch => {
    try {
        await getUserById(id).then((res) =>dispatch(usersSuccess(res.data)))
    } catch (e) {
        console.error(e.message);
    }
}
const removeUser = (id) => async dispatch => {
    try {
        await deleteUserById(id).then((res) =>dispatch(usersSuccess(res.data)))
    } catch (e) {
        console.error(e.message);
    }
}
export default usersSlice.reducer;
export const { fetchUsers, fetchUsers, removeUser} = authSlice.actions;

