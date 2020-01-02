import React, { useState } from 'react';
import Styled from 'styled-components';
import PropType from 'prop-types'

function InputOne(props) {
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = bool => {
    return e => {
      e.preventDefault();
      setIsFocus(bool)
    }
  }


  return (
    <InputContainer
      padding={props.padding}
      width={props.width}
      height={props.height}>
      <InputLabel
        isFocus={isFocus || props.value.length}
        fSize={props.fontSize}
        padding={props.padding}>
        {props.label}
      </InputLabel>

      <Input
        autoComplete='true'
        isFocus={isFocus || props.value.length}
        onFocus={handleFocus(true)}
        onBlur={handleFocus(false)}
        type={props.type}
        fSize={props.fontSize}
        padding={props.padding}
        onChange={props.onChange}
        value={props.value}
      />
    </InputContainer>
  )
}

InputOne.propTypes = {
  fontSize: PropType.number,
  padding: PropType.number,
  value: PropType.string,
  onChange: PropType.func,
  label: PropType.string,
  type: PropType.string,
}

InputOne.defaultProps = {
  fontSize: 18,
  padding: 4,
  value: "",
  label: 'label',
  type: "text"
}


const InputContainer = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: ${ ({ padding }) => padding + 'px'};
  width: ${ ({ width }) => width || '90%'};
  height: ${ ({ height }) => height || '35px'};
`

const InputLabel = Styled.label`
  position: absolute;
  font-weight: 500;
  transition: all 0.1s linear;
  left: ${ ({ padding }) => 2 * padding + 'px'};
  color: ${ ({ isFocus }) => isFocus ? 'rgb(26, 115, 232)' : '#a29797'};
  font-size: ${ ({ fSize, isFocus }) => (isFocus ? fSize / 2 : fSize) + 'px'}
  top: ${ ({ fSize, isFocus }) => isFocus ? '-2px' : `calc(50% - ${fSize / 2 + 'px'})`};
`
  
const Input = Styled.input`
  margin: 0;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  border-style: none;
  border:${ ({ isFocus }) => `1px solid ${isFocus ? 'rgb(26, 115, 232)' : 'lightgray'}`};
  font-size: ${ ({ fSize }) => fSize + 'px'}
  padding: ${ ({ padding }) => `${padding}px ${2*padding}px`};
`


export default InputOne;

