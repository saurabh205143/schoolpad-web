import React, { useState } from 'react'
import Layout from '../../../../components/Layouts/Layout';
import DefaultMappingScreen from './components/DefaultMappingScreen';
import TestSelect from '../../../../components/Inputs/TestSelect';
import SubHeader from '../../../../components/ScreensHeader/SubHeader';
import ExportHeader from '../../../../components/ScreensHeader/ExportHeader';
import MappingTable from './components/MappingTable';

const StudentMapping = () => {

  const [showRecords, setShowRecords] = useState(false);

  return (
    <Layout>
      {/* <DefaultMappingScreen /> */}
      <SubHeader
        heading='Student Mapping'
        getRecords={() => setShowRecords(!showRecords)}
      />
      {showRecords &&
        <div>
          <ExportHeader
            smallHeading='Students Mapping'
            smallHeding2='(202 Records)'
          />

          <MappingTable />
        </div>
      }
    </Layout>
  )
}

export default StudentMapping;