import React from 'react';
import Styled from 'styled-components';
import ButtonOne from '../utils/button_one';
import PropTypes from 'prop-types';
import { openModal } from '../../actions/modal_action';
import { useModalContext } from '../../utils/modal_context';
import { useJournalContext } from '../../utils/journal_context';
import { editJournal, deleteJournal } from '../../actions/journal_actions';

function JournalTab({ id, name, modalDispatch, journalDispatch }) {

  const editJournalName = newName => {
    return editJournal(journalDispatch)({
      id,
      name: newName
    })
  }

  const removeJournal = () => {
    return deleteJournal(journalDispatch)({ id })
  }

  const onClick = field => e => {
    e.preventDefault();
    let modalMeta = {
      modalType: "",
      modalProps: { name }
    };

    switch (field) {
      case 'EDIT':
        modalMeta.modalType = 'EDIT_JOURNAL_NAME';
        modalMeta.modalCB = editJournalName;
        break;
      case 'DELETE':
        modalMeta.modalType = 'DELETE_JOURNAL';
        modalMeta.modalCB = removeJournal;
        break;
      default: break;
    }

    modalDispatch(openModal(modalMeta));
  }

  return (
    <JournalTabContainer
      tabIndex='0'>
      <JournalTitle>
        {name}
      </JournalTitle>
      <JournalOptions>
        <ButtonOne
          tabIndex='-1'
          onClick={onClick('EDIT')}
          width={75}
          background={'Green'}
        >
          Edit
        </ButtonOne>
        <ButtonOne
          tabIndex='-1'
          onClick={onClick('DELETE')}
          width={75}
          background={'Red'}
        >
          Delete
        </ButtonOne>
      </JournalOptions>
    </JournalTabContainer>
  )
}

JournalTab.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  modalDispatch: PropTypes.func.isRequired,
  journalDispatch: PropTypes.func.isRequired,
}


const JournalTitle = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: white;
  width: 100%;
  height: 100%;
`


const JournalOptions = Styled.div`
  width: 0px;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  transition: width 0.1s linear;
  background: white;
`


const JournalTabContainer = Styled.li`
  display: flex;
  width: 500px;
  height: 150px;
  margin-top: 20px;
  background: rgb(67, 166, 206);
  border-radius: 10px;
  overflow:hidden;

  &:hover{
    cursor: pointer;
    box-shadow: 0px 0px 8px gray;
  }

  &:hover > ${JournalOptions}, &:focus > ${JournalOptions} {
    width: 125px;
  }

  &:focus{
    outline: none;
    box-shadow: 0px 0px 8px gray;
  }
`

export default useJournalContext(useModalContext(JournalTab));
