import App from './App';
import './style/index.css';

import ReactDOM from 'react-dom/client';
import React from 'react';


function isMobile() {
  let user = navigator.userAgent;
  let regexp = /android|iphone/i;

  return regexp.test(user)
}


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();