import React, { useState,useEffect } from 'react';
import Modal from '../../../../../components/Modal/Modal';
import Input from '../../../../../components/Inputs/Input';
import { FieldContainer, ModalBodyConatiner } from '../../../TransportModule/TransportRoute/components/AddRouteStyles';
import CustomCheckbox from '../../../../../components/Checkbox/CustomCheckbox';
import axios from 'axios';
import config from '../../../../../config';

const EditStore = props => {

    const { show, handleClose,vendorList } = props;
    const [isChecked, setIsChecked] = useState(true);
    const [storeName, setstoreName] = useState('');
    const [storeCode, setstoreCode] = useState('');
    const [storeDesc, setstoreDesc] = useState('');
    const [StoreManager, setStoremanager] = useState([]);
    const { confirm, handleConfirm,record } = props;
    // const baseURL = "http://localhost/schoolpad/Inventory-api/StoreApiManager/addStore";
    const baseURL = config.baseUrl +"api/v1/inventory/store";
    // console.log({baseURL});
    const options = vendorList;
    useEffect(() => {
        setstoreName(record.storeName);
        setstoreCode(record.storeCode);
        setstoreDesc(record.storeDesc);
        console.log(record.storeManager);
        let storeMnge = record.storeManager;
        console.log(storeMnge.split(','));
        // let categoryselopt = { label: singlerecord.categoryName, value: singlerecord.categoryId }
        // setstoreManager(record.managerName);
      }, [record]);
    // 
    const handleChange = () => {
        setIsChecked(!isChecked);
    };
    const handleStoreNameChange = (e) => {
        setstoreName(e.target.value);
    };
    const handleStoreCodeChange = (e) => {
        setstoreCode(e.target.value);
    }
    const handleStoreDescriptionChange = (e) => {
        setstoreDesc(e.target.value);
    }
    // const handleStoreManagerChange = (e) => {
    //     setstoreManager(e.target.value);
    // }
    const handleConfirmClickedEdit = () => {
        var nonIndexedObject = [];
        for (var i = 0; i < StoreManager.length; i++) {
            nonIndexedObject[i] = StoreManager[i].value;
        }
        var storeManagerList = nonIndexedObject.join(", ");
        axios.put(baseURL, {
            storeName: storeName,
            storeCode:storeCode,
            storeDesc:storeDesc,
            storeManager:storeManagerList,
            userId:214,
            sessionId:8,
            id:record.id,
            // _method: 'PUT'
          })
          .then(function (response) {
            // console.log(response);
            if(response.status===200)
            {
                alert(response.data.message);
            }
            else{
                alert(response.data.message);
            }
            // console.log(response);
          })
          .catch(function (error) {
            console.log(error.message);
          });
  };
    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalHeading={'Edit New Store'}
            submitText='Update'
            cancelText='Cancel'
            saveAction={handleConfirmClickedEdit}
        >
        <form>            
                <>
                <ModalBodyConatiner>
                <FieldContainer>
                    <Input
                                type="text"
                                label={'Store Name*'}
                                placeholder={'Enter store name'}
                                name='store_name'
                                value={storeName}
                                onChange={(e) => { handleStoreNameChange(e) }}
                                required={true}
                    />
                </FieldContainer>
                <FieldContainer>
                    <Input
                        type="text"
                        placeholder={'Enter store code'}
                        label={'Store Code*'}
                        name={'store_code'}
                        value={storeCode}
                        onChange={(e) => { handleStoreCodeChange(e) }}
                    />
                </FieldContainer>
                <FieldContainer>
                    <Input
                        type="text"
                        placeholder={'Enter store description'}
                        label={'Store Description*'}
                        name={'store_description'}
                        value={storeDesc}
                        onChange={(e)=>{ handleStoreDescriptionChange(e)}}
                    />
                </FieldContainer>
                {/* <FieldContainer>
                    <Input
                        type="text"
                        placeholder={'Enter store manager'}
                        label={'Store Manager*'}
                        name={'store_manager'}
                        value={storeManager}
                        onChange={(e)=>{ handleStoreManagerChange(e)}}
                    />
                </FieldContainer> */}
                <FieldContainer>
                    <Input
                        type="multi-select"
                        options={options}
                        name={'store_manager'}
                        label='Store Manager'
                        Storemanager = {setStoremanager}   
                        placeholder='----Select store manager----'
                    />
                </FieldContainer>
                <CustomCheckbox
                    checkboxtext='Make this store primary'
                    isChecked={isChecked}
                    onChange={handleChange}
                />
                </ModalBodyConatiner>
                </>
                
                
            </form>
            </Modal>       
    );
};

export default EditStore;