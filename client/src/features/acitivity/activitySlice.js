import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import activityService from './activityService'

const initialState = {
    exercises: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
  }
  
// Create new activity
export const createActivity = createAsyncThunk(
    'exercises/create',
    async (activityData, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token
        return await activityService.createActivity(activityData, token)
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
  )
  // Get user activities
export const getActivity = createAsyncThunk(
    'exercises/getAll',
    async (_, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token
        return await activityService.getActivity(token)
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
  )
  
  // Delete user activities
  export const deleteActivity = createAsyncThunk(
    'exercises/delete',
    async (exercise, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token
        return await activityService.deleteActivity(exercise, token)
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
  )
  export const activitySlice = createSlice({
    name: 'exercise',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
      builder
        .addCase(createActivity.pending, (state) => {
          state.isLoading = true
        })
        .addCase(createActivity.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.exercises.push(action.payload)
        })
        .addCase(createActivity.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        .addCase(getActivity.pending, (state) => {
            state.isLoading = true
          })
          .addCase(getActivity.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.exercises = action.payload
          })
          .addCase(getActivity.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
          })
          .addCase(deleteActivity.pending, (state) => {
            state.isLoading = true
          })
          .addCase(deleteActivity.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.exercises= state.exercise.filter(
              (exercise) => exercise._id !== action.payload.id
            )
          })
          .addCase(deleteActivity.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
          })
    },
})

export const { reset } = activitySlice.actions
export default activitySlice