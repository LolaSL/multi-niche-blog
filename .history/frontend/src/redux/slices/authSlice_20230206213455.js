import { createSlice } from '@reduxjs/toolkit';

const userAuthFromLocalStorage = () => {
  const isAuth = localStorage.getItem('isAuth')
  ? JSON.parse(localStorage.getItem('isAuth'))
  : null

  if (isAuth && JSON.parse(isAuth) ) {
    return true

  }

  return false;
}


const initialState = {
  isAuth: userAuthFromLocalStorage(),
  loading: false,
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.

};

export const authSlice = createSlice({
  name: 'auth',

    initialState,
    reducers: {
        authenticateUser: (state) => {
        state.isAuth = true
        },
        unauthenticateUser: (state) => {
          state.isAuth = false;
      },
    },
});

export const { authenticateUser, unauthenticateUser} = authSlice.actions;

export default authSlice.reducer;