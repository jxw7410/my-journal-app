import React from 'react';
import {Redirect, Route} from 'react-router';
import PropType from 'prop-types';


export function AuthRoute({component: Component, isLogin, exact, path, redirectPath}){
  return (
    <Route 
      path={path}
      exact={exact}
      render={
        props => (
          isLogin ?
          <Redirect to={redirectPath} /> : <Component {...props} />
        )
      }
    />
  )
}

export function ProtectedRoute({component:Component, isLogin, exact, path, redirectPath}){
  return (
    <Route 
      path={path}
      exact={exact}
      render={
        props => (
          isLogin ? 
          <Component {...props} /> : <Redirect to={redirectPath} />
        )
      }
    />
  )
}

const sharedPropTypes = {
  component: PropType.any,
  isLogin: PropType.bool,
  exact: PropType.bool,
  path: PropType.string,
  redirectPath: PropType.string,
}

AuthRoute.propTypes = sharedPropTypes;
ProtectedRoute.propTypes = sharedPropTypes;

AuthRoute.defaultProps = {
  component: () => <div />,
  isLogin: false,
  exact: true,
  path: '/login',
  redirectPath: '/'
}

ProtectedRoute.defaultProps = {
  component: () => <div />,
  isLogin: false, 
  exact: true,
  path: '/',
  redirectPath: '/login'
}







