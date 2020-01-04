import React, {memo} from 'react';
import Styled from 'styled-components';
import PropType from 'prop-types';

function ErrorMessage(props) {
  return ( 
    <>
     <Span
      color={props.color}
      fSize={props.fontSize}
      width={props.width}
      padding={props.padding}
     >
       {props.children}
    </Span>
    </>
  )
}

ErrorMessage.defaultProps = {
  color: 'red',
  fontSize: '0.8em',
  width: '90%',
  padding: '5px 0px',
}

ErrorMessage.propTypes = {
  color: PropType.string,
  fontSize: PropType.string,
  width: PropType.string,
  padding: PropType.string,
}

const Span = Styled.span`
  color: ${ props => props.color };
  font-size: ${ props => props.fSize };
  width: ${ props => props.width };
  padding: ${ props => props.padding };
  white-space: nowrap;

  &::before{
    content: "*";
  }
`


export default memo(ErrorMessage);