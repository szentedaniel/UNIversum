import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Cookies from 'universal-cookie';
import  { LANGUAGES } from '../config'
import 'flag-icons/css/flag-icons.min.css'

const cookies = new Cookies();


 
const LangSelector = () => {
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(cookies.get('i18next'));


 
  const changeLanguage = (event) => {
    //console.log(LANGUAGES)
    setSelectedLang(event.target.value);
    cookies.set('i18next', event.target.value, { path: '/' });
    //console.log(cookies.get('myCat'));
    i18n.changeLanguage(event.target.value);
  }
 
  return (
    <div onChange={changeLanguage}>
      {(LANGUAGES.map(lang => 
        (<label key={lang.code}><input  type="radio" value={lang.code} name="language" defaultChecked={selectedLang === lang.code} /><span className={`fi fi-${lang.countryCode}`}></span> {lang.name} </label>)
      ))}

    </div>
  )
}
 
export default LangSelector;