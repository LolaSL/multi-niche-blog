import { createSlice } from '@reduxjs/toolkit';

const userAuthFromLocalStorage = () => {
  const isAuth = localStorage.getItem('isAuth')

  if (isAuth && JSON.parse(isAuth) === true) {
    return true
  }

  return false
}

// const userInfoFromLocalStorage = () => {
//   const currentUser = JSON.parse(localStorage.getItem("user")) || null;
//   if (currentUser && JSON.parse(currentUser) === true) {
//     return true
//   }

//   return false
// }

const initialState = {
  isAuth: userAuthFromLocalStorage(),
  // currentUser: userInfoFromLocalStorage()
}

export const authSlice = createSlice({
  name: 'auth',
  // user: 'currentUser',
  initialState,
  reducers: {
    authenticateUser: (state) => {
      state.isAuth = true
    },
    unauthenticateUser: (state) => {
      state.isAuth = false
    },

  },

})

export const { authenticateUser, unauthenticateUser,
  // getCurrentUser, removeCurrentUser
} = authSlice.actions

export default authSlice.reducer;