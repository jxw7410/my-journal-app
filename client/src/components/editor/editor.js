import React, { useState, useRef } from 'react';
import Styled from 'styled-components';
import ButtonOne from '../utils/button_one';
import { useEntryContext } from '../../utils/entry_context'
import { formatEntry } from '../../utils/helpers';

function Editor(props) {
  const textEditorRef = useRef();
  const [uiButtonActiveState, setUIButtonActiveState] = useState({
    bold: false,
    italic: false,
  });
  
  const [count, setCount] = useState(0);


  const setUIState = arg => {
    setUIButtonActiveState({
      ...uiButtonActiveState,
      ...arg
    })
  }

  const focusEditor = e => {
    if (e) e.preventDefault();
    if (textEditorRef.current !== document.activeElement) {
      textEditorRef.current.focus();
    }
  }

  const onClickFormatText = type => {
    return e => {
      e.preventDefault();
      e.stopPropagation();
      focusEditor();
      document.execCommand(type, false, null);
      setqueryCommandState(type);
    }
  }

  const setqueryCommandState = type => {
    if (document.queryCommandState(type) && !uiButtonActiveState[type])
      setUIState({ [type]: true });
    else if (!document.queryCommandState(type) && uiButtonActiveState[type])
      setUIState({ [type]: false });
  }


  const onKeyPress = () => {
    const map = {};
    return e => {
      map[e.key] = e.type === 'keydown';
      if (map["Meta"] && (map["b"] || map["B"])) { document.execCommand('bold', false, null); }
      else if (map["Meta"] && (map["i"] || map["I"])) { document.execCommand('italic', false, null); }

      setUIState({
        bold: document.queryCommandState('bold'),
        italic: document.queryCommandState('italic'),
      });
    }
  }

  const onClick = e => {
    e.preventDefault();
    setUIState({
      bold: document.queryCommandState('bold'),
      italic: document.queryCommandState('italic'),
    })
  }


  const onAddEntry = e => {
    e.preventDefault();
    props.entryDispatch({
      type: 'RECEIVE_ENTRY',
      entry: {
        [count]: {
          id: count,
          html: formatEntry(textEditorRef.current.innerHTML)
        }
      }
    })
    textEditorRef.current.innerHTML = "";
    setCount(count + 1);
  }


  const addList = e => {
    e.preventDefault();
    document.execCommand('insertOrderedList', false, null);
  }

  return (
    <EditorContainer
      onClick={focusEditor}
    >
      <TextEditorUI>
        <UIButton
          active={uiButtonActiveState.bold}
          onClick={onClickFormatText('bold')}>
          <b>B</b>
        </UIButton>
        <UIButton
          active={uiButtonActiveState.italic}
          onClick={onClickFormatText('italic')}>
          <b><i>I</i></b>
        </UIButton>
        <UIButton
          onClick={addList}
        >
          List
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
          onKeyDown={onKeyPress()}
          onKeyUp={onKeyPress()}
          onClick={onClick}
        >
        </TextEditor>
        <ButtonContainer>
          <ButtonOne
            style={{ margin: '0 10px' }}
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
  position: relative;
  border: none;
  border-radius: 5px;
  color: white;
  background: ${props => props.active ? '#3c5dc1' : 'inherit'};
  height: 100%;
  min-width: 25px;
  margin: 0 2px;
  
  &:active{
    top: 2px;
  }

  &:hover{
    cursor: pointer;
    background: ${props => props.active ? '#3c5dc1' : '#5882ff'};
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