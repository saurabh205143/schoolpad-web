import React, {useState} from 'react'
import SubHeader from '../../../../../../components/ScreensHeader/SubHeader';
import ExportHeader from '../../../../../../components/ScreensHeader/ExportHeader';
import DefaultMappingScreen from '../../../../TransportModule/StudentMapping/components/DefaultMappingScreen';


//Assests 
import PrintImage from '../../../../../../images/print-icon.svg';
import ExcelImage from '../../../../../../images/excel-icon.svg';
import StudentFilterTable from './StudentFilterTable';
import CustomModalIssueReport from '../CustomModalIssueReport';

const StudentFilter = () => {

  const [showReportRecords, setShowReportRecords] = useState(false);
  const [showCustomFilterModal, setShowCustomFilterModal] = useState();

  const hideModal = () => {
      setShowCustomFilterModal(false);
  }
  return(
    <>
        <SubHeader
          type='tab-header-filter' 
          selectLabelTab='Class'
          selectPlaceholderTab='----Select class----'
          multiselectLabel='Student'
          multiselectPlaceholder='----Select student----'
          multiselectLabel1='Reg. No.'
          multiselectPlaceholder1='----Select Reg. No.----'
          widthDateLabel1='Product Added From'
          widthDateLabel2='Product Added To'
          selectLabelTab2='Select Store'
          selectPlaceholderTab2='----Select store----'
          buttonOption={true}
          showTabSelectInput={true}
          showMultiSelectTab1={true}
          showMultiSelectTab2={true}
          showDateTabFrom={true}
          showDateTabTo={true}
          showTabSelectInput2={true}
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
        <StudentFilterTable/>
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

export default StudentFilter;