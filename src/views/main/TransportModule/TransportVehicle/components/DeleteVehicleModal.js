import React, { useState,useEffect } from 'react';
import DeleteModal from '../../../../../components/Modal/DeleteModal';

const DeleteVehicleModal = props => {

    const { show, handleClose,onDelete,setStopResponse1 } = props;
    
    return (
        <DeleteModal
            show={show}
            handleClose={handleClose}
            modalHeading={'Delete Vehicle'}
            submitText='Yes, delete it'
            cancelText='No, do not delete it'
             onDelete={onDelete}
            description={`You're about to delete the Vehicle. Doing this means you will no longer be able to restore this stop. Are you sure you want to delete it?`}
        >
        </DeleteModal>
    );
};

export default DeleteVehicleModal;