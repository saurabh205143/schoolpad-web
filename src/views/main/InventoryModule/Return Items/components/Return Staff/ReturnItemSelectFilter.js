import React from 'react'
import Layout from '../../../../../../components/Layouts/Layout';
import SubHeader from '../../../../../../components/ScreensHeader/SubHeader';
import DefaultFilterReturnStaff from './DefaultFilterReturnStaff';

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
      <DefaultFilterReturnStaff/>
      </Layout>
    </>

  )
}

export default ReturnItemSelectFilter;