import React, { useReducer, useEffect } from 'react';
import Styled from 'styled-components';
import { journalReducer } from '../../reducers/journals_reducer';
import { JournalContext } from '../../utils/journal_context';
import { fetchJournals } from '../../actions/journal_actions';
import JournalAdder from './journal_adder'
import JournalTab from './journal_tab';



function IndexPage(props) {
  const [journalState, journalDispatch] = useReducer(journalReducer, {})
  // for debugging
  window.journalState = journalState;

  useEffect(() => {
    fetchJournals(journalDispatch)();
  }, [])

  const listOfJournals = Object.values(journalState).map(journal =>
    <JournalTab key={journal.id} id={journal.id} name={journal.name} />
  )

  return (
    <IndexPageContainer>
      <JournalContext.Provider value={{ journalState, journalDispatch }}>
        <JournalAdder />
        <JournalLists>
          {listOfJournals}
        </JournalLists>
      </JournalContext.Provider>
    </IndexPageContainer>
  )
}



const IndexPageContainer = Styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 85px;
  width: 80%;
`

const JournalLists = Styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export default IndexPage;

