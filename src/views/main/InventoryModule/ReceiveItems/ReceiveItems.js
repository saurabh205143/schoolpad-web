import React from 'react'
import Layout from '../../../../components/Layouts/Layout';
import SubHeader from '../../../../components/ScreensHeader/SubHeader';
import ExportHeader from '../../../../components/ScreensHeader/ExportHeader';
import ReceiveItemTable from '../../../../components/InventoryTable/ReceiveItemTable/ReceiveItemTable';

//Assets
import PrintImage from '../../../../images/print-icon.svg';
import ExcelImage from '../../../../images/excel-icon.svg';

const ReceiveItems = () => {

  return(
    <>
    <Layout type='inventory'>
      <SubHeader
          heading='Receive Items/GRN'
          type='header-filters' 
          buttonAdd='none' 
          searchPlaceholder='Search by purchase order no, department etc...'
          inputLabel1='GRN No.'
          inputLabel2='Status'
          inputLabel3='Item Name'
          inputLabel4='Vendors'
          inputPlaceholder1='Enter grn no.'
          inputPlaceholder2='Enter status'
          inputPlaceholder3='Enter item name'
          inputPlaceholder4='Enter vendors'
          showHeaderFilter={true}
          showSearchButtonRight={true}
          showPrimaryButton={false}
          showReceiveHeaderFilter={true}
          showReceiveHeaderFilter1={true}
          showGetRecordButton={true}
      />
      <ExportHeader
          smallHeading='All Purchase Orders'
          smallHeding2='(202 Records)'
          PrintIcon={PrintImage}
          Excelicon={ExcelImage}
      />
      
      <ReceiveItemTable/>

      {/* Approve/Reject */}


    </Layout>
    </>

  )
}

export default ReceiveItems;