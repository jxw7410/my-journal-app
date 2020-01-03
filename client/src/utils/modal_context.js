import React, {useContext, createContext} from 'react';



export const ModalContext = createContext({
  modalState: {},
  modalDispatch: () => { return; }, 
});

export function useModalContext(Component){
  const ContextedComponent = props => {
    const { modalState, modalDispatch } = useContext(ModalContext);
    return (
      <Component
        modalDispatch={modalDispatch}
        {...modalState}
        {...props}
      />
    )
  }
  return ContextedComponent;
}



