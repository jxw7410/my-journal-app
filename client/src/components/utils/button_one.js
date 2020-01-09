import React from 'react';
import Styled from 'styled-components';
import PropType from 'prop-types';


function ButtonOne(props){
  return (
    <Button
      style={props.style}
      tabIndex={props.tabIndex}
      background={props.background}
      width={props.width}
      height={props.height}
      onClick={props.onClick}
      fSize={props.fontSize}
    >
      {props.children}
    </Button>
  )
}

ButtonOne.propTypes = {
  onClick: PropType.func.isRequired,
  width: PropType.number,
  height: PropType.number,
  fontSize: PropType.number,
  tabIndex: PropType.string,
  background: PropType.string,
  text: PropType.string,
  style: PropType.object,
}

ButtonOne.defaultProps = {
  text: "Button",
  background: 'teal',
  tabIndex: '0',
  width: 100,
  height: 50,
  fontSize: 20,
}


const Button = Styled.button`
  width: ${({width}) => width + 'px'};
  height: ${({height}) => height + 'px'};
  border: 2px solid ${({background}) => background};
  background: ${({ background }) => background};
  border-radius: 5px;
  font-size: ${({fSize}) => fSize + 'px'};
  color: white;
  transition: all 0.1s linear;

  &:hover{
    cursor: pointer;
    color: ${({ background }) => background};
    background: white;
  }

  &:focus{
    outline: none;
  }
`



export default ButtonOne;