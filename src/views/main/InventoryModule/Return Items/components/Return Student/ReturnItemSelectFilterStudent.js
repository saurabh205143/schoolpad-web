import React from 'react'
import Layout from '../../../../../../components/Layouts/Layout';
import SubHeader from '../../../../../../components/ScreensHeader/SubHeader';
import DefaultFilterReturnStudent from './DefaultFilterReturnStudent';


const ReturnItemSelectFilterStudent = () => {

  return (
    <>
      <Layout type='inventory'>
      <SubHeader
        heading='Return Product(s)'
        type='vertical' 
        headerDescription='Please select either Staff or Student to return products.'
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