import React, { createContext, useContext } from 'react';

export const AuthContext = createContext({
  authState: {},
  authDispatch: () => { return; }
});


export function withAuthContext(Component){
  const ContextedComponent = props => {
    const {authState, authDispatch} = useContext(AuthContext);
    return (
      <Component 
        authDispatch={authDispatch} 
        {...authState}
        {...props}
      />
    )
  }
  return ContextedComponent;
}
