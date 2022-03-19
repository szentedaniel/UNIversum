import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'loading',
  initialState: {
    isLoading: false,
    isHomepage: true,
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setIsHomepage: (state, action) => {
      state.isHomepage = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setLoading, setIsHomepage } = counterSlice.actions

export default counterSlice.reducer