import React, { useState } from 'react'
import Layout from '../../../../components/Layouts/Layout';
import SubHeader from '../../../../components/ScreensHeader/SubHeader';
import ExportHeader from '../../../../components/ScreensHeader/ExportHeader';


// Assets
import PrintImage from '../../../../images/print-icon.svg';
import ExcelImage from '../../../../images/excel-icon.svg';
import AddVehicle from './components/AddVehicle';
import TableVehicle from '../../../../components/Table copy/TableVehicle';

const TransportVehicle = () => {
  const [showModal, setShowModal] = useState(false);

  const hideModal = () => {
    setShowModal(false);
  }

  return (
    <Layout type='transport'>
      {/* <ItemsNotFound/> */}
      <SubHeader heading='Transport Vehicle Master' type='horizontal' buttonAdd='Add New Vehicle' buttonOption='Associated Options' onClick={() => setShowModal(!showModal)} />
      <ExportHeader
        smallHeading='All Vehicles'
        smallHeding2='(202 Records)'
        PrintIcon={PrintImage}
        Excelicon={ExcelImage}
      />

        <TableVehicle
        heading='Status'
        />

         {/* Add Vehicle Modal */}
          <AddVehicle
            show={showModal}
            handleClose={hideModal}
          />
    </Layout>

  )
}

export default TransportVehicle;