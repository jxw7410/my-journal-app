import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app'
import './index.css';
import jwt_decoded from 'jwt-decode';
import {setAuthToken} from './utils/auth_api';
import axios from 'axios';


document.addEventListener('DOMContentLoaded', () =>{
  let initialAuthState;
  const jwt = localStorage.getItem('jwt');  
  if (jwt) {
    const decoded = jwt_decoded(jwt);
    const timeInSeconds = new Date().getTime() / 1000;
    if (timeInSeconds > decoded.exp) {
      localStorage.removeItem('jwt')
      setAuthToken(null);
    } else {
      initialAuthState = {
        username: decoded.username,
        email: decoded.email,
        isLogin: true,
      }
      setAuthToken(jwt);
    }
  }
  // Need to for axios to work with jbuilder.
  axios.defaults.headers.common['Accept'] = 'application/json';
  ReactDOM.render(<App initialAuthState={initialAuthState} />, document.getElementById('root'));
})


