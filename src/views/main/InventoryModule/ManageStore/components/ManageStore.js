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
import CategoriesListTable from './CategoriesListTable';
import MoveIcon from '../../../../../images/move-item-icon.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToastModals from '../../../../../components/Toaster/ToastModals';


const ManageStore = () => {

  const [showModal, setShowModal] = useState(false);
  const [showMoveItemModal, setShowMoveItemModal] = useState(false);
  const [showcategoriesList, setShowCategoriesList] = useState(false);

  const hideCategoriesListModal = () => {
    setShowCategoriesList(false);
  }

  const hideModal = () => {
    setShowModal(false);
  }

  const showToastMessage = () => {
    hideModal();
    toast(
      <ToastModals type='successful' message='Store added successfully.' />
    );
  };

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
          leftIcon={MoveIcon}
          searchPlaceholder='Search by store name, store code...'
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
          onClick={() => setShowCategoriesList(!showcategoriesList)}
      />

      {/* Toaster Container */}
      <ToastContainer
        autoClose={4000} 
        position="bottom-center"
        hideProgressBar={true}
        className="toaster-container"
       />

      {/* <ToasterItem type= 'error'></ToasterItem> */}

      {/* Add Store Modal */}
      <AddStore
          show={showModal}
          handleClose={hideModal}
          saveAction={showToastMessage}
      />

      {/* Move Items Modal */}
      <MoveItem
          show={showMoveItemModal}
          handleClose={hideMoveItemModal}
      />

      {/* Categories List */}
      <CategoriesListTable
        show={showcategoriesList}
        handleClose={hideCategoriesListModal}
      />
    </Layout>
    </>

  )
}

export default ManageStore;