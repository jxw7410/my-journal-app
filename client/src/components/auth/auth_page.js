import React from 'react';
import Styled from 'styled-components';
import AuthForm from './auth_form';

function AuthPage(props){

  return (
    <AuthPageContainer>
      <AuthForm type='login' />
    </AuthPageContainer>
  )
}



const AuthPageContainer = Styled.div`

`

export default AuthPage;