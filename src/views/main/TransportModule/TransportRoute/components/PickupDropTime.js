import React from 'react';
import Modal from '../../../../../components/Modal/Modal';
import { PickedDropContainer } from './AddRouteStyles';
import PickDropTimeTable from '../../../../../components/Table/PickDropTimeTable';

const PickupDropTime = props => {
    const {show,handleClose} = props;
    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalHeading={'Pickup and Drop Time'}
            submitText='Save'
        >
            <PickedDropContainer>
                <PickDropTimeTable />
            </PickedDropContainer>
            
        </Modal>
    );
};

export default PickupDropTime;