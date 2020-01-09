import React, { createContext, useContext } from 'react';


export const EntryContext = createContext({
  entriesState: {},
  entryDispatch: () => { return; }
})

export function useEntryContext(Component) {
  const ContextComponent = props => {
    const { entriesState, entryDispatch } = useContext(EntryContext);
    return (
      <Component
        entryDispatch={entryDispatch}
        entriesState={entriesState}
        {...props}
      />
    )
  }

  return ContextComponent;
}