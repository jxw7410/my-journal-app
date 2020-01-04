import React from 'react';
import Styled from 'styled-components';


function JournalAdderErrorDropdown({opacity, children}){
  return (
    <Container
      opacity={opacity}
    >
      <ArrowContainer>
        <ArrowUp />
      </ArrowContainer>
      <Body>
        {children}
      </Body>
    </Container>
  )
}


const Container = Styled.div`
  position: absolute;
  top: 52px;
  left: 5px;
  box-shadow: 0px 1px 5px gray;
  border-radius: 5px;
  width: fit-content;
  padding: 0px 10px;
  background: white;
  opacity: ${ props => props.opacity }
  transition: opacity 0.2s linear;
`

const ArrowContainer = Styled.div`
  position: absolute;
  overflow: hidden;
  left: 3px;
  top: -15px;
  width: 20px;
  height: 15px;
`

const ArrowUp = Styled.div`
  background: white;
  width: inherit;
  height: inherit;
  transform-origin: 0 100%;
  transform: rotate(45deg);
  box-shadow: 0px 0px 3px gray;
`

const Body = Styled.div`
  display: flex;
  align-items: center;
  width: inherit;
  height: 30px;
  border-radius: 5px;
`

export default JournalAdderErrorDropdown;

