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
let PageSize = 10;
const ManageCategories = () => {

  const [showModal, setShowModal] = useState(false);
  const [record, setrecord] = useState({});
  const [searchinfo, setSearchinfo] = useState('');
  const [totalRecord, settotalRecord] = useState(0);
  const [Storelist, setStorelist] = useState([]);

  const hideModal = () => {
    setShowModal(false);
  }
  // console.log({ searchinfo });
  const categoryList = (offset, limit, value) => {
    // console.log({ limit });
    limit = (limit!='')?limit:10;
    offset = offset * limit;
    
    const fetchcategoryURL = baseURL +"api/v1/inventory/category";
    axios.get(fetchcategoryURL, {
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

  const getstoreList = () => {
  const fetchstorelistURL = baseURL +"api/v1/inventory/storelist";
    axios.get(fetchstorelistURL).then((resp) => {
      // console.log({ resp });
      setStorelist(resp.data);
    });
  }

  useEffect(() => {
    categoryList(0, PageSize, searchinfo);
    totalRecordCount(searchinfo);
    getstoreList();
    // exportData(searchinfo);
    // totalRecordCount(searchinfo);

  }, [searchinfo]);

  return(
    <>
    <Layout type='inventory'>
      <SubHeader
          heading='Manage Categories'
          type='horizontal' 
          buttonAdd='Add New Category' 
          onClick={() => setShowModal(!showModal)}
          searchState={setSearchinfo}
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
          categoryList={categoryList}
        />

      {/* Add Categories Modal */}
      <AddCategories
          show={showModal}
          Storelist={Storelist}
          handleClose={hideModal}
      />
      
    </Layout>
    </>

  )
}

export default ManageCategories;