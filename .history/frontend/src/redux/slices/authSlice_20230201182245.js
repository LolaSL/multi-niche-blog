import { createSlice } from '@reduxjs/toolkit';

const userAuthFromLocalStorage = () => {

  const currentUser = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null
}
const initialState = currentUser 
  ? { isLoggedIn: true, currentUser  }
  : { isLoggedIn: false, user: null };

export const authSlice = createSlice({
    name: 'auth',
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