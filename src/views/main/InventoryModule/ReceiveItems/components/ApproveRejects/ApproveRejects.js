import React from 'react'
import { styled } from 'styled-components';
import Layout from '../../../../../../components/Layouts/Layout';
import SubHeader from '../../../../../../components/ScreensHeader/SubHeader';
import Button from '../../../../../../components/Buttons/Button';
import { FooterButtonContainer } from '../../../../../../components/Modal/ModalStyles';
import ApproveRejectTable from './ApproveRejectTable';

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

const ApproveRejects = () => {

  return (
    <>
      <Layout type="inventory">
        <SubHeader
          heading='Approve/Reject GRN'
          type='vertical'
          headerDescription='Please select the type of data on which you want to add mapping below. You can choose class wise, route wise, admission number wise etc'
          showDateInputField={true}
          disabled={true}
          showDisabledInput={true}
          selectLabel4='Select Department'
          selectPlaceholder4='--Select Department--'
          textLabelDisabled='Purchase Order No.'
          textPlaceholderDisabled='PO-0123'
          textLabelDisabled1='Store'
          textPlaceholderDisabled1='Information Technology'
          textLabelDisabled2='Category'
          textPlaceholderDisabled2='Stationery Stores'
          inputLabel8='Remarks'
          inputPlaceholder8='Enter remarks here'
          showHeaderFilterRecordBoxNew={true}
          showSelectRecordBoxNew={true}
          showDisabledInput2={true}
        />

        {/* Approve/RejectGRN - Table*/}
          <ApproveRejectTable/>
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
                      buttonText={'Reject'}
                      className={'delete'}
                  />
                    <Button
                      buttonText={'Approve'}
                      className={'primary'}
                  />
                  </FooterButtonContainer>
              </FixedInnerContainer>
          </FixedBottomContainer>
      </Layout>
    </>

  )
}

export default ApproveRejects;