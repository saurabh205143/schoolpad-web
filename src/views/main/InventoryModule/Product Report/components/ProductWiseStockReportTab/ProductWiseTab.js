import React, {useState} from 'react'

//Assets
import PrintImage from '../../../../../../images/print-icon.svg';
import ExcelImage from '../../../../../../images/excel-icon.svg';
import SubHeader from '../../../../../../components/ScreensHeader/SubHeader';
import ExportHeader from '../../../../../../components/ScreensHeader/ExportHeader';
import DefaultMappingScreen from '../../../../TransportModule/StudentMapping/components/DefaultMappingScreen';
import ProductWiseTable from './ProductWiseTable';
import CustomFilter from '../../CustomFilter';

const ProductWiseTab = () => {

  const [showReportRecords, setShowReportRecords] = useState(false);
  const [showCustomFilterModal, setShowCustomFilterModal] = useState();

  const hideModal = () => {
      setShowCustomFilterModal(false);
  }
  return(
    <>
        <SubHeader
          type='tab-header-filter' 
          selectLabelTab='Select Store'
          selectPlaceholderTab='----Select store----'
          multiselectLabel='Select Category'
          multiselectPlaceholder='----Select category----'
          multiselectLabel1='Select Product'
          multiselectPlaceholder1='----Select product----'
          buttonOption={true}
          showTabSelectInput={true}
          showMultiSelectTab1={true}
          showMultiSelectTab2={true}
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
        <ProductWiseTable/>
        </div>
        :
        <DefaultMappingScreen
          xtrasubHeading='Select the Report Filters'
          description='Select the Store, Category, Item(s) Name, etc. to view stock report.'
          showDefaultScreenHeader={true}
        />}


        <CustomFilter
          show={showCustomFilterModal}
          handleClose={hideModal}
        />
    </>
  )
}

export default ProductWiseTab;