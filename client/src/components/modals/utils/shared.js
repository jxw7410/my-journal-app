import Styled from 'styled-components';


export const Container = Styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: ${({width}) => width || '500px'};
  height: ${({height}) => height || '200px'};
  background: white;
  border-radius: 0.8rem;
  overflow: hidden;
`

export const ButtonContainer = Styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
`