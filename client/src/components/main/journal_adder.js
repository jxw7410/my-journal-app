import React, {useState} from 'react';
import Styled from 'styled-components';
import {useJournalContext} from '../../utils/journal_context';
import { createJournal} from '../../actions/journal_actions';

function JournalAdder(props){
  const [input, setInput] = useState({
    name: ""
  });

  const onChange = e => {
    e.preventDefault();
    setInput({name: e.currentTarget.value});
  }

  const onClick = e => {
    e.preventDefault();
    createJournal(props.journalDispatch)({
      journal: input
    })
  }

  return (
    <JournalAdderContainer>
      <JournalInput 
        onChange={onChange}
        value={input.name}
        placeholder='Add a new Journal'
      />
      <AddJournalButton onClick={onClick}> 
        Add 
      </AddJournalButton>
    </JournalAdderContainer>
  )
}



const JournalAdderContainer = Styled.div`
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
  border: 1px solid purple;
  background: purple;
  padding: 5px 10px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: white;

  &:hover {
    cursor: pointer;
    background: #bf44bf;
  }
`

export default useJournalContext(JournalAdder);
