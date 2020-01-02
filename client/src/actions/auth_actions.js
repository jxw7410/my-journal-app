import $ from 'jquery';
import jwt_decode from 'jwt-decode'

function requestUserAPI(data){
  return $.ajax({
    type: 'POST',
    url: '/api/signup',
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
    return requestUserAPI(data)
      .then( res => authenticateUser(dispatch, res.jwt))
  }
}
