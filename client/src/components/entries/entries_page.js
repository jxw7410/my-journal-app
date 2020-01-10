import React, { useReducer } from 'react';
import Styled from 'styled-components';
import Editor from '../editor/editor';
import { entriesReducer } from '../../reducers/entries_reducer';
import { EntryContext } from '../../utils/entry_context';
import Entry from './entry';

function EntriesPage(props) {
  const [entriesState, entryDispatch] = useReducer(entriesReducer, {});

  React.useEffect(() => {
    console.log(entriesState);
  }, [entriesState])


  const listOfEntries = Object.values(entriesState).map( ({id, html}) => 
    <Entry key={id}>{html}</Entry>
  );

  return (
    <Container>
      <EntryContext.Provider value={{ entryDispatch }}>
        <Entries>
          {listOfEntries}
        </Entries>
        <Editor />
      </EntryContext.Provider>
    </Container>
  )
}

const Container = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 85px;
  width: 100vw;
  min-height: calc(100vh - 85px);
`


const Entries = Styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
`

export default EntriesPage;


