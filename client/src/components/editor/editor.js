import React, { useState, useRef } from 'react';
import Styled from 'styled-components';
import ButtonOne from '../utils/button_one';
import {useEntryContext} from '../../utils/entry_context'

function Editor(props) {
  const textEditorRef = useRef();
  const [uiButtonActiveState, setUIButtonActiveState] = useState({
    bold: false,
    italic: false,
  });

  const [count, setCount] = React.useState(0);

  const onClickFormatText = type => {
    return async (e) => {
      e.preventDefault();
      if (textEditorRef.current !== document.activeElement) {
        textEditorRef.current.focus()
      }

      await new Promise(resolve =>
        setTimeout(() => {
          document.execCommand(type, false, null);
          resolve();
        }, 0)
      );

      setUIButtonActiveState({
        ...uiButtonActiveState,
        [type]: !uiButtonActiveState[type]
      })
    }
  }



  const onAddEntry = e => {
    e.preventDefault();
    // Test
    props.entryDispatch({
      type: 'RECEIVE_ENTRY',
      entry: { 
        [count]: {
          id: count,
          html: textEditorRef.current.innerHTML 
        }
      }
    })

    setCount(count + 1);
  }


  return (
    <EditorContainer>
      <TextEditorUI>
        <UIButton
          active={uiButtonActiveState.bold}
          onClick={onClickFormatText('bold')}>
          <b>B</b>
        </UIButton>
        <UIButton
          active={uiButtonActiveState.italic}
          onClick={onClickFormatText('italic')}>
          <i>I</i>
        </UIButton>
      </TextEditorUI>
      <TextEditorContainer>
        <TextEditor
          ref={textEditorRef}
          suppressContentEditableWarning={true}
          autoComplete="off"
          autoCorrect="off"
          spellCheck="true"
          aria-autocomplete="list"
          aria-multiline="true"
          aria-label="Message"
          dir="auto"
          contentEditable="true"
          role="textbox"
          tabIndex='0'
        >
        </TextEditor>
        <ButtonContainer>
          <ButtonOne
            style={{margin: '0 10px'}}
            width={80}
            height={30}
            background='green'
            onClick={onAddEntry}
          >
            Add
        </ButtonOne>
        </ButtonContainer>
      </TextEditorContainer>
    </EditorContainer>
  )

}




const EditorContainer = Styled.div`
  border: 1px solid royalblue;
  border-radius: 5px;
  width: 80vw;
  min-height: 150px;
  display: grid;
  grid-template-rows: 40px auto;
`

const TextEditorContainer = Styled.div`
  display: grid;
  grid-template-rows: auto 40px;
`
const TextEditor = Styled.div`
  user-select: text;
  cursor: text;
  text-align: left;
  white-space: pre-wrap;
  word-wrap: break-word;
  padding: 10px;
  &:focus{
    outline: none
  }

  & p{
    min-height: 21px;
    margin: 0;
  }
`

const TextEditorUI = Styled.div`
  margin: 0 auto;
  display: flex;
  top: 0px;
  left: 0px;
  height: 30px;
  padding: 5px 5px;
  width: calc(100% - 10px);
  background: royalblue;

`

const UIButton = Styled.button`
  border: none;
  border-radius: 5px;
  color: white;
  background: ${props => props.active ? '#3c5dc1' : 'inherit'};
  height: 100%;
  width: 25px

  &:hover{
    cursor: pointer;
    background: #5882ff;
  }

  & > * {
    margin: 0 auto;
  }
`

const ButtonContainer = Styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export default useEntryContext(Editor);