export const initialAppstate = {
  isLogin: false,
}


export function AppReducer(state, action){
  Object.freeze(state);
  switch( action.type) {
    case 'received_auth':
      break;
    default:
      break;
  }
}

