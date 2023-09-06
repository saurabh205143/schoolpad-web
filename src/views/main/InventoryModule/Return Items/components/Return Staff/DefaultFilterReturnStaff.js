import React, { useState } from 'react'
import SubHeader from '../../../../../../components/ScreensHeader/SubHeader';
import DefaultMappingScreen from '../../../../TransportModule/StudentMapping/components/DefaultMappingScreen';
import ReturnItemStaffDetails from './ReturnItemStaffDetails';

const DefaultFilterReturnStaff = () => {
  const [showEmpolyeeRecords, setShowEmpolyeeRecords] = useState(false);

  return (
    <>
      <SubHeader 
        type='header-filters'
        inputLabel1='Employee ID'
        inputPlaceholder1='Enter employee id'
        showHeaderFilter={true}
        showSearchButtonRight={false}
        showPrimaryButton={false}
        showHeaderFilterReturn={true}
        showGetRecordButton={true}
        showDefaultScreenHeaderFilter={false}
        showDefaultScreenHeaderFilters={false}
        showSelectInputHeader={true}
        selectLabel1='Employee Name'
        selectPlaceholder1='----Select employee name----'
        getRecords={() => setShowEmpolyeeRecords(!showEmpolyeeRecords)}
      />

      {showEmpolyeeRecords ?
        <div>
          <ReturnItemStaffDetails/>
        </div>
        :
        <DefaultMappingScreen
          xtrasubHeading='Enter the Employee Details'
          description='Enter the Name, ID, Role Name, etc. of the staff  to whom you want to return item(s).'
          showDefaultScreenHeader={true}
        />}
    </>

  )
}

export default DefaultFilterReturnStaff;