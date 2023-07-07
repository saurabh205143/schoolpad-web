import React from 'react';
import { PickedDropContainer } from './AddRouteStyles';
import PickDropTimeTable from '../../../../../components/Table/PickDropTimeTable';
import Modal from '../../../../../components/Modal/Modal';

const PreviousCustomField = props => {
    const {show,handleClose} = props;
    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalHeading={'Pickup and Drop Time'}
            submitText='Save'
            cancelText='Cancel'
        >
            <PickedDropContainer>
                <PreviousCustomField/>
            </PickedDropContainer>
            
        </Modal>
    );
};

export default PreviousCustomField;