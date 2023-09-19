import React, {useState} from 'react'

//Assets
import PrintImage from '../../../../../../images/print-icon.svg';
import ExcelImage from '../../../../../../images/excel-icon.svg';
import SubHeader from '../../../../../../components/ScreensHeader/SubHeader';
import ExportHeader from '../../../../../../components/ScreensHeader/ExportHeader';
import DefaultMappingScreen from '../../../../TransportModule/StudentMapping/components/DefaultMappingScreen';
import MovementReportTable from './MovementReportTable';


const MovementReport = () => {

  const [showReportRecords, setShowReportRecords] = useState(false);
  return(
    <>
        <SubHeader
          type='tab-header-filter' 
          selectLabelTab='Move from Store'
          selectPlaceholderTab='----Select store----'
          selectLabelTab1='Move to Store'
          selectPlaceholderTab1='----Select store----'
          widthDateLabel1='Product movement From'
          widthDateLabel2='Product movement To'
          buttonOption={false}
          showTabSelectInput={true}
          showDateTabFrom={true}
          showDateTabTo={true}
          showGetRecordButton={true}
          showTabSelectInput1={true}
          getRecords={() => setShowReportRecords(!showReportRecords)}
        />

      {showReportRecords ?
        <div>
          <ExportHeader
            smallHeading='List of Products'
            smallHeding2='(07 Records)'
            PrintIcon={PrintImage}
            Excelicon={ExcelImage}
        />
        <MovementReportTable/>
        </div>
        :
        <DefaultMappingScreen
          xtrasubHeading='Select the Report Filters'
          description='Select the Store, Category, Item(s) Name, etc. to view stock report.'
          showDefaultScreenHeader={true}
        />}
    </>
  )
}

export default MovementReport;