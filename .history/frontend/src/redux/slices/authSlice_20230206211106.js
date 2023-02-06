import { createSlice } from '@reduxjs/toolkit';

const userAuthFromLocalStorage = () => {

  const isAuth = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

  if (isAuth && JSON.parse(isAuth) === true) {
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
        authenticateUser: (state, payload) => {
        state.isAuth = true
        return { ...state, userInfo: payload };
        },
        unauthenticateUser: (state) => {
          state.isAuth = false;
      },
    },
});

export const { authenticateUser, unauthenticateUser} = authSlice.actions;

export default authSlice.reducer;