import { createSlice } from '@reduxjs/toolkit';

const userAuthFromLocalStorage = () => {
  const isAuth = localStorage.getItem('isA')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

  if (isAuth && JSON.parse(isAuth) ) {
    return true

  }

  return false;
}


const initialState = {
  isAuth: userAuthFromLocalStorage(),

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