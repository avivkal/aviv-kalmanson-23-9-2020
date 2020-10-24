import React from 'react'
import propTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';

const CustomModal = (props) => {
    return (
        <Modal show={props.show} onHide={props.closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>{props.modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.modalText}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.closeModal}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );

}

CustomModal.propTypes = {
    modalTitle: propTypes.string,
    modalText: propTypes.string,
    closeModal: propTypes.func,
    show: propTypes.bool,
}

export default CustomModal;