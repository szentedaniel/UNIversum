import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const langs = [
    {
        code: 'hu',
        name: 'Magyar',
        countryCode: 'hu'  
    },
    {
        code: 'en',
        name: 'English',
        countryCode: 'us'  
    },
    {
        code: 'de',
        name: 'Deutsch',
        countryCode: 'de'  
    },
]

 
const LangSelector = () => {
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(cookies.get('i18next'));

  
 
  const changeLanguage = (event) => {
    setSelectedLang(event.target.value);
    cookies.set('i18next', event.target.value, { path: '/' });
    console.log(cookies.get('myCat'));
    i18n.changeLanguage(event.target.value);
  }
 
  return (
    <div onChange={changeLanguage}>
      <label className="mr10"><input type="radio" value="en" name="language" checked={selectedLang === 'en'} /> English</label>
      <label><input type="radio" value="hu" name="language" checked={selectedLang === 'hu'} /> Magyar</label>
    </div>
  )
}
 
export default LangSelector;