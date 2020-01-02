import $ from 'jquery';
import jwt_decode from 'jwt-decode'

function registerUserAPI(data){
  return $.ajax({
    type: 'POST',
    url: '/api/signup',
    data
  })
}

function loginUserAPI(data){
  return $.ajax({
    type:'POST',
    url: '/api/login',
    data
  })
}




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
  dispatch(removeUser())
}

export function registerUser(dispatch){
  return data => {
    return registerUserAPI(data)
      .then( res => authenticateUser(dispatch, res.jwt))
  }
}

export function loginUser(dispatch){
  return data => {
    return loginUserAPI(data)
      .then( res => authenticateUser(dispatch, res.jwt))
  }
}
