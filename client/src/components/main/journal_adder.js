import React, { useState } from 'react';
import Styled from 'styled-components';
import JournalAdderErrorDropdown from './journal_adder_error_dropdown';
import ErrorMessage from '../utils/error_message';
import { withJournalContext } from '../../utils/journal_context';
import { createJournal } from '../../actions/journal_actions';

function JournalAdder(props) {
  const [error, setError] = useState({
    render: false,
    message: ""
  });

  const [input, setInput] = useState({
    name: ""
  });

  const onChange = e => {
    e.preventDefault();
    setInput({ name: e.currentTarget.value });
  }

  const onClick = e => {
    e.preventDefault();
    createJournal(props.journalDispatch)({
      journal: input
    })
      .then(() => setInput({ name: "" }))
      .fail(err => handleError(err))
  }

  const handleError = err => {
    switch (err.status) {
      case 422:
        setError({
          render: true,
          message: err.responseJSON[0]
        });
        break;
      default:
        break;
    }
  }

  return (
    <JournalAdderContainer>
      <JournalInput
        onFocus={() => setError({ ...error, render: false })}
        onChange={onChange}
        value={input.name}
        placeholder='Add a new Journal'
      />
      <AddJournalButton onClick={onClick}>
        Add
      </AddJournalButton>
      <JournalAdderErrorDropdown opacity={error.render ? "1" : "0"} >
        <ErrorMessage fontSize='0.6em'>{error.message}</ErrorMessage>
      </JournalAdderErrorDropdown>
    </JournalAdderContainer>
  )
}



const JournalAdderContainer = Styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 40px;
  font-size: 24px;
  margin: 20px;
`

const JournalInput = Styled.input`
  height: inherit;
  width: calc(100% - 100px);
  border-style: none;
  font-size: inherit;
  border: 1px solid gray;
  border-right: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 5px 10px;
`

const AddJournalButton = Styled.button`
  height: 52px;
  width: 100px;
  font-size: inherit;
  border: 1px solid ${props => props.theme.bg};
  background: ${props => props.theme.bg};
  padding: 5px 10px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: white;

  &:hover {
    cursor: pointer;
    opacity: 0.85;
  }
`

export default withJournalContext(JournalAdder);
