import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap'
import { AddFormFieldTab, AddFormFieldTabText, TabHeaderFilter } from '../../../TransportModule/TransportRoute/components/AddRouteStyles';
import StockReport from './StockReport';
import MovementReport from './MovementReportTab/MovementReport';
import ProductWiseTab from './ProductWiseStockReportTab/ProductWiseTab';

const TabHeaderFilterProductReport = props => {

  const [tabKey, initTabKey] = useState('one')

  return (
    <>
      <AddFormFieldTab>
        <AddFormFieldTabText>
          <TabHeaderFilter>
            <Tabs className='form-field-tab' activeKey={tabKey} onSelect={(e) => initTabKey(e)}>
              <Tab className='form-field-tab-name' eventKey="one" title="Stock Report">
                <StockReport/>
              </Tab>
              <Tab eventKey="two" title="Movement Report">
                <MovementReport/>
              </Tab>
              <Tab eventKey="three" title="Product Wise Stock Report">
                <ProductWiseTab/>
              </Tab>
            </Tabs>
          </TabHeaderFilter>
        </AddFormFieldTabText>
      </AddFormFieldTab>
    </>
  );
};

export default TabHeaderFilterProductReport;