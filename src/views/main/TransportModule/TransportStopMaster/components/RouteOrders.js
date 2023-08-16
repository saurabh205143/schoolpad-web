import React from 'react';
import Modal from '../../../../../components/Modal/Modal';
import DragDropList from '../../../../../components/Drag&DropSortList/DragDropList';

const RouteOrders = props => {
    const {show,handleClose, OrdersHeading,orderHeading} = props;
    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalHeading={'Stop Order(s)'}
            modalSubHeading={'hello'}
            submitText='Save'
            cancelText='Cancel'
        >
        <DragDropList orderHeading={orderHeading}/>
        </Modal>
    );
};

export default RouteOrders;