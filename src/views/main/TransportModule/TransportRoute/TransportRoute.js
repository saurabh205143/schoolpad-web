import React, { useState } from 'react'
import Layout from '../../../../components/Layouts/Layout';
import ItemsNotFound from '../../../../components/NotFoundItems/ItemsNotFound';
import SubHeader from '../../../../components/ScreensHeader/SubHeader';
import ExportHeader from '../../../../components/ScreensHeader/ExportHeader';
import Table from '../../../../components/Table/Table';
import AddRoutes from './components/AddRoutes';

// Assets
import PrintImage from '../../../../images/print-icon.svg';
import ExcelImage from '../../../../images/excel-icon.svg';
import { ContainerRight } from '../../../../components/ScreensHeader/subHeaderStyles';
import Pagination from '../../../../components/Pagination/Pagination';
import TableNew from '../../../../components/Pagination/TableNew';
import PickupDropTime from './components/PickupDropTime';

const TransportRoute = () => {

  const [showModal, setShowModal] = useState(false);
  const [showpickedTime, setShowPickedTime] = useState(false);

  const hidePickedTimeModal = () => {
    setShowPickedTime(false);
  }

  const hideModal = () => {
    setShowModal(false);
  }

  return (
    <Layout>
      {/* <ItemsNotFound/> */}
      <SubHeader heading='Transport Route Master' type='horizontal' onClick={() => setShowModal(!showModal)} />
      <ExportHeader
        smallHeading='All Routes'
        smallHeding2='202 Records'
        PrintIcon={PrintImage}
        Excelicon={ExcelImage}
      />
      <TableNew
        onClick={() => setShowPickedTime(!showpickedTime)}
      />

      {/* Add Route Modal */}
      <AddRoutes
        show={showModal}
        handleClose={hideModal}
      />

      {/* Picked/Drop Time Modal */}
      <PickupDropTime
        show={showpickedTime}
        handleClose={hidePickedTimeModal}
      />
    </Layout>
  )
}

export default TransportRoute;