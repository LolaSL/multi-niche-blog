import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authSlice from './slices/authSlice';
import
export const store = configureStore({
    reducer: {
        auth: authSlice,
      
    },
});