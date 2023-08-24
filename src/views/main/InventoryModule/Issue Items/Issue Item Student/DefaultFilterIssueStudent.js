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
        inputLabel1='Receipt No.'
        inputPlaceholder1='Enter purchase order no.'
        inputLabel2='Student ID'
        inputPlaceholder2='Enter student id'
        defaultHeaderLabel='Student Name'
        defaultHeaderPlaceholder='----Select student name----'
        showHeaderFilter={true}
        showSearchButtonRight={false}
        showHeaderFilterReturn={true}
        showPrimaryButton={false}
        showGetRecordButton={true}
        showDefaultHeaderSelect={true}
        showDefaultScreenHeaderFilter={false}
        showDefaultScreenHeaderFilters={false}
        selectPlaceholder1='----Select staff----'
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