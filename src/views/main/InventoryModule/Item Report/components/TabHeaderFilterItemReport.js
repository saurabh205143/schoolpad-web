import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap'
import { AddFormFieldTab, AddFormFieldTabText, TabHeaderFilter } from '../../../TransportModule/TransportRoute/components/AddRouteStyles';


const TabHeaderFilterItemReport = props => {

  const [tabKey, initTabKey] = useState('one')

  return (
    <>
      <AddFormFieldTab>
        <AddFormFieldTabText>
          <TabHeaderFilter>
            <Tabs className='form-field-tab' activeKey={tabKey} onSelect={(e) => initTabKey(e)}>
              <Tab className='form-field-tab-name' eventKey="one" title="Stock Report">
                
              </Tab>
              <Tab eventKey="two" title="Movement Report">
                
              </Tab>
              <Tab eventKey="two" title="Item Wise Stock Report">
                
              </Tab>
            </Tabs>
          </TabHeaderFilter>
        </AddFormFieldTabText>
      </AddFormFieldTab>
    </>
  );
};

export default TabHeaderFilterItemReport;