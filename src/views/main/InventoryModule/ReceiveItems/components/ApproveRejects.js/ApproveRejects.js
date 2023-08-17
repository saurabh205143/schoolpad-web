import React from 'react'
import Layout from '../../../../../../components/Layouts/Layout';
import SubHeader from '../../../../../../components/ScreensHeader/SubHeader';

const ApproveRejects = () => {

  return (
    <>
      <Layout type="transport">
        <SubHeader
          heading='Approve/Reject GRN'
          type='vertical'
          headerDescription='Please select the type of data on which you want to add mapping below. You can choose class wise, route wise, admission number wise etc'
        />

        {/* Approve/Reject */}
      </Layout>
    </>

  )
}

export default ApproveRejects;