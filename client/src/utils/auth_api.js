import axios from 'axios';

// Set Bearer token to axios's default header, as axios would be making request
// to the backend to pass the jwt auth paths.
export const setAuthToken = token => {
  if (token)
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  else
    delete axios.defaults.headers.common['Authorization'];
}


export const registerUser = data => axios.post('/api/signup', data);

export const loginUser = data => axios.post('api/login', data);


