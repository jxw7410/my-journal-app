import * as JournalApi from '../utils/journal_api';


const receiveJournal = journal => ({
  type: 'RECEIVE_JOURNAL',
  journal
});

const receiveJournals = journals => ({
  type: 'RECEIVE_JOURNALS',
  journals
});

const removeJournal = journalId => ({
  type: 'REMOVE_JOURNAL',
  journalId
});


export function createJournal(dispatch){
  return data => (
    JournalApi.createJournal(data)
      .then(res => dispatch(receiveJournal(res.data.journal)))
  )
}

export function editJournal(dispatch){
  return data => (
    JournalApi.editJournal(data)
      .then( res => dispatch(receiveJournal(res.data.journal)))
  )
}

export function fetchJournals(dispatch){
  return () => (
    JournalApi.getJournals()
      .then( res => dispatch(receiveJournals(res.data.journals)))
  )
}

export function deleteJournal(dispatch){
  return data => (
    JournalApi.deleteJournal(data.id)
      .then( res => dispatch(removeJournal(res.data.journalId)))
  )
}

