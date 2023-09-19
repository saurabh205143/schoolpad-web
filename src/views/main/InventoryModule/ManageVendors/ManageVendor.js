import React, { useState, useEffect } from 'react'
import Layout from '../../../../components/Layouts/Layout';
import SubHeader from '../../../../components/ScreensHeader/SubHeader';
import ExportHeader from '../../../../components/ScreensHeader/ExportHeader';

//Assets
import PrintImage from '../../../../images/print-icon.svg';
import ExcelImage from '../../../../images/excel-icon.svg';
import AddVendor from './components/AddVendor';
import axios from 'axios';
import * as XLSX from 'xlsx';
import config from '../../../../config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToastModals from '../../../../components/Toaster/ToastModals';
import ManageVendorTable from '../../../../components/InventoryTable/ManageVendorsTable/ManageVendorTable';

const baseURL = config.baseUrl;
let PageSize = 10;

const ManageVendor = () => {

  const [showModal, setShowModal] = useState(false);
  const [record, setrecord] = useState({});
  const [searchinfo, setSearchinfo] = useState('');
  const [totalRecord, settotalRecord] = useState(0);

  // console.log({searchinfo})
  const hideModal = () => {
    setShowModal(false);
  }

  /* fetch List  */
  const vendorList = (offset, limit, value) => {
    limit = (limit!='')?limit:10;
    offset = offset * limit;
    
    const fetchcategoryURL = baseURL +"api/v1/inventory/vendor";
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
    const fetchcategoryURL = baseURL +"api/v1/inventory/vendorcount";
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

  const showToastMessage = () => {
    hideModal();
    toast(
      <ToastModals type='successful' message='Your have Added Vendor successfully.' />
    );
};

const showDeleteToastMessage = () => {
  // hideDeleteModal();
  toast(
    <ToastModals type='successful' message='Your have deleted Vendor successfully.' />
  );
};

const previewRecord = () => {
    window.open("/vendorpreview?params="+searchinfo, "_blank")
  }


  const exportStore = () => {
    // exportData();
    vendorList(0, '', searchinfo);
    const getData = record.map(row => {
      const rowData = {};
      rowData['Vendor Name'] = row.vendorName;
      rowData['Vendor Code'] = row.vendorCode;
      rowData['Store Name'] = row.storeName;
      rowData['Region'] = row.region;
      rowData['Address'] = row.address;
      rowData['ContactNo.'] = row.contactNo;
      rowData['GST No.'] = row.tinNo;
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
    const excelFileName = 'vendor_list_export_' + currentDate;
    const link = document.createElement('a');
    link.href = url;
    link.download = excelFileName+'.xlsx';
    link.click();

    URL.revokeObjectURL(url);
  }

  useEffect(() => {
    vendorList(0, PageSize, searchinfo);
    totalRecordCount(searchinfo);
    // getstoreList();

  }, [searchinfo]);


  return(
    <>
    <Layout type='inventory'>
      <SubHeader
          heading=' Manage Vendors'
          type='horizontal' 
          buttonAdd='Add New Vendor' 
          onClick={() => setShowModal(!showModal)}
          searchState={setSearchinfo}
          searchPlaceholder='Search by Vendor Name, Vendor Code,gst no...'
      />
      <ExportHeader
          smallHeading='All Vendors'
          smallHeding2={'(' + totalRecord + ' Records)'}
          PrintIcon={PrintImage}
          onPreview={() => previewRecord()}
          Excelicon={ExcelImage}          
          onClick={() => exportStore()}
      />
      
        <ManageVendorTable
          record={record}
          totalRecord={totalRecord}
          vendorList={vendorList}
          showDeleteToastMessage={showDeleteToastMessage}
        />

      {/* Add Vendor Modal */}
      <AddVendor
        show={showModal}
        handleClose={hideModal}
      />
    </Layout>
    </>

  )
}

export default ManageVendor;