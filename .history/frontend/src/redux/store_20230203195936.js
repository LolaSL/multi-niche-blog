import { configureStore } from '@reduxjs/toolkit';
import {combineReducers}
import authSlice from './slices/authSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice,
      
    },
});