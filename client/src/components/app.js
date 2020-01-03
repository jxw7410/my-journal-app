import React from 'react';
import { Switch } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { initialAppstate, AppReducer } from '../reducers/app_reducer';
import AuthPage from '../components/auth/auth_page';
import { AuthRoute, ProtectedRoute } from './utils/auth';
import { AppContext } from '../utils/app_context';
import IndexPage from '../components/main/index_page';
import TopNav from '../components/nav/top_nav';


function App({ initialState }) {
  const [appState, appDispatch] = React.useReducer(AppReducer, initialState || initialAppstate);
  // For debugging
  // window.appState = appState;
  return (
    <AppContext.Provider value={{ appState, appDispatch }}>
      <HashRouter>
        { appState.isLogin ? <TopNav /> : null }
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
            component={IndexPage}
          />
        </Switch>
      </HashRouter>
    </AppContext.Provider>
  )
}


export default App;
