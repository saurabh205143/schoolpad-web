import React, { useState,useEffect }  from 'react';
import Modal from '../../../../../components/Modal/Modal';
import StudentList from '../../../../../components/Table Stops/StudentList';
import axios from 'axios';
import config from '../../../../../config';

const StudentListTable = props => {
    const { show, handleClose } = props;
    const [count, setCount] = useState(0);
    // console.log(props.id);
    /**
     * 
     * Calling APi get
     */
    useEffect(() => {
        let stopId = props.id;
        console.log(stopId);
        axios.get(config.baseUrl + 'api-transport/transportStopApiManager/getAllStudents/'+stopId+'/8/1/25').then((response) => {
            setCount(parseInt(response.data.data.totalRecords));
            console.log(response.data);
        }).catch((errorCatch) => {
            console.log(errorCatch);
        });
    }, [props.id]);
    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalHeading={'Student List ('+count+')'}
        >
            <StudentList  id={props.id} />
        </Modal>
    );
};

export default StudentListTable;