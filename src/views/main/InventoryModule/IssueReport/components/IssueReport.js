import React from 'react'
import Layout from '../../../../../components/Layouts/Layout';
import SubHeader from '../../../../../components/ScreensHeader/SubHeader';
import TabHeaderFilterIssueReport from './TabHeaderFilterIssueReport';


const IssueReport = () => {

  return(
    <>
    <Layout type='inventory'>
        <SubHeader
          heading='Issue Report'
          type='tab-header-filter' 
          buttonAdd='none' 
          showSearchButtonRight={false}
        />
        <TabHeaderFilterIssueReport/>
    </Layout>
    </>
  )
}

export default IssueReport;