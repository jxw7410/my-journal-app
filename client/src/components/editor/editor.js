import React, {useState, useRef} from 'react';
import Styled from 'styled-components';


function Editor() {
  const textEditorRef = useRef();
  const [uiButtonActiveState, setUIButtonActiveState] = useState({
    bold: false,
    italic: false,
  });

  const onClickFormatText = type => {
    return e => {
      e.preventDefault();
      if(textEditorRef.current !== document.activeElement) { 
        textEditorRef.current.focus() 
      }
      document.execCommand(type, false, null);
      setUIButtonActiveState({
        ...uiButtonActiveState,
        [type]: !uiButtonActiveState[type]
      })
    }
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
        <p></p>
      </TextEditor>
    </EditorContainer>
  )

}




const EditorContainer = Styled.div`
  border: 1px solid royalblue;
  border-radius: 5px;
  width: 80vw;
  height: 150px;
  display: grid;
  grid-template-rows: 40px auto;
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

export default Editor;