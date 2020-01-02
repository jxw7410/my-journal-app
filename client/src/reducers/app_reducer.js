export const initialAppstate = {
  username: null, 
  email: null,
  isLogin: false,
}


export function AppReducer(state, action){
  Object.freeze(state);
  switch( action.type) {
    case 'RECEIVE_USER':
      return action.user;
    case 'REMOVE_USER':
      return initialAppstate;
    default:
      return state;
  }
}

