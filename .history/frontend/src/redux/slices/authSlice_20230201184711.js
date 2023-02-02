import { createSlice } from '@reduxjs/toolkit';

const userAuthFromLocalStorage = () => {
  const isAuth = localStorage.getItem('isAuth')
const currentUser = JSON.parse(localStorage.getItem("user")) || null
  if (isAuth && JSON.parse(isAuth) === true) {
    return true
  }

  return false
}

const initialState = {
  isAuth: userAuthFromLocalStorage(),
  currentUser: userAuthFromLocalStorage(),
}

export const authSlice = createSlice({
  name: 'auth',
  user: 'currentUser',
  initialState,
  reducers: {
    authenticateUser: (state) => {
      state.isAuth = true
    },
    unauthenticateUser: (state) => {
      state.isAuth = false
    },
    user: (state) => {
      state.isAuth = true
    }
  },

})

export const { currenauthenticateUser, unauthenticateUser } = authSlice.actions

export default authSlice.reducer;