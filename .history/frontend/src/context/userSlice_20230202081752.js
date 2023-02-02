// import { createSlice } from '@reduxjs/toolkit';

// const userDataFromLocalStorage = () => {
//   const currentUser = localStorage.getItem('isAuth')

//   if (isAuth && JSON.parse(isAuth) === true) {
//     return true
//   }

//   return false
// }

// // const userInfoFromLocalStorage = () => {
// //   const currentUser = JSON.parse(localStorage.getItem("user")) || null;
// //   if (currentUser && JSON.parse(currentUser) === true) {
// //     return true
// //   }

// //   return false
// // }

// const initialState = {
//   isAuth: userAuthFromLocalStorage(),
//   // currentUser: userInfoFromLocalStorage()
// }

// export const authSlice = createSlice({
//   name: 'auth',
//   // user: 'currentUser',
//   initialState,
//   reducers: {
//     authenticateUser: (state) => {
//       state.isAuth = true
//     },
//     unauthenticateUser: (state) => {
//       state.isAuth = false
//     },
//     // getCurrentUser: (state) => {
//     //   state.currentUser = true
//     // },
//     // removeCurrentUser:(state) => {
//     //   state.currentUser = false
//     // },
//   },

// })

// export const { authenticateUser, unauthenticateUser,
//   // getCurrentUser, removeCurrentUser
// } = authSlice.actions

// export default authSlice.reducer;

import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '0', name: 'Tianna Jenkins' },
  { id: '1', name: 'Kevin Grant' },
  { id: '2', name: 'Madison Price' }
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export default usersSlice.reducer