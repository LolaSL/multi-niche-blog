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

export const { usersSuccess } = usersSlice.actions;

export const fetchUsers = () => async dispatch => {
    try {
        await getUsers().then((res) =>dispatch(usersSuccess(res.data)))
    } catch (e) {
        console.error(e.message);
    }
}
export const fetchUser = ({ id }) => async dispatch => {
    try {
        await getUserById(id).then((res) =>dispatch(usersSuccess(res.data.id)))
    } catch (e) {
        console.error(e.message);
    }
}
export const removeUser = ({id) => async dispatch => {
    try {
        await deleteUserById(id).then((res) =>dispatch(usersSuccess(res.data.id)))
    } catch (e) {
        console.error(e.message);
    }
}
export default usersSlice.reducer;


