import React from 'react';
import Styled from 'styled-components';
import Editor from '../editor/editor';


function JournalPage(props){
  return (
    <Container>
      <Editor />
    </Container>
  )
}

const Container = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 85px;
  width: 100vw;
  min-height: calc(100vh - 85px);
`


export default JournalPage;


