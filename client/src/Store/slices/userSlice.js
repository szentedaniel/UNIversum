import { createSlice } from '@reduxjs/toolkit'
import { generateName } from '../../randomName'
import { useTranslation } from 'react-i18next';


const { i18n } = useTranslation()

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: generateName(i18n.language),
    language: i18n.language,
    isAuthenticated: false,
    token: '',
    isGuest: true,
  },
  reducers: {
    // setLoading: (state, action) => {
    //   state.isLoading = action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const {  } = userSlice.actions

export default userSlice.reducer