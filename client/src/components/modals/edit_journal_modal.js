import React, {useState} from 'react';
import InputOne from '../utils/input_one';
import ButtonOne from '../utils/button_one';
import { closeModal } from '../../actions/modal_action';
import { Container, ButtonContainer} from './utils/shared';

function EditJournalModal(props){
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
      .then(() => props.modalDispatch(closeModal()))
  }

  return (
    <Container
      onClick={ e => e.stopPropagation()}
    >
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


export default EditJournalModal;