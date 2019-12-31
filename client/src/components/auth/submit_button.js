import React, {memo} from 'react';
import Styled from 'styled-components';
import PropType from 'prop-types';

function SubmitButton(props) {

  return (
    <Button
      type='button'
      width={props.width}
      height={props.height}
      fSize={props.fontSize}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  )
}

SubmitButton.propTypes = {
  text: PropType.string,
  width: PropType.string,
  height: PropType.string,
  onClick: PropType.func.isRequired,
}


SubmitButton.defaultProps = {
  width: '90%',
  height: '40px',
  fontSize: '20px'
}

const Button = Styled.button`
  width: ${({ width }) => width}
  height: ${({ height }) => height}
  background: purple;
  color: white;
  font-weight: 500;
  font-size: ${({fSize}) => fSize}
  border-radius: 3px; 
  transition: background 0.1s linear;

  &:hover {
    cursor: pointer;
    background: #bf44bf;
  }
`

export default memo(SubmitButton);