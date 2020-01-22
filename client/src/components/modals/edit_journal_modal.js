import React, {useState} from 'react';
import InputOne from '../utils/input_one';
import ButtonOne from '../utils/button_one';
import ErrorMessage from '../utils/error_message';
import Styled from 'styled-components';
import { closeModal } from '../../actions/modal_action';
import { Container, ButtonContainer} from './utils/shared';

function EditJournalModal(props){
  const [error, setError] = useState([]);
  const [name, setName] = useState(props.modalProps.name)

  const onChange = e => {
    e.preventDefault();
    setName(e.currentTarget.value)
  }


  const cancelModal = e => {
    e.preventDefault();
    props.modalDispatch(closeModal());
  }


  const editJournal = e => {
    e.preventDefault();
    props.modalCB(name)
      .then(
        () => props.modalDispatch(closeModal()),
        err => setError(JSON.parse(err.request.response))
      )
  }

  return (
    <Container onClick={ e => e.stopPropagation()}> 
      <ErrorMessageContainer>
        { error.length ? <ErrorMessage>{error[0]}</ErrorMessage> : null } 
      </ErrorMessageContainer>
      <InputOne 
        width='85%'
        height='45px'
        padding={6}
        fontSize={24}
        onChange={onChange}
        label='New Journal Name'
        value={name}
      />
      <ButtonContainer>
        <ButtonOne
          onClick={editJournal}
          background='green'
        >
          Change
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


const ErrorMessageContainer = Styled.div`
  position: absolute;
  width: 85%;
`


export default EditJournalModal;