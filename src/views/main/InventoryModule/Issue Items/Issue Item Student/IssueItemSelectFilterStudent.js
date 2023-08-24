import React from 'react'
import Layout from '../../../../../components/Layouts/Layout';
import SubHeader from '../../../../../components/ScreensHeader/SubHeader';
import DefaultFilterIssueStudent from './DefaultFilterIssueStudent';

const IssueItemSelectFilterStudent = () => {

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
        selectLabel1='Student'
        selectPlaceholder1='----Select student----'
      />
      <DefaultFilterIssueStudent/>
      </Layout>
    </>

  )
}

export default IssueItemSelectFilterStudent;