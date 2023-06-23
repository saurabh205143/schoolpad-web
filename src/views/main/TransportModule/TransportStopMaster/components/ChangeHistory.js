import React from 'react';
import Modal from '../../../../../components/Modal/Modal';
import ChangeHistoryList from '../../../../../components/Table Stops/components/ChangeHistoryList';

const ChangeHistory = props => {
    const {show,handleClose} = props;
    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalHeading={'Change History'}
        >
            <ChangeHistoryList/>
        </Modal>
    );
};

export default ChangeHistory;