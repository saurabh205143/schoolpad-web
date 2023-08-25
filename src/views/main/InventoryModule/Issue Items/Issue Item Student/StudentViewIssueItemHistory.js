import React, { useState } from 'react';
import Modal from '../../../../../components/Modal/Modal';

// Assets
import { ModalBodyConatiner } from '../../../TransportModule/TransportRoute/components/AddRouteStyles';
import StudentViewHistoryData from './StudentViewHistoryData';

const StudentViewIssueItemHistory = props => {

  const { show, handleClose } = props;

  const [formValues, setFormValues] = useState(
    [
      {
        staff_member: "",
        route_name: "",
        stops: "",
        set_order: "",
        vehicle_number: "",
        vehicle_capacity: "",
        bus_help: "",
      }
    ]
  )

  let addFormFields = () => {
    setFormValues([...formValues, { stops: "", set_order: "" }])
  }

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues)
  }

  const [tabKey, initTabKey] = useState('one')

  return (
    <Modal
      show={show}
      handleClose={handleClose}
      modalHeading={'Issue Item(s)'}
      submitText='Yes,Issue Items'
      cancelText='No,Cancel it'
    >
      <p><form>
        <ModalBodyConatiner>
          <StudentViewHistoryData/>
        </ModalBodyConatiner>
      </form></p>
    </Modal>
  );
};

export default StudentViewIssueItemHistory;