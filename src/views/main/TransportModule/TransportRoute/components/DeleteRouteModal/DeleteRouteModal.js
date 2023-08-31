import React from 'react';
import DeleteModal from '../../../../../../components/Modal/DeleteModal';

const DeleteRouteModal = props => {

    const { show, handleClose,onDelete } = props;
    console.log(props.id);
    return (
        <DeleteModal
            show={show}
            handleClose={handleClose}
            modalHeading={'Delete Route'}
            submitText='Yes, delete it'
            cancelText='No, do not delete it'
            onDelete={onDelete}
            description={`You're about to delete the Route . Doing this means you will no longer be able to restore this stop. Are you sure you want to delete it?`}
        >
        </DeleteModal>
    );
};

export default DeleteRouteModal;