/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

class Modal extends React.Component {
  render() {
    const { open, children, handleClose } = this.props;

    return ReactDOM.createPortal(
      <Modal.Container open={open}>
        <Modal.Backdrop onClick={handleClose} />
        <Modal.Box>{children}</Modal.Box>
      </Modal.Container>,
      document.getElementById('modal-root')
    );
  }
}

Modal.Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.open ? 1 : 0)};
  z-index: 102;
`;

Modal.Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;
`;

Modal.Box = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  background: white;
  overflow-y: auto;
  max-height: calc(100vh - 80px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  z-index: 101;

  @media (max-width: 1240px) {
    width: 80%;
  }
  @media (max-width: 999px) {
    width: 90%;
  }
`;

export default Modal;
