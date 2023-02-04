import { createSlice } from '@reduxjs/toolkit';

const userAuthFromLocalStorage = () => {
  const isAuth = localStorage.getItem('isAuth')

  if (isAuth && JSON.parse(isAuth) === true) {
    return true;
  }

  return false;
}

const userDataFromLocalStorage = () => {
const user = JSON.parse(localStorage.getItem('currentUser')) || null
 if (!user === null) {
   return;
 }
}
const initialState = {
  isAuth: userAuthFromLocalStorage(),
 user: userDataFromLocalStorage()
};

export const authSlice = createSlice({
    name: ['auth', 'currentUser'],
    initialState,
    reducers: {
        authenticateUser: (state) => {
        state.isAuth = true;
        },
        unauthenticateUser: (state) => {
          state.isAuth = false;
      },
    userData: (state) => {
    
        state.user = true;
        }
    },
});

export const { authenticateUser, unauthenticateUser, userData} = authSlice.actions;

export default authSlice.reducer;