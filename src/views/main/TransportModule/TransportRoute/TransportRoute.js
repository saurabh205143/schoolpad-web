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
import AddFormField from './components/AddFormField';

const TransportRoute = ({orderHeading}) => {

  const [showModal, setShowModal] = useState(false);
  const [showpickedTime, setShowPickedTime] = useState(false);
  const [showRouteOrderModal, setShowRouteOrderModal] = useState(false);
  const [showFormFieldModal, setShowFormFieldModal ] = useState(false);

  const hidePickedTimeModal = () => {
    setShowPickedTime(false);
  }

  const hideModal = () => {
    setId(false);
  }

  const hideRouteOrderModal = () => {
    setShowRouteOrderModal(false);
  }

  const hideFormFieldModal = () => {
    setShowFormFieldModal(false);
  }

  const [id, setId] = useState(null);

  return (
    <Layout type='transport'>
      {/* <ItemsNotFound/> */}
      <SubHeader
        heading='Transport Route Master'
        type='horizontal' 
        buttonAdd='Add New Route'
        buttonOrders='Order Routes(s)'
        buttonOption='Associated Options'
        buttonManageText='Add Pick/Drop Time' 
        buttonManageMaintenance='Transport Settings'
        searchPlaceholder='Search by route name etc...'
        buttonOrderDragList={() => setShowRouteOrderModal(!showRouteOrderModal)}
        onClick={() => setId(!id)} 
        formField={() => setShowFormFieldModal(!showFormFieldModal)}
        showChangeHistoryButton={true}
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
        show={id}
        handleClose={hideModal}
        id={id}
      />

      {/* Route Order Modal */}
      <RouteOrders
        show={showRouteOrderModal}
        handleClose={hideRouteOrderModal}
        orderHeading={orderHeading}
      />

      {/* Associated Options - Add Form Field */}
      <AddFormField
        show={showFormFieldModal}
        handleClose={hideFormFieldModal}
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