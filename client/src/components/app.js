import React, {useEffect} from 'react';
import { Switch } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { initialAppstate, AppReducer } from '../reducers/app_reducer';
import AuthPage from '../components/auth/auth_page';
import { AuthRoute, ProtectedRoute } from './utils/auth';
import {AppContext} from '../utils/app_context';
import jwt_decoded from 'jwt-decode';
import {logoutUser} from '../actions/auth_actions';

function App() {
  const [appState, appDispatch] = React.useReducer(AppReducer, initialAppstate);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt){
      const decoded = jwt_decoded(jwt);
      const timeInSeconds = new Date().getTime() / 1000;
      if (timeInSeconds > decoded.exp) {
        logoutUser(appDispatch);
      } else {
        appDispatch({
          type: 'RECEIVE_USER',
          user : {
            username: decoded.username,
            email: decoded.email,
            isLogin: true,
          }
        })
      }
    }
  },[])

  // For debugging
  useEffect(() => {
    window.appState = appState;
  }, [appState])

  return (
    <AppContext.Provider value={ { appState, appDispatch }}>
      <HashRouter>
        <Switch>
          <AuthRoute 
            exact 
            path='/login'
            redirectPath='/' 
            isLogin={appState.isLogin}
            component={AuthPage}
          />
          <AuthRoute 
            path='/signup'
            redirectPath='/'
            isLogin={appState.isLogin}
            component={AuthPage}
          />
          <ProtectedRoute 
            path='/'
            isLogin={appState.isLogin}
            redirectPath='/login'
          />
        </Switch>
      </HashRouter>
    </AppContext.Provider>
  )
}


export default App;
