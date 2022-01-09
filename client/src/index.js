import './index.css'
import './global.css'
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import '@themesberg/flowbite';


import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<span>Loading...</span>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

