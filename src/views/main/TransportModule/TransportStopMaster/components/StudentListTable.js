import React from 'react';
import Modal from '../../../../../components/Modal/Modal';
import StudentList from '../../../../../components/Table Stops/StudentList';

const StudentListTable = props => {
    const {show,handleClose} = props;
    console.log(props.id);
    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalHeading={'Student List (12)'}
        >
            <StudentList />
        </Modal>
    );
};

export default StudentListTable;