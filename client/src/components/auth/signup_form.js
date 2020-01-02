import React, { useState } from 'react';
import { useAppContext } from '../../utils/app_context';
import InputOne from '../utils/input_one';
import SubmitButton from './submit_button';
import Footer from './footer';
import { Link } from 'react-router-dom'
import { registerUser } from '../../actions/auth_actions';

function SignUpForm(props) {
  const [inputs, setInputs] = useState({
    username: '',
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
    registerUser(props.appDispatch)({
      user: inputs 
    });
  }

  return (
    <>
      <br />

      <InputOne
        label='Username'
        onChange={onChange('username')}
        value={inputs.username}
      />

      <br />

      <InputOne
        label='Email'
        type='email'
        onChange={onChange('email')}
        value={inputs.email}
      />

      <br />

      <InputOne
        label='Password'
        type='password'
        onChange={onChange('password')}
        value={inputs.password}
      />

      <br />

      <SubmitButton
        onClick={onClick}>
        SIGN UP
      </SubmitButton>

      <br />

      <Footer>
        <span>Already Register? <Link to='/login'>Login Instead</Link></span>
      </Footer>

      <br />
    </>
  )
}

export default useAppContext(SignUpForm);