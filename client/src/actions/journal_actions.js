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

function createJournalAPI(data){
  return $.ajax({
    beforeSend: setAuthorizationHeader,
    type: 'POST',
    url: '/api/journals',
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



export function createJournal(dispatch){
  return data => (
    createJournalAPI(data)
      .then( res => dispatch(receiveJournal(res.journal)))
      .catch( err => console.log(err))
  )
}


export function fetchJournals(dispatch){
  return data => (
    fetchJournalsAPI()
      .then( res => dispatch(receiveJournals(res.journals)))
      .catch( err => console.log(err))
  )
}


