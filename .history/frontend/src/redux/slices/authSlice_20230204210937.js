import { createSlice } from '@reduxjs/toolkit';

const userAuthFromLocalStorage = () => {
  const isAuth = localStorage.getItem('isAuth')

  if (isAuth && JSON.parse(isAuth) === true) {
    return true;
  }

  return false;
}
const userDataFromLocalStorage = () => {
  let user = req.user

  let payload = {
    id: user.id,
    email: user.email,
  }
  const currentUser = JSON.parse(localStorage.getItem("user")) || null;
  // if (currentUser && JSON.parse(currentUser) === user.id) {
  //   return user.id;
  // }
}
const initialState = {
  isAuth: userAuthFromLocalStorage(),
  
const payload = {
    id: user.id,
    email: user.email,
  }
  // payload: userDataFromLocalStorage()
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authenticateUser: (state) => {
        state.isAuth = true;
        },
        unauthenticateUser: (state) => {
          state.isAuth = false;
      },
    payload: (state) => {
    
        state.currentUser = currentUser.data;
        }
    },
});

export const { authenticateUser, unauthenticateUser, currentUser,  payload } = authSlice.actions;

export default authSlice.reducer;