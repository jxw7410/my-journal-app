import React from 'react';
import Styled from 'styled-components';
import ButtonOne from '../utils/button_one';
import { closeModal } from '../../actions/modal_action';
import { Container, ButtonContainer } from './utils/shared';

function DeleteJournalModal(props) {

  const deleteJournal = e => {
    e.preventDefault();
    props.modalCB()
      .then(() => props.modalDispatch(closeModal()))
  }

  const cancelModal = e => {
    e.preventDefault();
    props.modalDispatch(closeModal());
  }

  return (
    <Container
      width='400px'
    >
      <Span>
        Are you sure you want to delete your {
          <span style={{ color: "rgb(67,166,206)"}}>
            {props.modalProps.name}
          </span>
        } Journal?
      </Span>
      <ButtonContainer> 
        <ButtonOne
          onClick={deleteJournal}
          background='red'
        >
          Delete
        </ButtonOne>
        <ButtonOne
          onClick={cancelModal}
          background='green'
        >
          Cancel
        </ButtonOne>
      </ButtonContainer>
    </Container>
  )
}


const Span = Styled.div`
  font-size: 24px;
  width: 85%;
`


export default DeleteJournalModal;