import Styled from 'styled-components';


export const Container = Styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: ${({width}) => width || '500px'};
  height: ${({height}) => height || '200px'};
  background: white;
  border-radius: 0.75rem;
`

export const ButtonContainer = Styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
`