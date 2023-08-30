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
import AddCategories from './AddCategories';
import ManageCategoriesTable from '../../../../../components/InventoryTable/ManageCategoriesTable/ManageCategoriesTable';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToastModals from '../../../../../components/Toaster/ToastModals';
const baseURL = config.baseUrl;

const ManageCategories = () => {

  const [showModal, setShowModal] = useState(false);
  const [record, setrecord] = useState({});
  const [searchinfo, setSearchinfo] = useState('');
  const [totalRecord, settotalRecord] = useState(0);
  const hideModal = () => {
    setShowModal(false);
  }

  const categoryList = (offset,limit,value) => {
    limit = (limit!='')?limit:10;
    offset = offset * limit;
    
    const fetchstoreURL = baseURL +"api/v1/inventory/category";
    axios.get(fetchstoreURL, {
      params:
        { offset: offset, limit:limit,search:value}
    }).then((resp) => {
      setrecord(resp.data);
    });
  }

  const totalRecordCount = (value) => { 
    const fetchCountstoreURL = baseURL +"api/v1/inventory/categorycount";
    axios.get(fetchCountstoreURL, {
      params:
        { offset: 0, limit:0,search:value}
    }).then((resp) => {
      settotalRecord(resp.data)
    });

  }

  useEffect(() => {
    categoryList(0, 10, '');
    totalRecordCount('');
    // storemanagerList();
    // exportData(searchinfo);
    // totalRecordCount(searchinfo);

  }, ['']);

  return(
    <>
    <Layout type='inventory'>
      <SubHeader
          heading='Manage Categories'
          type='horizontal' 
          buttonAdd='Add New Category' 
          onClick={() =>  setShowModal(!showModal)}
          searchPlaceholder='Search by Category code, categories...'
      />
        <ExportHeader
          smallHeading='All Categories'
          smallHeding2={'( '+totalRecord+' Records }' }
          PrintIcon={PrintImage}
          Excelicon={ExcelImage}
      />
      
        <ManageCategoriesTable
          record={record}
          totalRecord={totalRecord}
        />

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