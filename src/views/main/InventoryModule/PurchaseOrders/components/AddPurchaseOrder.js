import React from 'react'
import Layout from '../../../../../components/Layouts/Layout';
import SubHeader from '../../../../../components/ScreensHeader/SubHeader';

//Assets
import RightIcon from '../../../../../images/date-icon.svg';
import AddPurchaseTable from './AddPurchaseTable';

const AddPurchaseOrder = () => {

  return(
    <>
    <Layout type='inventory'>
      <SubHeader
          heading='Add Purchase Order'
          headerDescription='Please select the type of data on which you want to add mapping below. You can choose class wise, route wise, admission number wise etc'
          type='vertical' 
          showHeaderFilter={true}
          showSearchButtonRight={false}
          showPrimaryButton={false}
          showGetRecordButton={false}
          showTextInput={true}
          showTextInput1={true}
          showSelectInput1={true}
          showSelectInput2={false}
          showSelectInput3={false}
          showDateInputField={true}
          textLabel='Purchase Order No.'
          textPlaceholder='Enter purchase order no'
          textLabel1='Remark'
          textPlaceholder1='Enter remark here'
          selectLabel1='Department'
          selectPlaceholder1='----Select department----'
          widthDateFrom='250px'
      />

      {/* Add Purchase Table*/}
      <AddPurchaseTable/>

    </Layout>
    </>

  )
}

export default AddPurchaseOrder;