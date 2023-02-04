import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authSlice from './slices/authSlice';
import user
export const store = configureStore({
    reducer: {
        auth: authSlice,
      
    },
});