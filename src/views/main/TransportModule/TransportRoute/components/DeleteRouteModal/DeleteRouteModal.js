import React from 'react';
import DeleteModal from '../../../../../../components/Modal/DeleteModal';

const DeleteRouteModal = props => {

    const { show, handleClose } = props;

    return (
        <DeleteModal
            show={show}
            handleClose={handleClose}
            modalHeading={'Delete Route'}
            submitText='Yes, delete it'
            cancelText='No, do not delete it'
        >
        </DeleteModal>
    );
};

export default DeleteRouteModal;