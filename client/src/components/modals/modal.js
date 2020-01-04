import React, {memo} from 'react';
import PropType from 'prop-types';
import Styled from 'styled-components';
import { useModalContext } from '../../utils/modal_context';
import EditJournalModal from './edit_journal_modal';
import DeleteJournalModal from './delete_journal_modal';


function Modal(props){
  let component;
  switch(props.modalType){
    case 'EDIT_JOURNAL_NAME':
      component = <EditJournalModal {...props}/>
      break;
    case 'DELETE_JOURNAL':
      component = <DeleteJournalModal {...props} />
      break;
    default:
      break;
  }

  return (
    <ModalContainer 
      style={{display: component ? null : 'none'}}
    >
      {component}
    </ModalContainer>
  )
}



Modal.propTypes = {
  modalType: PropType.string.isRequired,
}

const ModalContainer = Styled.div`
  position: fixed;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
`



export default useModalContext(memo(Modal));

