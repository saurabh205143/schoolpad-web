import React, { useState } from 'react'
import Layout from '../../../../components/Layouts/Layout';
import DefaultMappingScreen from './components/DefaultMappingScreen';
import TestSelect from '../../../../components/Inputs/TestSelect';
import SubHeader from '../../../../components/ScreensHeader/SubHeader';
import ExportHeader from '../../../../components/ScreensHeader/ExportHeader';
import MappingTable from './components/MappingTable';
import { styled } from 'styled-components';
import { FooterButtonContainer } from '../../../../components/Modal/ModalStyles';
import Button from '../../../../components/Buttons/Button';
import ItemsNotFound from '../../../../components/NotFoundItems/ItemsNotFound';

export const FixedBottomContainer = styled.div`
  width:100%;
  position:fixed;
  bottom:0;
  border-top: 1px solid #C1C7D0;
  border-radius: 0px 0px 3px 3px;
  height:56px;
  background:#ffffff;
  z-index:9999;
  right:0;
`;

export const FixedInnerContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:flex-end;
  padding:0 40px;
  height:56px;
`;

const StudentMapping = () => {

  const [showRecords, setShowRecords] = useState(false);

  return (
    <Layout>

      <SubHeader
        heading='Student Mapping'
        getRecords={() => setShowRecords(!showRecords)}
      />

      <ExportHeader
            smallHeading='Students Mapping'
            smallHeding2='(202 Records)'
      />

      {/* Show Mapping records */}
      {showRecords ?
        <div>
          <MappingTable />

          {/* Save Mapping Container */}
          <FixedBottomContainer>
              <FixedInnerContainer>
                  <FooterButtonContainer>
                    <Button
                      buttonText='Cancel'
                      className={'link-button-black'}
                    />
                  </FooterButtonContainer>
                  <FooterButtonContainer>
                    <Button
                      buttonText={'Save Mapping'}
                      className={'primary'}
                  />
                  </FooterButtonContainer>
              </FixedInnerContainer>
          </FixedBottomContainer>
        </div>
        :
        <DefaultMappingScreen /> 
}
    </Layout>
  )
}

export default StudentMapping;