import React, { createContext, useContext } from 'react';

export const AppContext = createContext({
  appState: {},
  appDispatch: () => { return; }
});


export function useAppContext(Component){
  const ContextedComponent = props => {
    const {appState, appDispatch} = useContext(AppContext);
    return (
      <Component 
        appDispatch={appDispatch} 
        {...appState}
        {...props}
      />
    )
  }
  return ContextedComponent;
}
