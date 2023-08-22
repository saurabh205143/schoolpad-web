import React, { useState } from 'react'
import Layout from '../../../../../components/Layouts/Layout';
import SubHeader from '../../../../../components/ScreensHeader/SubHeader';
import DefaultMappingScreen from '../../../TransportModule/StudentMapping/components/DefaultMappingScreen';

const IssueItemSelectFilter = () => {

  const [showRecords, setShowRecords] = useState(false);

  return (
    <>
      <Layout type='inventory'>
      <SubHeader
        heading='Issue Item(s)'
        type='vertical' 
        headerDescription='Please select either Staff or Student to issue item(s).'
        showGetRecordButton={true}
        showTextInput={false}
        showDateInput={false}
        showSelectInput1={true}
        selectLabel1='Staff'
        selectPlaceholder1='----Select staff----'
        getRecords={() => setShowRecords(!showRecords)}
      />

      <DefaultMappingScreen
        xtrasubHeading='Enter the Employee Details'
        description='Enter the Name, ID, Role Name, etc. of the staff  to whom you want to issue  item(s).'
        showDefaultScreenHeader={true}
      />

      </Layout>
    </>

  )
}

export default IssueItemSelectFilter;