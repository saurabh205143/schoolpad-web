import React, { useState } from 'react';
import axios from 'axios';
import config from '../../../../../config';
import DeleteModal from '../../../../../components/Modal/DeleteModal';

const DeleteStopModal = props => {

    const { show, handleClose,onDelete } = props;
    const [deleteStopResponse, setdeleteStopResponse] = useState([]);
    console.log(props.id);
    /**
     * 
     * DeleteStop Api
     */
    const deleteStop = (stopId) => { 
    /**
     * 
     * Calling APi delete Post
     */
        axios.delete(config.baseUrl + 'api-transport/transportStopApiManager/delete_stop', {
             data: {
            stopId: stopId,
            userId: 1,
            sessionId: 1,
            instituteId: 1
        }
        }).then((response) => {
            setdeleteStopResponse(response.data);
            console.log(response.data);
            onDelete();
            setTimeout(() => {
                window.location.reload();
            }, 4000);
        }).catch((errorCatch) => {
            
            console.log(errorCatch);
        });
    }
    return (
        <DeleteModal
            show={show}
            handleClose={handleClose}
            modalHeading={'Delete Stop'}
            submitText='Yes, delete it'
            cancelText='No, do not delete it'
            // onDelete={onDelete}
            onDelete={() => { deleteStop(props.id) }}
            description='Test'
        >
        </DeleteModal>
    );
};

export default DeleteStopModal;