import React, { useState } from 'react';
import InputOne from '../utils/input_one';
import SubmitButton from './submit_button';
import Footer from './footer';
import DemoLogin from './demo_login';
import ErrorMessage from '../utils/error_message';
import { Link } from 'react-router-dom'
import { loginUser } from '../../actions/auth_actions';
import { withAuthContext } from '../../utils/auth_context';


function LoginForm(props) {
  const [error, setError] = useState("");
  const [inputs, setInputs] = useState({
    password: '',
    email: '',
  });

  const onChange = field => {
    return e => {
      e.preventDefault();
      setInputs({
        ...inputs,
        [field]: e.currentTarget.value
      })
    }
  }

  const onClick = e => {
    e.preventDefault();
    loginUser(props.authDispatch)({
      user: inputs
    })
    .catch( err => {
      switch(err.request.status){
        case 401:
          return setError("Invalid Email or Password")
        default:
          break;
      }
    })
  }

  return (
    <>
      { error.length ? <ErrorMessage>{error}</ErrorMessage> : null }


      <InputOne
        label='Email'
        type='email'
        onChange={onChange('email')}
        value={inputs.email}
      />

      <InputOne
        label='Password'
        type='password'
        onChange={onChange('password')}
        value={inputs.password}
      />


      <SubmitButton
        onClick={onClick}>
        LOGIN
      </SubmitButton>

      <Footer>
        <span>
          Not Register? <Link to='/signup'>Register Now</Link> or <DemoLogin>Demo</DemoLogin>
        </span>
      </Footer>

    </>
  )
}

export default withAuthContext(LoginForm);