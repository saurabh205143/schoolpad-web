import React, { useState } from 'react'
import Layout from '../../../../../components/Layouts/Layout';
import SubHeader from '../../../../../components/ScreensHeader/SubHeader';
import ExportHeader from '../../../../../components/ScreensHeader/ExportHeader';

//Assets
import PrintImage from '../../../../../images/print-icon.svg';
import ExcelImage from '../../../../../images/excel-icon.svg';
import AddCategories from './AddCategories';
import ManageCategoriesTable from '../../../../../components/InventoryTable/ManageCategoriesTable/ManageCategoriesTable';

const ManageCategories = () => {

  const [showModal, setShowModal] = useState(false);
  
  const hideModal = () => {
    setShowModal(false);
  }

  return(
    <>
    <Layout type='inventory'>
      <SubHeader
          heading='Manage Categories'
          type='horizontal' 
          buttonAdd='Add New Category' 
          onClick={() =>  setShowModal(!showModal)}
          searchPlaceholder='Search by store code, categories...'
      />
      <ExportHeader
          smallHeading='All Categories'
          smallHeding2='(202 Records)'
          PrintIcon={PrintImage}
          Excelicon={ExcelImage}
      />
      
      <ManageCategoriesTable/>

      {/* Add Categories Modal */}
      <AddCategories
          show={showModal}
          handleClose={hideModal}
      />
      
    </Layout>
    </>

  )
}

export default ManageCategories;