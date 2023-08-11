import React, { useState } from 'react';
import Modal from '../../../../../components/Modal/Modal';
import Input from '../../../../../components/Inputs/Input';
import { FieldContainer, ModalBodyConatiner } from '../../../TransportModule/TransportRoute/components/AddRouteStyles';
import CustomCheckbox from '../../../../../components/Checkbox/CustomCheckbox';
import axios from 'axios';
import config from '../../../../../config';

const AddStore = props => {

    const { show, handleClose } = props;
    const [isChecked, setIsChecked] = useState(true);
    const [storeName, setstoreName] = useState('');
    const [storeCode, setstoreCode] = useState('');
    const [storeDesc, setstoreDesc] = useState('');
    const [storeManager, setstoreManager] = useState('');
    const { confirm, handleConfirm } = props;
    const baseURL = config.baseUrl +"api/v1/inventory/store";

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
    const handleStoreManagerChange = (e) => {
        setstoreManager(e.target.value);
    }
    // res.setHeader("Access-Control-Allow-Origin", "*");
	// 	res.setHeader("Access-Control-Allow-Credentials", "true");
	// 	res.setHeader("Access-Control-Max-Age", "1800");
	// 	res.setHeader("Access-Control-Allow-Headers", "content-type");
	// 	res.setHeader("Access-Control-Allow-Methods","PUT, POST, GET, DELETE, PATCH, OPTIONS");
		// res.setHeader("Content-Type", "application/json;charset=utf-8");
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Max-Age": "1800",
        "Access-Control-Allow-Headers": 'X-Requested-With, content-type',
        "Access-Control-Allow-Methods": "PUT, POST, GET, DELETE, PATCH, OPTIONS",
        "Content-Type": "application/json",
        
        
        
        
        // //'Content-Type': 'application/json',
        // 'Access-Control-Allow-Headers':'*',
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Methods': 'POST, PUT, PATCH, GET, DELETE, OPTIONS',
        // 'Access-Control-Allow-Credentials': true,
        
    }
    const handleButtonClicked = () => {
        console.log({ baseURL });
        try {
                const response = axios.post(baseURL, {
                    storeName: storeName,
                    // other data
                },
                {
                    headers: headers
                    },
                    { mode: 'no-cors' },);
                console.log('POST successful:', response);
                } catch (error) {
                if (error.response) {
                    // The request was made, but the server responded with an error status code
                    console.error('Server responded with an error:', error.response.data);
                } else if (error.request) {
                    // The request was made, but no response was received
                    console.error('No response received:', error.request);
                } else {
                    // Something happened in setting up the request that triggered an error
                    console.error('Error setting up the request:', error.message);
                }
        }
    //     axios.post(baseURL, { storeName })
    //   .then((res) => {
    //     console.log(res);
    //     console.log(res.data);
    //   });
    //     axios
    //   .post(baseURL, {
    //       storeName: storeName,
    //       storeCode: storeCode,
    //       storeDesc: storeDesc,
    //       storeManager: storeManager,
    //       userId: 214,
    //       sessionId:8
    //   })
    //         .then((response) => {
    //       console.log({response});
    //     // setPost(response.data);
    //   });
    //     axios
    //   .post(baseURL, { storeName,storeCode,storeDesc,storeManager })
    //   .then((res) => {
    //     console.log(res);
    //     console.log(res.data);
    //   });
    // Do something when the button in the modal is clicked
    // console.log(storeName);
    // Close the modal
    // setIsModalOpen(false);
  };
    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalHeading={'Add New Store'}
            submitText='Confirm'
            cancelText='Cancel'
            saveAction={handleButtonClicked}
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
                <FieldContainer>
                    <Input
                        type="text"
                        placeholder={'Enter store manager'}
                        label={'Store Manager*'}
                        name={'store_manager'}
                        value={storeManager}
                        onChange={(e)=>{ handleStoreManagerChange(e)}}
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

export default AddStore;