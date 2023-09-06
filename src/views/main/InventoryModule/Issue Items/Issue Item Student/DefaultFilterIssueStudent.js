import React, { useState } from 'react'
import SubHeader from '../../../../../components/ScreensHeader/SubHeader';
import DefaultMappingScreen from '../../../TransportModule/StudentMapping/components/DefaultMappingScreen';
import IssueItemStudentDetails from './IssueItemStudentDetails';

const DefaultFilterIssueStudent = () => {
  const [showEmpolyeeRecords, setShowEmpolyeeRecords] = useState(false);

  return (
    <>
      <SubHeader 
        type='header-filters'
        textLabel='Receipt No.'
        textPlaceholder='Enter receipt no.'
        inputLabel1='Student ID'
        inputPlaceholder1='Enter student id'
        showHeaderFilter={true}
        showSearchButtonRight={false}
        showPrimaryButton={false}
        showHeaderFilterReturn={true}
        showGetRecordButton={true}
        showDefaultScreenHeaderFilter={false}
        showDefaultScreenHeaderFilters={false}
        showTextInput={true}
        showHeaderFilterDate={true}
        widthDateFrom='250px'
        showSelectInputHeader={true}
        selectLabel1='Student Name'
        selectPlaceholder1='----Select student name----'
        getRecords={() => setShowEmpolyeeRecords(!showEmpolyeeRecords)}
      />

      {showEmpolyeeRecords ?
        <div>
          <IssueItemStudentDetails/>
        </div>
        :
        <DefaultMappingScreen
          xtrasubHeading='Enter the Student Details'
          description='Enter the Name, ID, Role Name, etc. of the student to whom you want to issue  item(s).'
          showDefaultScreenHeader={true}
        />}
    </>

  )
}

export default DefaultFilterIssueStudent;