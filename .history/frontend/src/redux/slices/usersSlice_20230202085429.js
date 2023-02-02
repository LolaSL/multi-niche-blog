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

const initialState =  { currentUser: localStorage.getItem('currentUser')
? JSON.parse(localStorage.getItem('currentUser'))
: null} 
  // { id: '1', name: 'Test1' },
  // { id: '2', name: 'Test2' },
  // { id: '3', name: 'test3' }


// const userInfoFromLocalStorage = () => {
//   const currentUser = JSON.parse(localStorage.getItem("user")) || null;
//   return currentUser;

// }
const usersSlice = createSlice({
  name: 'users',
  currentUser: userInfoFromLocalStorage(),
  initialState,
  reducers: {}
})

export default usersSlice.reducer;