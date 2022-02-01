import React, { useEffect } from 'react';
import axios from 'axios'
import { getIpInform } from '../Store/slices/userSlice'
import { useDispatch } from 'react-redux'
import Cookies from 'universal-cookie';
import { useTranslation } from 'react-i18next';

export default function InitSomeStuff() {

    const dispatch = useDispatch()
  const { i18n } = useTranslation()
  const cookies = new Cookies();


  const getIpInfo = () => {
    axios.get('https://ipinfo.io/json', 
      {headers: {Authorization: `Bearer ${process.env.REACT_APP_IPINFO_API_TOKEN}`}})
      .then(res => {
        dispatch(getIpInform(res.data))
        
        const lang = res.data.country.toString().toLowerCase()

        if (!cookies.get('i18next')) {
          let tenYearFromNow = new Date();
          tenYearFromNow.setFullYear(tenYearFromNow.getFullYear() + 10);
          cookies.set('i18next', lang, { path: '/', expires: tenYearFromNow});
          i18n.changeLanguage(lang)
        }
      })
      .catch(err => console.log(err)) //https://api.db-ip.com/v2/free/self
  }

  useEffect(() => {
    getIpInfo()
  }, []);
  



  return (<></>);
}
