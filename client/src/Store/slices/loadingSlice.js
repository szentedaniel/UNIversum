import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'loading',
  initialState: {
    isLoading: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setLoading } = counterSlice.actions

export default counterSlice.reducer