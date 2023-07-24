import React from 'react'
import Layout from '../../../../components/Layouts/Layout';
import SubHeader from '../../../../components/ScreensHeader/SubHeader';
import ExportHeader from '../../../../components/ScreensHeader/ExportHeader';
import PurchaseOrdersTable from '../../../../components/InventoryTable/PurchaseOrdersTable/PurchaseOrdersTable';

//Assets
import PrintImage from '../../../../images/print-icon.svg';
import ExcelImage from '../../../../images/excel-icon.svg';

const PurchaseOrders = () => {

  return(
    <>
    <Layout type='inventory'>
      <SubHeader
          heading='Manage Purchase Order'
          type='header-filters' 
          buttonAdd='Add New Purchase Order' 
          searchPlaceholder='Search by purchase order no, department etc...'
          inputLabel1='Purchase Order No.'
          inputPlaceholder1='Enter purchase order no.'
          inputLabel2='Item Name'
          inputPlaceholder2='Enter item name'
          showHeaderFilter={true}
          showSearchButtonRight={true}
          showPrimaryButton={true}
      />
      <ExportHeader
          smallHeading='All Purchase Orders'
          smallHeding2='(202 Records)'
          PrintIcon={PrintImage}
          Excelicon={ExcelImage}
      />
      
      <PurchaseOrdersTable/>

      {/* Add Purchase Page */}


    </Layout>
    </>

  )
}

export default PurchaseOrders;