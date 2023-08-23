import React, { useState } from 'react'
import Layout from '../../../../../../components/Layouts/Layout';
import SubHeader from '../../../../../../components/ScreensHeader/SubHeader';
import DefaultHeaderFilter from '../../../../TransportModule/StudentMapping/components/DefaultHeaderFilter';

const ReturnItemSelectFilter = () => {

  return (
    <>
      <Layout type='inventory'>
      <SubHeader
        heading='Return Item(s)'
        type='vertical' 
        headerDescription='Please select either Staff or Student to return item(s).'
        showGetRecordButton={false}
        showTextInput={false}
        showDateInput={false}
        showSelectInput1={true}
        selectLabel1='Staff'
        selectPlaceholder1='----Select staff----'
      />
      
      <DefaultHeaderFilter/>

      </Layout>
    </>

  )
}

export default ReturnItemSelectFilter;