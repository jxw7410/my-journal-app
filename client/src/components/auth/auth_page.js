import React from 'react';
import Styled from 'styled-components';
import LoginForm from './login_form';
import SignUpForm from './signup_form';

function AuthPage(props) {
  let components;

  switch(props.match.path){
    case '/login':
      components = (
        <>
          <Header>Login</Header>
          <LoginForm />
        </>
      )
      break;
    case '/signup':
      components = (
        <>
          <Header>SignUp</Header>
          <SignUpForm />
        </>
      )
      break;
    default:
      components = null;
  }

  return (
    <AuthPageContainer>
      <AuthForm>
        {components}
      </AuthForm>
    </AuthPageContainer>
  )
}



const AuthPageContainer = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`

const AuthForm = Styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 400px;
  box-shadow: 0px 0px 10px gray;
  overflow: hidden;
  border-radius: 5px;
`
const Header = Styled.h1`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  background: purple;
  color: white;
`

export default AuthPage;