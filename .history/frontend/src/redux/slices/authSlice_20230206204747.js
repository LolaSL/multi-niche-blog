import { createSlice } from '@reduxjs/toolkit';

const userAuthFromLocalStorage = () => {
  const isAuth = localStorage.getItem('user')

  if (isAuth && JSON.parse(isAuth) === res.data) {
    return true;
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