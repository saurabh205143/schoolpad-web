import React, { useState, useEffect } from 'react'
import Layout from '../../../../../components/Layouts/Layout';
import SubHeader from '../../../../../components/ScreensHeader/SubHeader';
import ExportHeader from '../../../../../components/ScreensHeader/ExportHeader';
import axios from 'axios';
import * as XLSX from 'xlsx';
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
  const [vendorList, setvendorList] = useState({});
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
  
  const searchData = (offset,limit,value) => {
    limit = (limit!='')?limit:10;
    offset = offset * limit;
    
    const fetchstoreURL = baseURL +"api/v1/inventory/store";
    axios.get(fetchstoreURL, {
      params:
        { offset: offset, limit:limit,search:value}
    }).then((resp) => {
      // console.log({resp})
      setrecord(resp.data);
    });
  }

  const exportStore = () => {
    // exportData();
    searchData(0, '', searchinfo);
    const getData = record.map(row => {
      const rowData = {};
      rowData['Store Name'] = row.storeName;
      rowData['Store Manager'] = row.storeManager;
      rowData['Store Code'] = row.storeCode;
      rowData['Store Categories Count'] = (row.categorycount == 0)?'-':row.categorycount;
      rowData['Store Code'] = row.storeCode;
      rowData['Store Description'] = row.storeDesc;
      return rowData;
    });
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(getData);
    const columnWidths = [
    { wpx: 100 },
    { wpx: 200 }, 
    { wpx: 150 }, 
    ];

    ws['!cols'] = columnWidths;
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    const blob = new Blob([XLSX.write(wb, { bookType: 'xlsx', type: 'buffer' })], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

    const url = URL.createObjectURL(blob);
    let currentDate = new Date().toJSON();
    const excelFileName = 'store_list_export_' + currentDate;
    const link = document.createElement('a');
    link.href = url;
    link.download = excelFileName+'.xlsx';
    link.click();

    URL.revokeObjectURL(url);
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

   const storemanagerList = () => {
        const fetchvendorURL = baseURL +"api/v1/inventory/vendorlist";
        axios.get(fetchvendorURL)
        .then((resp) => {
          var dta = resp.data;
          setvendorList(resp.data);
        });
        
    };

  // preview for print

  const previewRecord = () => {
    window.open("/storepreview?params="+searchinfo, "_blank")
  }
  // console.log({totalRecord});
  useEffect(() => {
    searchData(0, 10, searchinfo);
    storemanagerList();
    // exportData(searchinfo);
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
          onPreview={() => previewRecord()}
          Excelicon={ExcelImage}
          onClick={() => exportStore()}
      />
      
      <ManageStoreTable
          onClick={() => setShowCategoriesList(!showcategoriesList)}
          totalRecord={totalRecord}
          searchinfo={record}
          searchState={searchinfo}
          searchData={searchData}
          setstoreid={setstoreid}
          vendorList={vendorList}
      />

      {/* Toaster Container */}
      <ToastContainer
        autoClose={1000} 
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
          vendorList={vendorList}
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
        storeid={storeid}
        setstoreid={setstoreid}
      />
    </Layout>
    </>

  )
}

export default ManageStore;