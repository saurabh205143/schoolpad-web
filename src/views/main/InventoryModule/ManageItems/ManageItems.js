import React, { useState } from 'react'
import Layout from '../../../../components/Layouts/Layout';
import SubHeader from '../../../../components/ScreensHeader/SubHeader';
import ExportHeader from '../../../../components/ScreensHeader/ExportHeader';

//Assets
import PrintImage from '../../../../images/print-icon.svg';
import ExcelImage from '../../../../images/excel-icon.svg';
import ManageItemsTable from '../../../../components/InventoryTable/ManageItemsTable/ManageItemsTable';
import AddItems from './components/AddItems';
import AddFormField from '../../TransportModule/TransportRoute/components/AddFormField';

const ManageItems = () => {

  const [showModal, setShowModal] = useState(false);
  const [showFormFieldModal, setShowFormFieldModal ] = useState(false);
  
  const hideModal = () => {
    setShowModal(false);
  }

  const hideFormFieldModal = () => {
    setShowFormFieldModal(false);
  }

  return(
    <>
    <Layout type='inventory'>
      <SubHeader
          heading='Manage Items'
          type='header-filters' 
          buttonAdd='Add New Items' 
          buttonOption='Associated Options'
          onClick={() =>  setShowModal(!showModal)}
          searchPlaceholder='Search by item name, purchase cost, etc...'
          formField={() => setShowFormFieldModal(!showFormFieldModal)}
          inputLabel1='Select Store'
          inputPlaceholder1='Select Store'
          inputLabel2='Select Category'
          inputPlaceholder2='Select Category'
          inputLabel3='Item Name'
          inputPlaceholder3='Enter item name'
          showGetRecordButton ={true}
          showPrimaryButton ={true}
          showSearchButtonRight={true}
      />
      <ExportHeader
          smallHeading='All Items'
          smallHeding2='(202 Records)'
          PrintIcon={PrintImage}
          Excelicon={ExcelImage}
      />
      
      <ManageItemsTable/>

      {/* Add Items Modal */}
      <AddItems
        show={showModal}
        handleClose={hideModal}
      />

      {/* Associated Options - Add Form Field */}
      <AddFormField
        show={showFormFieldModal}
        handleClose={hideFormFieldModal}
      />
    </Layout>
    </>

  )
}

export default ManageItems;