export function journalReducer(state = {}, action){
  Object.freeze(state);
  switch(action.type){
    case 'RECEIVE_JOURNAL':
      return Object.assign({}, state, action.journal);
    case 'RECEIVE_JOURNALS':
      return action.journals
    case 'REMOVE_JOURNAL':
      const newState = Object.assign({}, state);
      delete newState[action.journalId]
      return newState;
    default:
      return state;
  }
}

