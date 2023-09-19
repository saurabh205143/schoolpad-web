import React, {useState, useEffect} from 'react'
import { styled } from 'styled-components';
import Layout from '../../../../../components/Layouts/Layout';
import SubHeader from '../../../../../components/ScreensHeader/SubHeader';

//Assets
import AddPurchaseTable from './AddPurchaseTable';
import { FooterButtonContainer } from '../../../../../components/Modal/ModalStyles';
import Button from '../../../../../components/Buttons/Button';
import axios from 'axios';
import * as XLSX from 'xlsx';
import config from '../../../../../config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToastModals from '../../../../../components/Toaster/ToastModals';

const baseURL = config.baseUrl;


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
  const [storeList, setStoreList] = useState('');//list for DD
  const [CategoryList, setCategoryList] = useState('');//list for DD
  const [newOrderNumber, setnewOrderNumber] = useState('');//list for DD




  //STORE LIST Function
  const storelist = () => {
    // let storeListDD = '';
    const fetchStoreURL = baseURL +"api/v1/inventory/stores";
    axios.get(fetchStoreURL, {
      params:
        { offset:0,search:''}
    }).then((resp) => {
      const strelist = resp.data.rows;
      const strelistDD = strelist.map((value, index) => ({
        label: `${value.storeName}`,
        value:`${value.id}`,
      }));
      setStoreList(strelistDD);
    });
    
  }
//CGET PO LATEST ORDER NO

const getLastestordernumber = () => {
  // let storeListDD = '';
  const fetchStoreURL = baseURL +"api/v1/inventory/purchaseorders/lastponumber";
  axios.get(fetchStoreURL).then((resp) => {
    console.log({resp});
    setnewOrderNumber(resp.data.receiptNo);
  });
  
}
  //
  useEffect(() => {
    storelist();
    getLastestordernumber();
  },[]);
  // console.log({storeList});
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
          showTextInput={true}
          showTextInput1={true}
          showSelectInput1={true}
          showSelectInput2={false}
          showSelectInput3={false}
          showDateInputField={true}
          textLabel='Purchase Order No.'
          textPlaceholder='Enter purchase order no'
          textLabel1='Remark'
          textPlaceholder1='Enter remark here'
          selectLabel1='Department'
          selectPlaceholder1='----Select department----'
          widthDateFrom='250px'
        />

        {/* Add Purchase Table*/}
        <AddPurchaseTable 
        storeOptions={storeList}
        // CategoryList={CategoryList}
        />

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