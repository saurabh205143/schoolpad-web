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
          inputLabel5='GRN No.'
          inputLabel6='Status'
          inputLabel7='Item Name'
          inputLabel8='Vendors'
          inputPlaceholder5='Enter grn no.'
          inputPlaceholder6='Enter status'
          inputPlaceholder7='Enter item name'
          inputPlaceholder8='Enter vendors'
          showPrimaryButton={false}
          showHeaderFilterFrom={true}
          showHeaderFilterTo={true}
          showHeaderFilterRecordBoxNew={true}
          showGetRecordButton ={true}
          showSearchButtonRight={true}
          showHeaderFilterHeading={true}
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