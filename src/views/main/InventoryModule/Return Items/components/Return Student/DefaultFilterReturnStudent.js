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
        inputLabel2='Student ID'
        inputPlaceholder2='Enter student id'
        defaultHeaderLabel='Student Name'
        defaultHeaderPlaceholder='----Select student name----'
        showHeaderFilter={false}
        showSearchButtonRight={false}
        showPrimaryButton={false}
        showGetRecordButton={true}
        showDefaultHeaderSelect={true}
        showDefaultScreenHeaderFilter={false}
        showDefaultScreenHeaderFilters={false}
        showHeaderFilterReturn={false}
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