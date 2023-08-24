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
        inputLabel2='Employee ID'
        inputPlaceholder2='Enter employee id'
        defaultHeaderLabel='Employee Name'
        defaultHeaderPlaceholder='----Select employee name----'
        showHeaderFilter={false}
        showSearchButtonRight={false}
        showPrimaryButton={false}
        showGetRecordButton={true}
        showDefaultHeaderSelect={true}
        showDefaultScreenHeaderFilter={false}
        showDefaultScreenHeaderFilters={false}
        showHeaderFilterReturn={false}
        selectPlaceholder1='----Select staff----'
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