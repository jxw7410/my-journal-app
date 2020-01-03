export const defaultModalState = {
  modalType: "",
  modalProps: {}
}


export function modalReducer(state, action){
  Object.freeze(state);
  switch(action.type) {
    case 'OPEN_MODAL':
      return action.modalMeta;
    case 'CLOSE_MODAL':
      return defaultModalState;
    default:
      return state;
  }
}


