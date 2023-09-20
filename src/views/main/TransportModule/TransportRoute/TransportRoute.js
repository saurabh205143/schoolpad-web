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
import DeleteRouteModal from './components/DeleteRouteModal/DeleteRouteModal';
import AddGpsLinkModal from './components/AddGpsLinkModal';
import TransportSettingModal from './components/TransportSettingModal';
import ChangeRouteHistory from './components/ChangeRouteHistory';
import ItemsNotFound from '../../../../components/NotFoundItems/ItemsNotFound';

const TransportRoute = ({orderHeading,}) => {

  const [showModal, setShowModal] = useState(false);
  const [showpickedTime, setShowPickedTime] = useState(false);
  const [showRouteOrderModal, setShowRouteOrderModal] = useState(false);
  const [showFormFieldModal, setShowFormFieldModal ] = useState(false);
  const [showdeleteModal, setShowDeleteModal] = useState(false);

  const hidePickedTimeModal = () => {
    setShowPickedTime(false);
  }

  const hideModal = () => {
    setId(false);
  }

  const hideDeleteModal = () => {
    setDeleteId(false);
  }

  const hideRouteOrderModal = () => {
    setShowRouteOrderModal(false);
  }

  const hideFormFieldModal = () => {
    setShowFormFieldModal(false);
  }

  const [id, setId] = useState(null);
  const [deleteId,setDeleteId] = useState(null);
  const [showGpsLink, setShowGpsLink] = useState(null);
  const [showSettingModal, setShowSettingModal] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  const hideHistoryModal = () => {
    setShowHistory(false);
  }

  const hideSettingModal = () => {
    setShowSettingModal(false);
  }

  const hideGpsModal = () => {
    setShowGpsLink(false);
  }

  return (
    <Layout type='transport'>
       {/* <ItemsNotFound />  */}
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
        formMaintenanceClick={() => setShowSettingModal(!showSettingModal)}
        historyButtonText="Change History"
        historyOnClick={() => setShowHistory(!showHistory)}
      />
      <ExportHeader
        smallHeading='All Routes'
        smallHeding2='(202 Records)'
        PrintIcon={PrintImage}
        Excelicon={ExcelImage}
      />
      <TableNew
        onClick={() => setShowPickedTime(!showpickedTime)}
        EditOnclick={(id) => {setId(!id);}} 
        DeleteOnClick={(deleteId) => { setDeleteId(!deleteId); }} 
        GpsLink ={(showGpsLink) => {setShowGpsLink(!showGpsLink)}}
      />

      {/* Add Route Modal */}
      <AddRoutes
        show={id}
        handleClose={hideModal}
        id={id}
      />
      
      {/* Delete Modal */}
      <DeleteRouteModal
        show={deleteId}
        handleClose={hideDeleteModal}
        id={deleteId}
      />

      {/* Add GPS Modal */}
      <AddGpsLinkModal
        show={showGpsLink}
        handleClose={hideGpsModal}
        id={showGpsLink}
       />

      {/* Transport Settings Modal */}
      <TransportSettingModal
        show={showSettingModal}
        handleClose={hideSettingModal}
      />

      {/* Change History Modal */}
      <ChangeRouteHistory
        show={showHistory}
        handleClose={hideHistoryModal}
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