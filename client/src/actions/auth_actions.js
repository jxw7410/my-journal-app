import jwt_decode from 'jwt-decode'
import * as AuthApi from '../utils/auth_api';


function receiveUser(user){
  return {
    type: 'RECEIVE_USER',
    user
  }
}

function removeUser(){
  return {
    type: 'REMOVE_USER'
  }
} 

function authenticateUser(dispatch, jwt){
  localStorage.setItem('jwt', jwt);
  AuthApi.setAuthToken(jwt);

  const decoded = jwt_decode(jwt);
  const data = {
    username: decoded.username, 
    email: decoded.email,
    isLogin: true,
  }
  dispatch(receiveUser(data))
}

export function logoutUser(dispatch){
  localStorage.removeItem('jwt');
  AuthApi.setAuthToken(null);
  dispatch(removeUser());
}

export function registerUser(dispatch){
  return data => {
    return AuthApi.registerUser(data)
      .then( ({data}) => authenticateUser(dispatch, data.jwt))
  }
}

export function loginUser(dispatch){
  return data => {
    return AuthApi.loginUser(data)
      .then( ({data}) => { 
        return authenticateUser(dispatch, data.jwt)
      })
  }
} 
