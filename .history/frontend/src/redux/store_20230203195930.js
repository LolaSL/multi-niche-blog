import { configureStore } from '@reduxjs/toolkit';
import {combi}
import authSlice from './slices/authSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice,
      
    },
});