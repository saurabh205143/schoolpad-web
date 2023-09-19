import React, {useEffect, useState} from 'react'
import Layout from '../../../../components/Layouts/Layout';
import SubHeader from '../../../../components/ScreensHeader/SubHeader';
import ExportHeader from '../../../../components/ScreensHeader/ExportHeader';
import PurchaseOrdersTable from '../../../../components/InventoryTable/PurchaseOrdersTable/PurchaseOrdersTable';

//Assets
import PrintImage from '../../../../images/print-icon.svg';
import ExcelImage from '../../../../images/excel-icon.svg';
import axios from 'axios';
import * as XLSX from 'xlsx';
import config from '../../../../config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToastModals from '../../../../components/Toaster/ToastModals';

const baseURL = config.baseUrl;

  

const PurchaseOrders = () => {
const [record, setrecord] = useState({});
const [searchinfo, setSearchinfo] = useState('');
const [storeList, setStoreList] = useState('');
const [purchaseOrderSearch, setInputOne] = useState('');
const [purchaseOrderfromDate, getFromDate] = useState('');
console.log({purchaseOrderfromDate});
 /* fetch List  */
  const purchaseOrderList = (offset, limit, value,purchaseOrderSearch,purchaseOrderfromDate) => {
    limit = (limit!='')?limit:10;
    offset = offset * limit;
    
    const fetchPOURL = baseURL +"api/v1/inventory/purchaseorders";
    axios.get(fetchPOURL, {
      params:
        { offset: offset, limit: limit, search: value, order_no: purchaseOrderSearch, item_name: '', from: purchaseOrderfromDate,to:'' }
      }).then((resp) => {
      if (resp.data.code == '404')
      {
        setrecord('');
        }
      // settotalRecord(resp.data.total);
      setrecord(resp.data);
    });

  }

  //format date time
  function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
  }
  
  // console.log(formatDate(purchaseOrderfromDate));

  const getRecords = () => { 
    console.log('getSearchParams');
  }
  const storelist = () => {
    const storeListDD = '';
    const fetchStoreURL = baseURL +"api/v1/inventory/stores";
    axios.get(fetchStoreURL, {
      params:
        { offset:0,search:''}
    }).then((resp) => {
      const strelist = resp.data.rows;
      
      strelist.map((lst) => {
        console.log({ lst });
        storeListDD += {'label':lst.storeName,'value':lst.id}
      });
      
    });
    console.log({ storeListDD });
  }
  const poList = (purchaseOrderfromDate != '')?purchaseOrderfromDate:''
  useEffect(() => {
    
    console.log({purchaseOrderfromDate});
    // const formatedPOFromDate = (purchaseOrderfromDate == '' || purchaseOrderfromDate == undefined)?formatDate(purchaseOrderfromDate):'';
    // console.log({formatedPOFromDate});
    storelist();
    purchaseOrderList(0, 10, searchinfo,purchaseOrderSearch,poList);
  }, [searchinfo,purchaseOrderSearch,poList]);
  // console.log({ record });
  return(
    <>
    <Layout type='inventory'>
      <SubHeader
          heading='Manage Purchase Order'
          type='header-filters' 
          linkText='Add New Purchase Order' 
          searchPlaceholder='Search by purchase order no, department etc...'
          inputLabel1='Purchase Order No.'
          inputPlaceholder1='Enter purchase order no.'
          InputOneState={setInputOne}
          inputLabel2='Item Name'
          inputPlaceholder2='Enter item name'
          showHeaderFilterFrom={true}
          getFromDate={getFromDate}
          showHeaderFilterTo={true}
          showSearchButtonRight={true}
          showPrimaryButton={false}
          showLinkButton={true}
          showHeaderFilterReturn={true}
          showDefaultHeaderSelect1={true}
          showGetRecordButton={true}
          getRecords={getRecords}
          widthDateFrom='250px'
          widthDateTo='250px'
          showHeaderFilterHeading={true}
          searchState={setSearchinfo}
          paddingContainer='16px'
      />
      <ExportHeader
          smallHeading='All Purchase Orders'
          smallHeding2={'('+record.total+' Records)'}
          PrintIcon={PrintImage}
          Excelicon={ExcelImage}
      />
      
        <PurchaseOrdersTable
          record={record}
          searchState={searchinfo}
          purchaseOrderList={purchaseOrderList}
        />

    </Layout>
    </>

  )
}

export default PurchaseOrders;