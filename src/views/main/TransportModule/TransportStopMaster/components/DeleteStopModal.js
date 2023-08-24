import React, { useState,useEffect } from 'react';
import axios from 'axios';
import config from '../../../../../config';
import DeleteModal from '../../../../../components/Modal/DeleteModal';

const DeleteStopModal = props => {

    const { show, handleClose,onDelete,setStopResponse1 } = props;
    const [deleteStopResponse, setdeleteStopResponse] = useState('');
    /**
     * 
     * get Delete Stop Names and Abbr
     */
     useEffect(() => {
            axios.get(config.baseUrl + 'api-transport/transportStopApiManager/getDeleteStop/'+props.id).then((response) => {
                setdeleteStopResponse(response.data.rows[0]['stopName']);
                // console.log(deleteStopResponse);
            }).catch((errorCatch) => {
                console.log(errorCatch);
            });
     }, [props.id]);
    
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
            onDelete();
            // setTimeout(() => {
            //     window.location.reload();
            // }, 4000);
            axios.get(config.baseUrl + 'api-transport/transportStopApiManager/getAllStops/1/1/1/0/0/1/-1').then((response) => {
                        setStopResponse1(response.data.rows);
                        // console.log(response.data);
                        }).catch((errorCatch) => {
                            console.log(errorCatch);
                        });
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
            description={`You're about to delete the stop '${deleteStopResponse}'. Doing this means you will no longer be able to restore this stop. Are you sure you want to delete it?`}
        >
        </DeleteModal>
    );
};

export default DeleteStopModal;