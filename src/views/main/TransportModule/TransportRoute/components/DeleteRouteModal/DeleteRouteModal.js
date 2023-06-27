import React from 'react';
import Modal from '../../../../../../components/Modal/Modal';
import { DeleteContainer, DeleteModalHeading, DeleteModalSubHeading } from './DeleteRouteModalStyles';

const DeleteRouteModal = props => {

    const { show, handleClose } = props;

    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalHeading={'Delete Route'}
            submitText='Yes, delete'
            cancelText='No, keep it'
        >
          <DeleteContainer>
            <DeleteModalHeading>
            You are about to delete a Route
            <DeleteModalSubHeading><span>Are you sure you want to delete this Route ? This action cannot be undone.</span></DeleteModalSubHeading>
            </DeleteModalHeading>
          </DeleteContainer>
        </Modal>
    );
};

export default DeleteRouteModal;