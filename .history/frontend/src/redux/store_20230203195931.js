import { configureStore } from '@reduxjs/toolkit';
import {combine}
import authSlice from './slices/authSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice,
      
    },
});