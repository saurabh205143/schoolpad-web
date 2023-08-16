import React from 'react';
import DeleteModal from '../../../../../components/Modal/DeleteModal';

const DeleteStopModal = props => {

    const { show, handleClose,onDelete } = props;
    console.log(props.id);
    return (
        <DeleteModal
            show={show}
            handleClose={handleClose}
            modalHeading={'Delete Stop'}
            submitText='Yes, delete it'
            cancelText='No, do not delete it'
            onDelete={onDelete}
        >
        </DeleteModal>
    );
};

export default DeleteStopModal;