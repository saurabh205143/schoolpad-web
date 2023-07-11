import React, { useState } from 'react'
import Layout from '../../../../../components/Layouts/Layout';
import SubHeader from '../../../../../components/ScreensHeader/SubHeader';
import ExportHeader from '../../../../../components/ScreensHeader/ExportHeader';

//Assets
import PrintImage from '../../../../../images/print-icon.svg';
import ExcelImage from '../../../../../images/excel-icon.svg';
import ManageStoreTable from '../../../../../components/InventoryTable/ManageStoreTable';
import AddStore from './AddStore';

const ManageStore = () => {

  const [showModal, setShowModal] = useState(false);

  const hideModal = () => {
    setShowModal(false);
  }

  return(
    <>
    <Layout>
      <SubHeader
          heading='Manage Stores'
          type='horizontal' 
          buttonAdd='Add New Store'
          buttonOption='Move Items'
          onClick={() =>  setShowModal(!showModal)}
      />
      <ExportHeader
          smallHeading='All Stores'
          smallHeding2='(202 Records)'
          PrintIcon={PrintImage}
          Excelicon={ExcelImage}
      />
      
      <ManageStoreTable/>

      {/* Add Store Modal */}
      <AddStore
          show={showModal}
          handleClose={hideModal}
      />

      {/* Move Items Modal */}
      
    </Layout>
    </>

  )
}

export default ManageStore;