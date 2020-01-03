import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app'
import './index.css';
import jwt_decoded from 'jwt-decode';


document.addEventListener('DOMContentLoaded', () =>{
  let initialState;
  const jwt = localStorage.getItem('jwt');  
  if (jwt) {
    const decoded = jwt_decoded(jwt);
    const timeInSeconds = new Date().getTime() / 1000;
    if (timeInSeconds > decoded.exp) {
      localStorage.removeItem('jwt')
    } else {
      initialState = {
        username: decoded.username,
        email: decoded.email,
        isLogin: true,
      }
    }
  }


  ReactDOM.render(<App initialState={initialState} />, document.getElementById('root'));
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

