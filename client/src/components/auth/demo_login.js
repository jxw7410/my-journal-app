import React, {memo} from 'react';
import Styled from 'styled-components';
import PropType from 'prop-types';
import { withAuthContext } from '../../utils/auth_context';
import { loginUser } from '../../actions/auth_actions';


function DemoLogin({authDispatch, children}){
  const onClick = e => {
    e.preventDefault();
    loginUser(authDispatch)({
      user: {
        email: 'demouser@gmail.com',
        password: 'password123'
      }
    })
  }

  return <Span onClick={onClick}>{children}</Span>
}

DemoLogin.propType = {
  authDispatch: PropType.func.isRequired,
}

const Span = Styled.span`
  font-size: 1rem;
  color: rgb(0, 78, 141);
  font-weight: 500;
  &:hover{
    cursor: pointer;
  }
`


export default withAuthContext(memo(DemoLogin));