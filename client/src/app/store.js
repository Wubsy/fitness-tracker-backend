import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../features/auth/authSlice'
//import goalReducer from '../features/goals/goalSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    //goals: goalReducer,
  },
})