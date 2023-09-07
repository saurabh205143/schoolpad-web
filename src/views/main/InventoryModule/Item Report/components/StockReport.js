import React, {useState} from 'react'
import Layout from '../../../../components/Layouts/Layout';
import SubHeader from '../../../../components/ScreensHeader/SubHeader';
import DefaultMappingScreen from '../../TransportModule/StudentMapping/components/DefaultMappingScreen';
import ExportHeader from '../../../../components/ScreensHeader/ExportHeader';

//Assets
import PrintImage from '../../../../images/print-icon.svg';
import ExcelImage from '../../../../images/excel-icon.svg';
import StockReportTable from './components/StockReportTable';

const ItemReport = () => {

  const [showReportRecords, setShowReportRecords] = useState(false);
  return(
    <>
    <Layout type='inventory'>
        <SubHeader
          type='tab-header-filter' 
          getRecords={() => setShowReportRecords(!showReportRecords)}
        />

      {showReportRecords ?
        <div>
          <ExportHeader
            smallHeading='List of Items'
            smallHeding2='(07 Records)'
            PrintIcon={PrintImage}
            Excelicon={ExcelImage}
        />
        <StockReportTable/>
        </div>
        :
        <DefaultMappingScreen
          xtrasubHeading='Select the Report Filters'
          description='Select the Store, Category, Item(s) Name, etc. to view stock report.'
          showDefaultScreenHeader={true}
        />}
    </Layout>
    </>

  )
}

export default ItemReport;