import React, {useState} from 'react';
import { closeModal } from '../../actions/modal_action';
import { Container, ButtonContainer } from './utils/shared';
import InputOne from '../utils/input_one';
import ButtonOne from '../utils/button_one';
import Styled from 'styled-components';
import { getDate } from '../../utils/helpers';

function NewEntryModal(props){
  const [name, setName] = useState(getDate())
  const onChange = e => {
    e.preventDefault();
    setName(e.currentTarget.value);
  }

  const cancelModal = e => {
    e.preventDefault();
    props.modalDispatch(closeModal());
  }

  return (
    <Container 
      style={{
        justifyContent: 'space-between'
      }}
      onClick={ e => e.stopPropagation()}>
      <Header>
        New Entry
      </Header>
      <InputOne
        width='85%'
        height='45px'
        padding={6}
        fontSize={24}
        onChange={onChange}
        label='Entry Name'
        value={name}
      />
      <ButtonContainer
        style={{
          marginBottom: '15px'
        }}
      >
        <ButtonOne  
          onClick={ e => e.preventDefault()}
          background='green'
        >
          Add
        </ButtonOne>
        <ButtonOne
          onClick={cancelModal}
          background='red'
        >
          Cancel
        </ButtonOne>
      </ButtonContainer>
    </Container>
  )
}


const Header = Styled.h1`
  margin: 0;
  padding: 10px 0px;
  background: ${props => props.bg || props.theme.bg};
  font-size: 28px;
  color: white;
  text-align: center;
  width: 100%;
`

export default NewEntryModal;