import React, { useState } from 'react'
import SubHeader from '../../../../../../components/ScreensHeader/SubHeader';
import DefaultMappingScreen from '../../../../TransportModule/StudentMapping/components/DefaultMappingScreen';
import ReturnItemStudentDetails from './ReturnItemStudentDetails';


const DefaultFilterReturnStudent = () => {
  const [showEmpolyeeRecords, setShowEmpolyeeRecords] = useState(false);

  return (
    <>
      <SubHeader 
        type='header-filters'
        inputLabel1='Student ID'
        inputPlaceholder1='Enter student id'
        showHeaderFilter={true}
        showSearchButtonRight={false}
        showPrimaryButton={false}
        showHeaderFilterReturn={true}
        showGetRecordButton={true}
        showDefaultScreenHeaderFilter={false}
        showDefaultScreenHeaderFilters={false}
        showSelectInputHeader={true}
        selectLabel1='Student Name'
        selectPlaceholder1='----Select student name----'
        getRecords={() => setShowEmpolyeeRecords(!showEmpolyeeRecords)}
      />

      {showEmpolyeeRecords ?
        <div>
          <ReturnItemStudentDetails/>
        </div>
        :
        <DefaultMappingScreen
          xtrasubHeading='Enter the Student Details'
          description='Enter the Name, ID, Role Name, etc. of student who wants to return the   item(s) issued to them.'
          showDefaultScreenHeader={true}
        />}
    </>

  )
}

export default DefaultFilterReturnStudent;