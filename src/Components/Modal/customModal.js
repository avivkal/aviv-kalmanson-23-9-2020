import React from 'react'
import propTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux'
import {closeModal} from '../../Store/Actions/homeActions'

const CustomModal = (props) => {
    const dispatch = useDispatch();
    const modalTitle = useSelector(state => state.home.modalTitle);
    const modalText = useSelector(state => state.home.modalText);

    return (
        <Modal show={props.show} onHide={() => dispatch(closeModal())}>
            <Modal.Header closeButton>
                <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{modalText}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => dispatch(closeModal())}>
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