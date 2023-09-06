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
        textLabel='Receipt No.'
        textPlaceholder='Enter receipt no.'
        inputLabel1='Employee ID'
        inputPlaceholder1='Enter employee id'
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
        selectLabel1='Employee Name'
        selectPlaceholder1='----Select employee name----'
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