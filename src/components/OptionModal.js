import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption} //converting to true Boolean
        contentLabel="Selected Option"
        onRequestClose={props.closeModal}
        ariaHideApp={false} //removing element error msg
    >
        <h3>Selected Option:</h3>
        <p>{props.selectedOption}</p>
        <button onClick={props.closeModal}>Close Modal</button>
    </Modal>
);

export default OptionModal;
