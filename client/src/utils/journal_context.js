import React, {createContext, useContext} from 'react';


export const JournalContext = createContext({
  journalState: {},
  journalDispatch: () => { return; }
})



export function useJournalContext(Component){
  const ContextedComponent = props => {
    const {journalState, journalDispatch} = useContext(JournalContext);
    return (
      <Component 
        journalDispatch={journalDispatch}
        {...journalState}
        {...props}
      />
    )
  }
  return ContextedComponent;
}