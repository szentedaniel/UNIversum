import { createSlice } from '@reduxjs/toolkit'
import { generateName } from '../../randomName'
import i18n from 'i18next';
import Cookies from 'universal-cookie';


const cookies = new Cookies();


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: generateName(cookies.get('i18next') || 'en'),
    language: cookies.get('i18next') || 'en',
    isAuthenticated: false,
    token: '',
    isGuest: true,
    ip: null,
  },
  reducers: {
    getIpInform: (state, action) => {
      
      console.log(action);

      state.ip = action.payload.ip
      state.language = action.payload.country.toString().toLowerCase()
      //i18n.changeLanguage(action.payload.country.toString().toLowerCase());
    }
    // setLoading: (state, action) => {
    //   state.isLoading = action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { getIpInform } = userSlice.actions

export default userSlice.reducer