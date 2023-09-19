import React from 'react'
import Layout from '../../../../components/Layouts/Layout';
import SubHeader from '../../../../components/ScreensHeader/SubHeader';
import StockReport from './components/StockReport';
import TabHeaderFilterProductReport from './components/TabHeaderFilterProductReport';

const ProductReport = () => {

  return(
    <>
    <Layout type='inventory'>
        <SubHeader
          heading='Product Report'
          type='tab-header-filter' 
          buttonAdd='none' 
          showSearchButtonRight={false}
        />
        <TabHeaderFilterProductReport/>
    </Layout>
    </>
  )
}

export default ProductReport;