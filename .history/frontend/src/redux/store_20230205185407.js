import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './auth.slice';
import { usersReducer } from './users.slice';

export * from './slices/authSlice';
export * from './slices/usersSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        users: usersReducer
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