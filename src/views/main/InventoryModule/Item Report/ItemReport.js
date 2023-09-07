import React, {useState} from 'react'
import Layout from '../../../../components/Layouts/Layout';
import SubHeader from '../../../../components/ScreensHeader/SubHeader';

const ItemReport = () => {

  return(
    <>
    <Layout type='inventory'>
        <SubHeader
          heading='Item Report'
          type='tab-header-filter' 
          buttonAdd='none' 
          showSearchButtonRight={false}
        />
    </Layout>
    </>

  )
}

export default ItemReport;