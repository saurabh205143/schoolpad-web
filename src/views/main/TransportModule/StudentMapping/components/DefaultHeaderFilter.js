import React, { useState } from 'react'
import SubHeader from '../../../../../components/ScreensHeader/SubHeader';
import DefaultMappingScreen from './DefaultMappingScreen';
import IssueItemStaffDetails from '../../../InventoryModule/Issue Items/components/IssueItemStaffDetails';
import ReturnItemStaffDetails from '../../../InventoryModule/Return Items/components/Return Staff/ReturnItemStaffDetails';


const DefaultHeaderFilter = () => {
  const [showEmpolyeeRecordsIssue, setShowEmpolyeeRecordsIssue] = useState(false);
  const [showEmpolyeeRecordsReturn, setShowEmpolyeeRecordsReturn] = useState(false);

  const toggleEmployeeRecords = () => {
      setShowEmpolyeeRecordsIssue(!showEmpolyeeRecordsIssue);
      setShowEmpolyeeRecordsReturn(!showEmpolyeeRecordsReturn);
  };

  return (
    <>
      <SubHeader type='header-filters'
        inputLabel1='Receipt No.'
        inputPlaceholder1='Enter purchase order no.'
        inputLabel2='Employee ID'
        inputPlaceholder2='Enter employee id'
        defaultHeaderLabel='Employee Name'
        defaultHeaderPlaceholder='----Select employee name----'
        showHeaderFilter={true}
        showSearchButtonRight={false}
        showPrimaryButton={false}
        showGetRecordButton={true}
        showDefaultHeaderSelect={true}
        showDefaultScreenHeaderFilter={false}
        showDefaultScreenHeaderFilters={false}
        selectPlaceholder1='----Select staff----'
        getRecords={toggleEmployeeRecords}
        />

        {showEmpolyeeRecordsIssue && (
            <div>
                <IssueItemStaffDetails/>
            </div>
        )}

        {showEmpolyeeRecordsReturn && (
            <div>
                <ReturnItemStaffDetails/>
            </div>
        )}

        {!showEmpolyeeRecordsIssue && !showEmpolyeeRecordsReturn && (
            <DefaultMappingScreen
                xtrasubHeading='Enter the Employee Details'
                description='Enter the Name, ID, Role Name, etc. of the staff to whom you want to issue item(s).'
                showDefaultScreenHeader={true}
            />
        )}
    </>

  )
}

export default DefaultHeaderFilter;