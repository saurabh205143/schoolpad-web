import React, { useState } from 'react'
import Layout from '../../../../components/Layouts/Layout';
import SubHeader from '../../../../components/ScreensHeader/SubHeader';
import ExportHeader from '../../../../components/ScreensHeader/ExportHeader';
import AddRoutes from './components/AddRoutes';

// Assets
import PrintImage from '../../../../images/print-icon.svg';
import ExcelImage from '../../../../images/excel-icon.svg';
import TableNew from '../../../../components/Pagination/TableNew';
import PickupDropTime from './components/PickupDropTime';
import RouteOrders from './components/RouteOrders';

const TransportRoute = () => {

  const [showModal, setShowModal] = useState(false);
  const [showpickedTime, setShowPickedTime] = useState(false);
  const [showRouteOrderModal, setShowRouteOrderModal] = useState(false);

  const hidePickedTimeModal = () => {
    setShowPickedTime(false);
  }

  const hideModal = () => {
    setShowModal(false);
  }

  const hideRouteOrderModal = () => {
    setShowRouteOrderModal(false);
  }

  return (
    <Layout>
      {/* <ItemsNotFound/> */}
      <SubHeader
        heading='Transport Route Master'
        type='horizontal' 
        buttonAdd='Add New Route'
        buttonOrders='Order Routes(s)'
        buttonOption='Associated Options'
        buttonOrderDragList={() => setShowRouteOrderModal(!showRouteOrderModal)}
        onClick={() =>  setShowModal(!showModal)}
      />
      <ExportHeader
        smallHeading='All Routes'
        smallHeding2='(202 Records)'
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

      {/* Route Order Modal */}
      <RouteOrders
        show={showRouteOrderModal}
        handleClose={hideRouteOrderModal}
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