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
          headerDescription='Order new or exhausted items by raising purchase order'
          type='vertical' 
          showHeaderFilter={true}
          showSearchButtonRight={false}
          showPrimaryButton={false}
          showGetRecordButton={false}
          showTextInput={true}
          showTextInput1={true}
          showSelectInput1={true}
          showSelectInput2={true}
          showSelectInput3={true}
          showDateInput={true}
          textLabel='Purchase Order No.'
          textPlaceholder='Enter purchase order no'
          textLabel1='Remark'
          textPlaceholder1='Enter remark here'
          dateLabel='Date'
          datePlaceholder='DD/MM/YY'
          rightIcon={RightIcon}
          selectLabel1='Department'
          selectPlaceholder1='----Select department----'
          selectLabel2='Store'
          selectPlaceholder2='----Select store----'
          selectLabel3='Category'
          selectPlaceholder3='----Select category----'
      />

      {/* Add Purchase Table*/}
      <AddPurchaseTable/>

    </Layout>
    </>

  )
}

export default AddPurchaseOrder;