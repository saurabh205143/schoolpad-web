import React, { useState } from 'react'
import Layout from '../../../../../components/Layouts/Layout';
import SubHeader from '../../../../../components/ScreensHeader/SubHeader';
import ExportHeader from '../../../../../components/ScreensHeader/ExportHeader';

//Assets
import PrintImage from '../../../../../images/print-icon.svg';
import ExcelImage from '../../../../../images/excel-icon.svg';
import ManageStoreTable from '../../../../../components/InventoryTable/ManageStoreTable';
import AddStore from './AddStore';
import MoveItem from './MoveItem';
import StudentListTable from '../../../TransportModule/TransportStopMaster/components/StudentListTable';


const ManageStore = () => {

  const [showModal, setShowModal] = useState(false);
  const [showMoveItemModal, setShowMoveItemModal] = useState(false);
  const [showstudentList, setShowStudentList] = useState(false);

  const hideStudentListModal = () => {
    setShowStudentList(false);
  }

  const hideModal = () => {
    setShowModal(false);
  }

  const hideMoveItemModal = () => {
    setShowMoveItemModal(false);
  }

  return(
    <>
    <Layout type='inventory'>
      <SubHeader
          heading='Manage Stores'
          type='horizontal' 
          buttonAdd='Add New Store'
          buttonOrders='Move Items'  
          searchPlaceholder='Search by store name etc...'
          onClick={() =>  setShowModal(!showModal)}
          buttonOrderDragList={() => setShowMoveItemModal(!showMoveItemModal)}
      />
      <ExportHeader
          smallHeading='All Stores'
          smallHeding2='(202 Records)'
          PrintIcon={PrintImage}
          Excelicon={ExcelImage}
      />
      
      <ManageStoreTable
          onClick={() => setShowStudentList(!showstudentList)}
      />

      {/* <ToasterItem type= 'error'></ToasterItem> */}

      {/* Add Store Modal */}
      <AddStore
          show={showModal}
          handleClose={hideModal}
      />

      {/* Move Items Modal */}
      <MoveItem
          show={showMoveItemModal}
          handleClose={hideMoveItemModal}
      />

      {/* Categories List */}
      <StudentListTable
        show={showstudentList}
        handleClose={hideStudentListModal}
      />
    </Layout>
    </>

  )
}

export default ManageStore;