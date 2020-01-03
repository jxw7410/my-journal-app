export function journalReducer(state = {}, action){
  Object.freeze(state);
  switch(action.type){
    case 'RECEIVE_JOURNAL':
      return Object.assign({}, state, action.journal);
    case 'RECEIVE_JOURNALS':
      return action.journals
    case 'DELETE_JOURNAL':
      return state;
    default:
      return state;
  }
}

