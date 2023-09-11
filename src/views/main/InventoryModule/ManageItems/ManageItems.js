import React, { useState, useEffect } from 'react'
import Layout from '../../../../components/Layouts/Layout';
import SubHeader from '../../../../components/ScreensHeader/SubHeader';
import ExportHeader from '../../../../components/ScreensHeader/ExportHeader';
import axios from 'axios';
import * as XLSX from 'xlsx';
import config from '../../../../config';
//Assets
import PrintImage from '../../../../images/print-icon.svg';
import ExcelImage from '../../../../images/excel-icon.svg';
import AddItems from './components/AddItems';
import AddFormField from '../../TransportModule/TransportRoute/components/AddFormField';
import ManageItemTable from '../../../../components/InventoryTable/ManageItemsTable/ManageItemTable';


const baseURL = config.baseUrl;
let PageSize = 10;
const ManageItems = () => {

  const [showModal, setShowModal] = useState(false);
  const [showFormFieldModal, setShowFormFieldModal ] = useState(false);
  const [record, setrecord] = useState({});
  const [searchinfo, setSearchinfo] = useState('');
  const [totalRecord, settotalRecord] = useState(0);
  const [storelist, setStorelist] = useState([]);
  const [categorylist, setcategorylist] = useState([]);
// console.log({storelist})
  const hideModal = () => {
    setShowModal(false);
  }

  const hideFormFieldModal = () => {
    setShowFormFieldModal(false);
  }

  // RECORD LIST
  const itemList = (offset, limit, value) => {
    limit = (limit!='')?limit:10;
    offset = offset * limit;
    
    const fetchcategoryURL = baseURL +"api/v1/inventory/products";
    axios.get(fetchcategoryURL, {
      params:
        { offset: offset, limit:limit,search:value}
    }).then((resp) => {
      if (resp.data.code == '404')
      {
        setrecord('');
      }
      setrecord(resp.data);
    });

  }

  /* fetch total count */
  const totalRecordCount = (value) => {
    const fetchcategoryURL = baseURL +"api/v1/inventory/productcount";
    axios.get(fetchcategoryURL, {
      params:
        { offset: 0, search:value}
    }).then((resp) => {
      // console.log({ resp });
      if (resp.data.code == '404')
      {
        settotalRecord(0);
      }
      settotalRecord(resp.data);
    });

  }

  const getstoreList = () => {
  const fetchstorelistURL = baseURL +"api/v1/inventory/storelist";
    axios.get(fetchstorelistURL).then((resp) => {
      // console.log({ resp });
      setStorelist(resp.data);
    });
  }
  // category list
const getcategoryList = () => {
  const fetchstorelistURL = baseURL +"api/v1/inventory/storelist";
    axios.get(fetchstorelistURL).then((resp) => {
      // console.log({ resp });
      setcategorylist(resp.data);
    });
  }

 useEffect(() => {
    itemList(0, PageSize, searchinfo);
    totalRecordCount(searchinfo);
   getstoreList();
   getcategoryList();

  }, [searchinfo]);

  return(
    <>
    <Layout type='inventory'>
      <SubHeader
          heading='Manage Products'
          type='header-filters' 
          buttonAdd='Add New Product' 
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
          buttonFormFieldText='Custom Manage Field'
          showGetRecordButton ={true}
          showPrimaryButton ={true}
          showSearchButtonRight={true}
          showDefaultHeaderSelect={true}
          showDefaultHeaderSelect2={true}
          showDefaultHeaderSelect1={false}
          showHeaderFilterReturn={true}
          showAssociateDrop={true}
          searchState={setSearchinfo}
      />
      <ExportHeader
          smallHeading='All Items'
          smallHeding2={'('+totalRecord+' Records)'}
          PrintIcon={PrintImage}
          Excelicon={ExcelImage}
      />
      
        <ManageItemTable
          record={record}
          totalRecord={totalRecord}
          itemList={itemList}
          
        />

      {/* Add Items Modal */}
      <AddItems
        show={showModal}
        handleClose={hideModal}
        storelist={storelist}
        categorylist={categorylist}
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