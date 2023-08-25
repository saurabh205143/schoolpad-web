import React, { useState } from 'react'
import SubHeader from '../../../../../components/ScreensHeader/SubHeader';
import IssueItemStaffDetails from './IssueItemStaffDetails';
import DefaultMappingScreen from '../../../TransportModule/StudentMapping/components/DefaultMappingScreen';

const DefaultFilterIssueStaff = () => {
  const [showEmpolyeeRecords, setShowEmpolyeeRecords] = useState(false);

  return (
    <>
      <SubHeader 
        type='header-filters'
        inputLabel1='Receipt No.'
        inputPlaceholder1='Enter purchase order no.'
        inputLabel2='Employee ID'
        inputPlaceholder2='Enter employee id'
        defaultHeaderLabel='Employee Name'
        defaultHeaderPlaceholder='----Select employee name----'
        showHeaderFilter={true}
        showSearchButtonRight={false}
        showPrimaryButton={false}
        showHeaderFilterReturn={true}
        showGetRecordButton={true}
        showDefaultHeaderSelect={true}
        showDefaultScreenHeaderFilter={false}
        showDefaultScreenHeaderFilters={false}
        selectPlaceholder1='----Select staff----'
        getRecords={() => setShowEmpolyeeRecords(!showEmpolyeeRecords)}
      />

      {showEmpolyeeRecords ?
        <div>
          <IssueItemStaffDetails/>
        </div>
        :
        <DefaultMappingScreen
          xtrasubHeading='Enter the Employee Details'
          description='Enter the Name, ID, Role Name, etc. of the staff  to whom you want to issue  item(s).'
          showDefaultScreenHeader={true}
        />}
    </>

  )
}

export default DefaultFilterIssueStaff;