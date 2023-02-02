import { createSlice } from '@reduxjs/toolkit';

const userAuthFromLocalStorage = () => {

  const user = JSON.parse(localStorage.getItem("user"));
const initialState = user
  ? { isLoggedIn: true, user  }
  : { isLoggedIn: false, user: null };

export const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        authenticateUser: (state) => {
            state.isAuth = true
        },
        unauthenticateUser: (state) => {
            state.isAuth = false
      },
        userInfo:(state) => {state.userInfo = true}
    },
});

export const { authenticateUser, unauthenticateUser } = authSlice.actions

export default authSlice.reducer;