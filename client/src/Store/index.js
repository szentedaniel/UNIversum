import { configureStore } from '@reduxjs/toolkit'
import loadingReducer from './slices/loadingSlice'
import userReducer from './slices/userSlice'

export default configureStore({
  reducer: {
      loading: loadingReducer,
      user: userReducer,
  },
})