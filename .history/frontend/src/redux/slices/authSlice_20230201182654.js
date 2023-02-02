import { createSlice } from '@reduxjs/toolkit';

const userAuthFromLocalStorage = () => {

const user = JSON.parse(localStorage.getItem("user"));
const initialState = user
  ? { isLoggedIn: true, user  }
  : { isLoggedIn: false, user: null };
  
const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        authenticateUser: (state) => {
            state.user = true
        },
        unauthenticateUser: (state) => {
            state.user = false
      }
    },
});

export const { authenticateUser, unauthenticateUser } = authSlice.actions

export default authSlice.reducer;