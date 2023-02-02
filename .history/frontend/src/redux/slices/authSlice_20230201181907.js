import { createSlice } from '@reduxjs/toolkit';

const userAuthFromLocalStorage = () => {

  const currentUser = localStorage.setItem("user", JSON.stringify(currentUser));
},
}
const initialState = {

 current: userAuthFromLocalStorage(),
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authenticateUser: (state) => {
            state.isAuth = true
        },
        unauthenticateUser: (state) => {
            state.isAuth = false
      },
        userInfo:(state) => {state.userInfo = true}
    },
});

export const { authenticateUser, unauthenticateUser } = authSlice.actions

export default authSlice.reducer;