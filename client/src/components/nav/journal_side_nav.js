import React, {useState} from 'react';
import Styled from 'styled-components';
import { withModalContext } from '../../utils/modal_context';
import { openModal } from '../../actions/modal_action';


function JournalSideNav(props){
  const [active, setActive] = useState(true);

  const setNavBarState = e => {
    e.preventDefault();
    setActive(!active);
  }

  const addNewEntry = e => {
    e.preventDefault();
    props.modalDispatch(openModal({
      modalType: 'NEW_ENTRY',
      data: {}
    }));
  }

  return (
    <Container active={active}>
      <SideTab>
        <SideTabItem onClick={setNavBarState}>
          { active ? "<<" : ">>"}
        </SideTabItem>
        <SideTabItem 
          onClick={addNewEntry}
          bg='green'>
          {'+'}
        </SideTabItem>
      </SideTab>
      <Header>Entries</Header>
    </Container>
  )
}

const Container = Styled.div`
  position: relative;
  box-shadow: 0px 0px 3px gray;
  width: ${props => props.active ? '200px' : '0px'};
  height: 90%;
  border-radius: 3px;
  transition: width 0.2s linear;
`

const Header = Styled.h1`
  background: ${props => props.theme.bg};
  font-size: 26px;
  color: white;
  text-align: center;
  padding: 10px 0px;
  margin: 0 auto;
  width: calc(100% + 1px);
`

const SideTab = Styled.div`
  position: absolute;
  width: 45px;
  right: -45px;
  top: 50px;
  box-shadow: 1px 0px 3px gray;
`

const SideTabItem = Styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 100%;
  background: ${props => props.bg || props.theme.bg}
  color: white;
  font-size: 28px;

  &:hover{
    cursor: pointer;
    opacity: 0.85;
  }
`

export default withModalContext(JournalSideNav);