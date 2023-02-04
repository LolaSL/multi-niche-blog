import { createSlice } from '@reduxjs/toolkit';

const userAuthFromLocalStorage = () => {
  const isAuth = localStorage.getItem('isAuth')

  if (isAuth && JSON.parse(isAuth) === true) {
    return true;
  }

  return false;
}
const userDataFromLocalStorage = () => {
  const currentUser = localStorage.getItem('currentUser')
  if (currentUser.id && JSON.parse(currentUser) === currentUser.id) {
    return currentUser.data.user;
  }
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
    
        state.currentUser = currentUser;
        }
    },
});

export const { authenticateUser, unauthenticateUser, currentUser } = authSlice.actions;

export default authSlice.reducer;