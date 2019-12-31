import React, {useState} from 'react';
import {useAppContext} from '../../utils/app_context';
import InputOne from '../utils/input_one';
import SubmitButton from './submit_button';
import Footer from './footer';
import {Link} from 'react-router-dom'

function LoginForm(props){
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
  }

  return (
    <>
      <br />

      <InputOne 
        label='Email'
        type='email'
        onChange={onChange('email')}
        value={inputs.email}
      />

      <br/>

      <InputOne 
        label='Password'
        type='password'
        onChange={onChange('password')}
        value={inputs.password}
      />

      <br />

      <SubmitButton
        onClick={onClick}> 
        LOGIN 
      </SubmitButton>

      <br />

      <Footer>
        <span>Not Register? <Link to='/signup'>Register Now</Link></span>
      </Footer>

      <br />
    </>
  )
}

export default useAppContext(LoginForm);