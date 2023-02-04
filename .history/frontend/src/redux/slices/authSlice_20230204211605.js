import { createSlice } from '@reduxjs/toolkit';

const userAuthFromLocalStorage = () => {
  const isAuth = localStorage.getItem('isAuth')

  if (isAuth && JSON.parse(isAuth) === true) {
    return true;
  }

  return false;
}
const userDataFromLocalStorage = () => {
  const user = JSON.parse(localStorage.getItem('currentUser'))|| null
//  if (currentUser && JSON.parse(currentUser) === currentUser.id) {
//    return;
//  }
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
    userPayload: (state) => {
    
        state.currentUser = currentUser.id;
        }
    },
});

export const { authenticateUser, unauthenticateUser, currentUser,  userPayload } = authSlice.actions;

export default authSlice.reducer;