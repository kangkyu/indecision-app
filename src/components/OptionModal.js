import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => {
  return (
    <Modal isOpen={!!props.selectedOption} onRequestClose={props.handleClose}>
      <p>{props.selectedOption}</p>
      <button onClick={props.handleClose}>Okay</button>
    </Modal>
  );
}

export default OptionModal;
