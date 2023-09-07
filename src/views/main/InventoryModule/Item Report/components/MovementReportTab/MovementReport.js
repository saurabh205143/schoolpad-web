import React, {useState} from 'react'


//Assets
import PrintImage from '../../../../../../images/print-icon.svg';
import ExcelImage from '../../../../../../images/excel-icon.svg';
import Layout from '../../../../../../components/Layouts/Layout';
import SubHeader from '../../../../../../components/ScreensHeader/SubHeader';
import ExportHeader from '../../../../../../components/ScreensHeader/ExportHeader';
import DefaultMappingScreen from '../../../../TransportModule/StudentMapping/components/DefaultMappingScreen';


const MovementReport = () => {

  const [showReportRecords, setShowReportRecords] = useState(false);
  return(
    <>
    <Layout type='inventory'>
        <SubHeader
          heading='none'
          type='header-filters' 
          buttonAdd='none' 
          inputLabel1='Stock Report'
          inputPlaceholder1='Enter employee id'
          showHeaderFilter={true}
          showPrimaryButton={false}
          showHeaderFilterReturn={true}
          showGetRecordButton={true}
          showDefaultScreenHeaderFilter={false}
          showDefaultScreenHeaderFilters={false}
          showSelectInputHeader={true}
          selectLabel1='Store'
          selectPlaceholder1='----Select store----'
          getRecords={() => setShowReportRecords(!showReportRecords)}
          showSearchButtonRight={false}
          showTabHeaderFilters={true}
        />

      {showReportRecords ?
        <div>
          <ExportHeader
            smallHeading='List of Items'
            smallHeding2='(07 Records)'
            PrintIcon={PrintImage}
            Excelicon={ExcelImage}
        />
        
        </div>
        :
        <DefaultMappingScreen
          xtrasubHeading='Select the Report Filters'
          description='Select the store from which and the store to which the item was moved. You can also select the dates between which movement happened.'
          showDefaultScreenHeader={true}
        />}
    </Layout>
    </>

  )
}

export default MovementReport;