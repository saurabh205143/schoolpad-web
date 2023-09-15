import React, {useState} from 'react'
import SubHeader from '../../../../../../components/ScreensHeader/SubHeader';
import ExportHeader from '../../../../../../components/ScreensHeader/ExportHeader';
import DefaultMappingScreen from '../../../../TransportModule/StudentMapping/components/DefaultMappingScreen';

//Assests 
import PrintImage from '../../../../../../images/print-icon.svg';
import ExcelImage from '../../../../../../images/excel-icon.svg';
import StaffFilterTable from './StaffFilterTable';
import CustomModalIssueReport from '../CustomModalIssueReport';


const StaffFilter = () => {

  const [showReportRecords, setShowReportRecords] = useState(false);
  const [showCustomFilterModal, setShowCustomFilterModal] = useState();

  const hideModal = () => {
      setShowCustomFilterModal(false);
  }
  return(
    <>
        <SubHeader
          type='tab-header-filter' 
          multiselectLabel3='Employee Name'
          multiselectPlaceholder3='----Select employee name----'
          selectLabelTab='Store'
          selectPlaceholderTab='----Select store----'
          multiselectLabel='Select Category'
          multiselectPlaceholder='----Select category----'
          multiselectLabel1='Select Product'
          multiselectPlaceholder1='----Select product----'
          widthDateLabel1='Date From'
          widthDateLabel2='Date To'
          multiselectLabel4='Select Purpose'
          multiselectPlaceholder4='----Select Purpose----'
          buttonOption={true}
          showTabSelectInput={true}
          showTabSelectInput1={false}
          showMultiSelectTab1={true}
          showMultiSelectTab2={true}
          showMultiSelectTab3={true}
          showDateTabFrom={true}
          showDateTabTo={true}
          showMultiSelectTab4={true}
          showGetRecordButton={true}
          getRecords={() => setShowReportRecords(!showReportRecords)}
          getCustomField={() => setShowCustomFilterModal(!showCustomFilterModal)}
        />

      {showReportRecords ?
        <div>
          <ExportHeader
            smallHeading='List of Products'
            smallHeding2='(07 Records)'
            PrintIcon={PrintImage}
            Excelicon={ExcelImage}
        />
        <StaffFilterTable/>
        </div>
        :
        <DefaultMappingScreen
          xtrasubHeading='Select the Report Filters'
          description='Select the Employee Name(s), Store, Category, Product, Date, Purpose, etc. to view Staff Issue report.'
          showDefaultScreenHeader={true}
        />}

        <CustomModalIssueReport
          show={showCustomFilterModal}
          handleClose={hideModal}
        />
    </>
  )
}

export default StaffFilter;