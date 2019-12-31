import React from 'react';
import { Switch } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { initialAppstate, AppReducer } from '../reducers/app_reducer';
import AuthPage from '../components/auth/auth_page';
import { AuthRoute, ProtectedRoute } from './utils/auth';
import {AppContext} from '../utils/app_context';

function App() {
  const [appState, appDispatch] = React.useReducer(AppReducer, initialAppstate);

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
