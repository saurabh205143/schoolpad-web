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
const [purchaseOrder, setInputOne] = useState('');
console.log({purchaseOrder});
 /* fetch List  */
  const purchaseOrderList = (offset, limit, value,purchaseOrder) => {
    limit = (limit!='')?limit:10;
    offset = offset * limit;
    
    const fetchPOURL = baseURL +"api/v1/inventory/purchaseorders";
    axios.get(fetchPOURL, {
      params:
        { offset: offset, limit: limit, search: value, order_no: purchaseOrder, item_name: '', from: '' }
      }).then((resp) => {
      if (resp.data.code == '404')
      {
        setrecord('');
        }
      // settotalRecord(resp.data.total);
      setrecord(resp.data);
    });

  }
  
  useEffect(() => {
    // console.log({searchinfo});
    purchaseOrderList(0, 10, searchinfo,purchaseOrder);
  }, [searchinfo]);
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
          inputPlaceholder1='Enter purchase order no. ss'
          InputOneState={setInputOne}
          inputLabel2='Item Name'
          inputPlaceholder2='Enter item name'
          showHeaderFilterFrom={true}
          showHeaderFilterTo={true}
          showSearchButtonRight={true}
          showPrimaryButton={false}
          showLinkButton={true}
          showHeaderFilterReturn={true}
          showDefaultHeaderSelect1={true}
          showGetRecordButton ={true}
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