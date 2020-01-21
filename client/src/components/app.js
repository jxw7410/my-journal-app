import React from 'react';
import { Switch } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { defaultAuthState, authReducer } from '../reducers/auth_reducer';
import { defaultModalState, modalReducer } from '../reducers/modal_reducer';
import { AuthRoute, ProtectedRoute } from './utils/auth';
import { AuthContext } from '../utils/auth_context';
import { ModalContext } from '../utils/modal_context';
import Modal from '../components/modals/modal';
import AuthPage from '../components/auth/auth_page';
import IndexPage from '../components/main/index_page';
import TopNav from '../components/nav/top_nav';
import EntriesPage from '../components/entries/entries_page';
import { ThemeProvider } from 'styled-components';

function App({ initialAuthState }) {
  const [authState, authDispatch] = React.useReducer(authReducer, initialAuthState || defaultAuthState);
  const [modalState, modalDispatch] = React.useReducer(modalReducer, defaultModalState);

  const theme={
    bg: 'royalblue',
  }

  return (
    <ThemeProvider theme={theme}>
      <AuthContext.Provider value={{ authState, authDispatch }}>
        <ModalContext.Provider value={{ modalState, modalDispatch }}>
          <HashRouter>
            <Modal />
            {authState.isLogin ? <TopNav /> : null}
            <Switch>
              <AuthRoute
                exact
                path='/login'
                redirectPath='/'
                isLogin={authState.isLogin}
                component={AuthPage}
              />
              <AuthRoute
                path='/signup'
                redirectPath='/'
                isLogin={authState.isLogin}
                component={AuthPage}
              />

              <ProtectedRoute
                path='/'
                isLogin={authState.isLogin}
                redirectPath='/login'
                component={IndexPage}
              />

              <ProtectedRoute
                path='/:journal'
                isLogin={authState.isLogin}
                redirectPath='/login'
                component={EntriesPage}
              />
            </Switch>
          </HashRouter>
        </ModalContext.Provider>
      </AuthContext.Provider>
    </ThemeProvider>
  )
}


export default App;
