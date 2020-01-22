import React, { useState } from 'react';
import { withAuthContext } from '../../utils/auth_context';
import InputOne from '../utils/input_one';
import SubmitButton from './submit_button';
import Footer from './footer';
import { Link } from 'react-router-dom'
import { registerUser } from '../../actions/auth_actions';

function SignUpForm(props) {
  const [errors, setErrors] = useState({});

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
    registerUser(props.authDispatch)({
      user: inputs 
    })
    .catch( err => {
      const errors = {};
      JSON.parse(err.request.response).forEach( error => {
        if (error.includes('Username')) 
          errors.username = error;
        else if(error.includes('Email'))
          errors.email = error;
        else if(error.includes('Password'))
          errors.password = error;
      })

      setErrors(errors);
    });
  }

  return (
    <>
      <InputOne
        label='Username'
        onChange={onChange('username')}
        value={inputs.username}
        error={errors.username}
      />
      <InputOne
        label='Email'
        type='email'
        onChange={onChange('email')}
        value={inputs.email}
        error={errors.email}
      />

      <InputOne
        label='Password'
        type='password'
        onChange={onChange('password')}
        value={inputs.password}
        error={errors.password}
      />

      <SubmitButton
        onClick={onClick}>
        SIGN UP
      </SubmitButton>

      <Footer>
        <span>Already Register? <Link to='/login'>Login Instead</Link></span>
      </Footer>
    </>
  )
}

export default withAuthContext(SignUpForm);