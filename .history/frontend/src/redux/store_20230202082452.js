import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import user

export const store = configureStore({
    reducer: {
        auth: authSlice,
      
    },
});