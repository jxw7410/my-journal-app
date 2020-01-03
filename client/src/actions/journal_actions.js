import $ from 'jquery';
import { setAuthorizationHeader } from '../utils/authorization';


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

function createJournalAPI(data){
  return $.ajax({
    beforeSend: setAuthorizationHeader,
    type: 'POST',
    url: '/api/journals',
    data
  })
}

function editJournalAPI(data){
  return $.ajax({
    beforeSend: setAuthorizationHeader,
    type: 'PUT',
    url: `/api/journals/${data.id}`,
    data
  })
}

function fetchJournalsAPI(){
  return $.ajax({
    beforeSend: setAuthorizationHeader,
    type: 'GET',
    url: '/api/journals'
  })
}

function deleteJournalAPI(id){
  return $.ajax({
    beforeSend: setAuthorizationHeader,
    type: 'DELETE',
    url: `/api/journals/${id}`,
  })
}


export function createJournal(dispatch){
  return data => (
    createJournalAPI(data)
      .then( res => dispatch(receiveJournal(res.journal)))
      .catch( err => console.log(err.responseText))
  )
}

export function editJournal(dispatch){
  return data => (
    editJournalAPI(data)
      .then( res => dispatch(receiveJournal(res.journal)))
      .catch( err => console.log(err.responseText))
  )
}

export function fetchJournals(dispatch){
  return () => (
    fetchJournalsAPI()
      .then( res => dispatch(receiveJournals(res.journals)))
      .catch( err => console.log(err.responseText))
  )
}

export function deleteJournal(dispatch){
  return data => (
    deleteJournalAPI(data.id)
      .then( res => dispatch(removeJournal(res.journalId)))
      .catch( err => console.log(err.responseText))
  )
}

