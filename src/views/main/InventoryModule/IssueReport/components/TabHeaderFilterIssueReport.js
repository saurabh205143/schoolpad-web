import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap'
import { AddFormFieldTab, AddFormFieldTabText, TabHeaderFilter } from '../../../TransportModule/TransportRoute/components/AddRouteStyles';
import StaffFilter from './Issue Report Staff/StaffFilter';
import StudentFilter from './Issue Report Student/StudentFilter';

const TabHeaderFilterIssueReport = props => {

  const [tabKey, initTabKey] = useState('one')

  return (
    <>
      <AddFormFieldTab>
        <AddFormFieldTabText>
          <TabHeaderFilter>
            <Tabs className='form-field-tab' activeKey={tabKey} onSelect={(e) => initTabKey(e)}>
              <Tab className='form-field-tab-name' eventKey="one" title="Staff Filter">
                <StaffFilter/>
              </Tab>
              <Tab eventKey="two" title="Student Filter">
                <StudentFilter/>
              </Tab>
            </Tabs>
          </TabHeaderFilter>
        </AddFormFieldTabText>
      </AddFormFieldTab>
    </>
  );
};

export default TabHeaderFilterIssueReport;