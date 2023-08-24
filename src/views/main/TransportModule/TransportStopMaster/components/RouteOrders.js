import React from 'react';
import Modal from '../../../../../components/Modal/Modal';
import DragDropList from '../../../../../components/Drag&DropSortList/DragDropList';
import { useState } from 'react';
import axios from 'axios';
import config from '../../../../../config';


const RouteOrders = props => {
    const { show, handleClose, orderHeading } = props;
    /**
     * 
     * Submit Function Of Save
     */

    const submit = () => { 
        // console.log(localStorage.getItem("theList"));
         const storedData = localStorage.getItem('theList');
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            /**
             * 
             * Update Stop Stop Order APi
             */
            axios.put(config.baseUrl + 'api/v1/transport/stops/Order', parsedData).then((response) => {
                console.log(response.data);
                handleClose(false);
            }).catch((errorCatch) => {
                console.log(errorCatch);
            });
        } else { 
            handleClose(false);
        }
}
    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalHeading={'Stop Order(s)'}
            modalSubHeading={'hello'}
            submitText='Save'
            cancelText='Cancel'
            saveAction={submit}
        >
            <DragDropList
                orderHeading={orderHeading}
            />
        </Modal>
    );
};

export default RouteOrders;