import { createSlice } from '@reduxjs/toolkit';

const userAuthFromLocalStorage = () => {

  const isAuth = localStorage.getItem('isAuth')

  if (isAuth && JSON.parse(isAuth) === true) {
    return true
  }

  return false
}
const userInfoFromLocalStorage = () => {

 const userInfo =localStorage.getItem('userInfo')
 ? JSON.parse(localStorage.getItem('userInfo'))
 : null
}
const initialState = {
  userInfo: serInfoFromLocalStorage,
  isAuth: userAuthFromLocalStorage(),
}

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
    },
});

export const { authenticateUser, unauthenticateUser } = authSlice.actions

export default authSlice.reducer;