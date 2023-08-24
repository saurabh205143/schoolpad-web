import React, { useState, useEffect } from 'react'
import Layout from '../../../../../components/Layouts/Layout';
import SubHeader from '../../../../../components/ScreensHeader/SubHeader';
import ExportHeader from '../../../../../components/ScreensHeader/ExportHeader';
import axios from 'axios';
import config from '../../../../../config';
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
const baseURL = config.baseUrl;

const ManageStore = () => {

  const [showModal, setShowModal] = useState(false);
  const [showMoveItemModal, setShowMoveItemModal] = useState(false);
  const [showcategoriesList, setShowCategoriesList] = useState(false);
  const [searchinfo, setSearchinfo] = useState('');
  const [totalRecord, settotalRecord] = useState(0);
  const [record, setrecord] = useState({});
  const [storeid, setstoreid] = useState(0);

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
  
  const searchData = (value) => {
    setSearchinfo(value);
    // console.log({offset});
    // const fetchstoreURL = baseURL +"api/v1/inventory/store";
    // axios.get(fetchstoreURL, {
    //   params:
    //     { offset: 0, limit:10,search:value}
    // }).then((resp) => {
    //   // console.log(resp);
    //   setrecord(resp.data);
    // });
        // console.log(value);
  }

  const totalRecordCount = (value) => { 
    const fetchCountstoreURL = baseURL +"api/v1/inventory/storecount";
    axios.get(fetchCountstoreURL, {
      params:
        { offset: 0, limit:0,search:value}
    }).then((resp) => {
      settotalRecord(resp.data)
    });

  }
  // console.log({totalRecord});
  useEffect(() => {
    searchData(searchinfo);
    totalRecordCount(searchinfo);
  }, [searchinfo]);

// console.log({ searchData });
  return(
    <>
    <Layout type='inventory'>
      <SubHeader
          heading='Manage Stores'
          type='horizontal' 
          buttonAdd='Add New Store'
          buttonOrders='Move Items'  
          leftIcon={MoveIcon}
          searchPlaceholder='Search by store name, store code'
          searchState={setSearchinfo}
          onClick={() =>  setShowModal(!showModal)}
          buttonOrderDragList={() => setShowMoveItemModal(!showMoveItemModal)}
      />
        <ExportHeader
          smallHeading='All Stores'
          smallHeding2={ "( " + totalRecord+" Records )"}
          PrintIcon={PrintImage}
          Excelicon={ExcelImage}
      />
      
      <ManageStoreTable
          onClick={() => setShowCategoriesList(!showcategoriesList)}
          totalRecord={totalRecord}
          searchinfo={record}
          searchState={searchinfo}
          searchData={searchData}
          setstoreid={setstoreid}
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
        setstoreid={storeid}
      />
    </Layout>
    </>

  )
}

export default ManageStore;