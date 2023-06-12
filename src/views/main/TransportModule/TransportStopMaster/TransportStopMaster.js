import React, { useState } from 'react'

// Assets
import PrintImage from '../../../../images/print-icon.svg';
import ExcelImage from '../../../../images/excel-icon.svg';
import Layout from '../../../../components/Layouts/Layout';
import SubHeader from '../../../../components/ScreensHeader/SubHeader';
import ExportHeader from '../../../../components/ScreensHeader/ExportHeader';
import TableStopMaster from '../../../../components/Table Stops/TableStopMaster';
import AddStopMaster from './components/AddStopMaster';


const TransportStopMaster = () => {
  const [showModal, setShowModal] = useState(false);

  const hideModal = () => {
    setShowModal(false);
  }

  return (
    <Layout>
      {/* <ItemsNotFound/> */}
      <SubHeader heading='Transport Stop Master' type='horizontal' buttonAdd='Add New Stop' buttonOrders='Order Stop(s)'  onClick={() => setShowModal(!showModal)} />
      <ExportHeader
        smallHeading='All Stops'
        smallHeding2='(202 Records)'
        PrintIcon={PrintImage}
        Excelicon={ExcelImage}
      />

      <TableStopMaster
        heading='Child Name'
      />

      {/* Add Stop Master Modal */}
      <AddStopMaster
        show={showModal}
        handleClose={hideModal}
      />
    </Layout>

  )
}

export default TransportStopMaster;