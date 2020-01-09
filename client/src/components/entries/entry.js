import React from 'react';
import Styled from 'styled-components';


function Entry(props){
  return (
    <EntryContainer dangerouslySetInnerHTML={{__html: props.children}} />
  )
}

const EntryContainer = Styled.li`
  width: 80vw;
  padding: 10px;
  border-radius: 5px;
`




export default Entry;