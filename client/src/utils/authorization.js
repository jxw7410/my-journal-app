export function setAuthorizationHeader(xhr){
  xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('jwt'))
}