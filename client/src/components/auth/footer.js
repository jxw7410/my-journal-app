import React, {memo} from 'react';
import Styled from 'styled-components';
import PropType from 'prop-types';

function Footer(props){

  return (
    <FooterContainer
      width={props.width}
      fSize={props.fontSize}>
      {props.children}
    </FooterContainer>
  )
}

Footer.propTypes = {
  width: PropType.string,
  fontSize: PropType.string,
}

Footer.defaultProps = {
  width: '90%',
  fontSize: '14px'
}

const FooterContainer = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`



export default memo(Footer);