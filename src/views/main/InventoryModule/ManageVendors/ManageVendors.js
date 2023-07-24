import React, { useState } from 'react'
import Layout from '../../../../components/Layouts/Layout';
import SubHeader from '../../../../components/ScreensHeader/SubHeader';
import ExportHeader from '../../../../components/ScreensHeader/ExportHeader';

//Assets
import PrintImage from '../../../../images/print-icon.svg';
import ExcelImage from '../../../../images/excel-icon.svg';
import ManageVendorsTable from '../../../../components/InventoryTable/ManageVendorsTable/ManageVendorsTable';
import AddVendor from './components/AddVendor';


const ManageVendors = () => {

  const [showModal, setShowModal] = useState(false);
  
  const hideModal = () => {
    setShowModal(false);
  }

  return(
    <>
    <Layout type='inventory'>
      <SubHeader
          heading=' Manage Vendors'
          type='horizontal' 
          buttonAdd='Add New Vendor' 
          onClick={() =>  setShowModal(!showModal)}
          searchPlaceholder='Search by region, gst no...'
      />
      <ExportHeader
          smallHeading='All Vendors'
          smallHeding2='(202 Records)'
          PrintIcon={PrintImage}
          Excelicon={ExcelImage}
      />
      
      <ManageVendorsTable/>

      {/* Add Vendor Modal */}
      <AddVendor
        show={showModal}
        handleClose={hideModal}
      />
    </Layout>
    </>

  )
}

export default ManageVendors;