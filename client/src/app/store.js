import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../features/auth/authSlice'
import activitySlice from '../features/acitivity/activitySlice'


export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,

    exercises: activitySlice.reducer,



  
  },
})