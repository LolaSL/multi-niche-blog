import { createSlice } from '@reduxjs/toolkit';

const userAuthFromLocalStorage = () => {
  const isAuth = localStorage.getItem('isAuth')

  if (isAuth && JSON.parse(isAuth) === true) {
    return true;
  }

  return false;
}
const userDataFromLocalStorage = () => {
  const currentUser = JSON.parse(localStorage.getItem("user")) || null;
  // if (currentUser && JSON.parse(currentUser) === users.id) {
  //   return users.id;
  // }
}
const initialState = {
  isAuth: userAuthFromLocalStorage(),
  payload: userDataFromLocalStorage()
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
    
        state.currentUser = user.;
        }
    },
});

export const { authenticateUser, unauthenticateUser, currentUser,  payload } = authSlice.actions;

export default authSlice.reducer;