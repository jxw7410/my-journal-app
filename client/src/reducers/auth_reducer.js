export const defaultAuthState = {
  username: null, 
  email: null,
  isLogin: false,
}


export function authReducer(state, action){
  Object.freeze(state);
  switch( action.type) {
    case 'RECEIVE_USER':
      return action.user;
    case 'REMOVE_USER':
      return defaultAuthState;
    default:
      return state;
  }
}

