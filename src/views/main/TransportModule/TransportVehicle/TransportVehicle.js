import React, { useState } from 'react'
import Layout from '../../../../components/Layouts/Layout';
import SubHeader from '../../../../components/ScreensHeader/SubHeader';
import ExportHeader from '../../../../components/ScreensHeader/ExportHeader';

// Assets
import PrintImage from '../../../../images/print-icon.svg';
import ExcelImage from '../../../../images/excel-icon.svg';
import AddVehicle from './components/AddVehicle';
import TableVehicle from '../../../../components/Table copy/TableVehicle';
import AddFormField from '../TransportRoute/components/AddFormField';
import ManageFuelPump from './components/ManageFuelPump';
import ManageMaintenance from './components/ManageMaintenance';
import TableVehicleMaster from '../../../../components/Table copy/TableVehicleMaster';
import DeleteVehicleModal from './components/DeleteVehicleModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToastModals from '../../../../components/Toaster/ToastModals';


const TransportVehicle = () => {
  const [showModal, setShowModal] = useState(false);
  const [showFormFieldModal, setShowFormFieldModal ] = useState(false);
  const [showFormManageModal, setShowFormManageModal ] = useState(false);
  const [showMaintenanceModal, setShowMaintenanceModal ] = useState(false);

  const hideModal = () => {
    setId(false);
  }

  const hideDeleteModal = () => {
    setDeletedId(false);
  }

  const hideFormFieldModal = () => {
    setShowFormFieldModal(false);
  }

  const hideFormManageModal = () => {
    setShowFormManageModal(false);
  }

  const hideMaintenancModal = () => {
    setShowMaintenanceModal(false);
  }

  const [id, setId] = useState(null);
  const [deletedId, setDeletedId] = useState(null);

  const showDeleteToastMessage = () => {
    hideDeleteModal();
    toast(
      <ToastModals type='successful' message='You have successfully deleted  vehicle.' />
    );
  };

  return (
    <Layout type='transport'>
      {/* <ItemsNotFound/> */}

      <SubHeader 
      heading='Transport Vehicle Master' 
      type='horizontal'
      buttonAdd='Add New Vehicle' 
      buttonOption='Associated Options'
      buttonManageText='Manage Fuel Pump' 
      buttonManageMaintenance='Manage Maintenance'
      searchPlaceholder='Search by vehicle name etc...'
      onClick={() => setId(!id)} 
      formField={() => setShowFormFieldModal(!showFormFieldModal)}
      />
      <ExportHeader
        smallHeading='All Vehicles'
        smallHeding2='(202 Records)'
        PrintIcon={PrintImage}
        Excelicon={ExcelImage}
      />

      <TableVehicleMaster
        EditOnclick={(id) => {setId(!id);}} 
        DeleteOnClick={(deletedId) => { setDeletedId(!deletedId); }} 
      />

         {/* Add Vehicle Modal */}
          <AddVehicle
            show={id}
            handleClose={hideModal}
            id={id}
          />

          {/* Delete Vehicle Modal */}
          <DeleteVehicleModal
            show={deletedId}
            handleClose={hideDeleteModal}
            id={deletedId}
            onDelete={showDeleteToastMessage}
          />

          {/* Associated Options - Add Form Field / Manage Fuel Pump*/}
        <AddFormField
          show={showFormFieldModal}
          handleClose={hideFormFieldModal}
        />

        <ManageFuelPump
          show={showFormManageModal}
          handleClose={hideFormManageModal}
        />

        <ManageMaintenance
          show={showMaintenanceModal}
          handleClose={hideMaintenancModal}
        />


    </Layout>

  )
}

export default TransportVehicle;