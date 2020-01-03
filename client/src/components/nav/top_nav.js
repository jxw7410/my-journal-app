import React from 'react';
import Styled from 'styled-components';
import {logoutUser} from '../../actions/auth_actions';
import { useAppContext } from '../../utils/app_context';
import { Link} from 'react-router-dom';

function TopNav(props){

  const onLogoutClick = e => {
    e.preventDefault();
    logoutUser(props.appDispatch);
  }


  return (
    <TopNavContainer>
      <Section>
        <NavHeader>
          <Link 
            to='/'
            style={
              {
                textDecoration: 'none',
                color: 'inherit',
                fontSize: 'inherit',
              }
            }>
            My Journal App
          </Link>
        </NavHeader>
      </Section>
      <Section>
        <LogOutButton 
          onClick={onLogoutClick}>
          Log Out
        </LogOutButton>
      </Section>
    </TopNavContainer>
  )
}


const TopNavContainer = Styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  height: 85px;
  width: 100vw;
  background: purple;
`

const Section = Styled.section`
  margin: 0px 10%;
`

const NavHeader = Styled.h1`
  color: white;
  font-size: 30px;
  white-space: nowrap;
`

const LogOutButton = Styled.button`
  border: 2px solid transparent;
  font-size: 28px;
  color: white;
  background: inherit;
  white-space: nowrap;
  transition: border-color 0.1s linear;

  &:hover{
    cursor: pointer;
    border-color: white;
  }
`

export default useAppContext(TopNav);




