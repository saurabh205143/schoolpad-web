import React, { useState } from 'react'
import Layout from '../../../../components/Layouts/Layout';
import SubHeader from '../../../../components/ScreensHeader/SubHeader';
import ExportHeader from '../../../../components/ScreensHeader/ExportHeader';

//Assets
import PrintImage from '../../../../images/print-icon.svg';
import ExcelImage from '../../../../images/excel-icon.svg';
import AddItems from './components/AddItems';
import AddFormField from '../../TransportModule/TransportRoute/components/AddFormField';
import ManageItemTable from '../../../../components/InventoryTable/ManageItemsTable/ManageItemTable';

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
          inputLabel1='Item Name'
          inputPlaceholder1='Enter item name'
          defaultHeaderLabel2='Select Store'
          defaultHeaderPlaceholder2='----Select Store----'
          defaultHeaderLabel='Select Category'
          defaultHeaderPlaceholder='----Select Category----'
          buttonChangeHistory='Change History'
          showGetRecordButton ={true}
          showPrimaryButton ={true}
          showSearchButtonRight={true}
          showDefaultHeaderSelect={true}
          showDefaultHeaderSelect2={true}
          showDefaultHeaderSelect1={false}
          showHeaderFilterReturn={true}
          showChangeHistoryButton={true}
      />
      <ExportHeader
          smallHeading='All Items'
          smallHeding2='(202 Records)'
          PrintIcon={PrintImage}
          Excelicon={ExcelImage}
      />
      
      <ManageItemTable/>

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