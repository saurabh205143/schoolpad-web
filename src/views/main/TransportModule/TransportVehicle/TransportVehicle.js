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


const TransportVehicle = () => {
  const [showModal, setShowModal] = useState(false);
  const [showFormFieldModal, setShowFormFieldModal ] = useState(false);
  const [showFormManageModal, setShowFormManageModal ] = useState(false);
  const [showMaintenanceModal, setShowMaintenanceModal ] = useState(false);

  const hideModal = () => {
    setShowModal(false);
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
      onClick={() => setShowModal(!showModal)} 
      formField={() => setShowFormFieldModal(!showFormFieldModal)}
      formManageClick={() => setShowFormManageModal(!showFormManageModal)}
      formMaintenanceClick={() => setShowMaintenanceModal(!showMaintenanceModal)}
      />
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