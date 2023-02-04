import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authSlice from './slices/authSlice';
import usersSlice from './slices/usersSlice';
export const store = configureStore({
    reducer: {
        auth: authSlice,
      
    },
});