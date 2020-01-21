import React, {createContext, useContext} from 'react';


export const JournalContext = createContext({
  journalState: {},
  journalDispatch: () => { return; }
})



export function withJournalContext(Component){
  const ContextedComponent = props => {
    const {journalState, journalDispatch} = useContext(JournalContext);
    return (
      <Component 
        journalDispatch={journalDispatch}
        journalState={journalState}
        {...props}
      />
    )
  }
  return ContextedComponent;
}