import React from 'react';
import Modal from '../../../../../components/Modal/Modal';
import DragDropListForRoute from '../../../../../components/Drag&DropSortList/DragDropListForRoute';

const RouteOrders = props => {
    const {show,handleClose,orderHeading} = props;
    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalHeading={'Route Order(s)'}
            modalSubHeading={'hello'}
            submitText='Save'
            cancelText='Cancel'
        >
            <DragDropListForRoute orderHeading={orderHeading} />
        
        </Modal>
    );
};

export default RouteOrders;