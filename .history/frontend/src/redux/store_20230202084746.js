import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import usersSlice from './slices/userSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice,
        user: userSlice
      
    },
});