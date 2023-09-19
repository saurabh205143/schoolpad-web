import React from 'react'
import { styled } from 'styled-components';
import Layout from '../../../../../components/Layouts/Layout';
import SubHeader from '../../../../../components/ScreensHeader/SubHeader';

//Assets
import AddPurchaseTable from './AddPurchaseTable';
import { FooterButtonContainer } from '../../../../../components/Modal/ModalStyles';
import Button from '../../../../../components/Buttons/Button';

export const FixedBottomContainer = styled.div`
  width:82%;
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

const AddPurchaseOrder = () => {

  return (
    <>
      <Layout type='inventory'>
        <SubHeader
          heading='Add Purchase Order'
          headerDescription='Please select the type of data on which you want to add mapping below. You can choose class wise, route wise, admission number wise etc'
          type='vertical'
          showHeaderFilter={true}
          showSearchButtonRight={false}
          showPrimaryButton={false}
          showGetRecordButton={false}
          showTextInput={false}
          showTextInput1={true}
          showSelectInput1={true}
          showSelectInput2={false}
          showSelectInput3={false}
          showDateInputField={true}
          disabled={true}
          showDisabledInput={true}
          showDisabledInput1={false}
          showDisabledInput2={false}
          textLabelDisabled='Purchase Order No.'
          textPlaceholderDisabled='PO-0123'
          textLabel1='Remark'
          textPlaceholder1='Enter remark here'
          selectLabel1='Department'
          selectPlaceholder1='----Select department----'
          widthDateFrom='250px'
        />

        {/* Add Purchase Table*/}
        <AddPurchaseTable />

        {/* Save Cancel Fixed Footer */}
        <FixedBottomContainer>
          <FixedInnerContainer>
            <FooterButtonContainer>
              <Button
                buttonText='Cancel'
                className={'link-button-black'}
              />
              <Button
                buttonText='Save'
                className={'primary'}
              />
            </FooterButtonContainer>
          </FixedInnerContainer>
        </FixedBottomContainer>

      </Layout>
    </>

  )
}

export default AddPurchaseOrder;