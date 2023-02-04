import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authSlice from './slices/authSlice';
import usersSlice from './slices/usersSlice';

const reducer = combineReducers({
    users: usersSlice,
     auth: authSlice,
})
export const store = configureStore({
    reducer
});