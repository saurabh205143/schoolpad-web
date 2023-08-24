import React from 'react'
import Layout from '../../../../../../components/Layouts/Layout';
import SubHeader from '../../../../../../components/ScreensHeader/SubHeader';
import DefaultFilterReturnStudent from './DefaultFilterReturnStudent';


const ReturnItemSelectFilterStudent = () => {

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
        selectLabel1='Student'
        selectPlaceholder1='----Select student----'
      />
      <DefaultFilterReturnStudent/>
      </Layout>
    </>

  )
}

export default ReturnItemSelectFilterStudent;