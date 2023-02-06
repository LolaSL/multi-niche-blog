import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from './slices/authSlice';
import {  usersReducer } from './slices/usersSlice';
import { userReducer } from './slices/userReducer';

export * from './slices/authSlice';
export * from './slices/usersSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        users: usersReducer.reducer,
        user:
    },
});


// import { configureStore } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';
// import authSlice from './slices/authSlice';
// import usersSlice from './slices/usersSlice';

// const reducer = combineReducers({
//     users: usersSlice,
//      auth: authSlice,
// })
// export const store = configureStore({
//     reducer
// });