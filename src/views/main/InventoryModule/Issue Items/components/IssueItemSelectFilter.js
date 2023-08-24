import React from 'react'
import Layout from '../../../../../components/Layouts/Layout';
import SubHeader from '../../../../../components/ScreensHeader/SubHeader';
import DefaultFilterIssueStaff from './DefaultFilterIssueStaff';


const IssueItemSelectFilter = () => {

  return (
    <>
      <Layout type='inventory'>
      <SubHeader
        heading='Issue Item(s)'
        type='vertical' 
        headerDescription='Please select either Staff or Student to issue item(s).'
        showGetRecordButton={false}
        showTextInput={false}
        showDateInput={false}
        showSelectInput1={true}
        selectLabel1='Staff'
        selectPlaceholder1='----Select staff----'
      />
      
      <DefaultFilterIssueStaff/>

      </Layout>
    </>

  )
}

export default IssueItemSelectFilter;