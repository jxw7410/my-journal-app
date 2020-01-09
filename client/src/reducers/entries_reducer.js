export function entriesReducer(state = {}, action){
  Object.freeze(state);
  switch(action.type){
    case 'RECEIVE_ENTRY':
      return Object.assign({}, state, action.entry);
    default: 
      return state;
  }
}

