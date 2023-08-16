import React, { useState } from 'react';
import Modal from '../../../../../components/Modal/Modal';
import Input from '../../../../../components/Inputs/Input';
import { FieldContainer, ModalBodyConatiner } from '../../../TransportModule/TransportRoute/components/AddRouteStyles';
import CustomCheckbox from '../../../../../components/Checkbox/CustomCheckbox';
import axios from 'axios';
import config from '../../../../../config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToastModals from '../../../../../components/Toaster/ToastModals';
const AddStore = props => {

    const { show, handleClose } = props;
    const [isChecked, setIsChecked] = useState(true);
    const [storeName, setstoreName] = useState('');
    const [storeCode, setstoreCode] = useState('');
    const [storeDesc, setstoreDesc] = useState('');
    const [storeManager, setstoreManager] = useState('');
    const { confirm, handleConfirm } = props;
    // const baseURL = "http://localhost/schoolpad/Inventory-api/StoreApiManager/addStore";
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
    const showToastMessage = () => {
        // hideModal();
        toast(
          <ToastModals type='successful' message='Your have Added 1 stop successfully.' />
        );
    };
    const handleConfirmClicked = () => {
        axios.post(baseURL, {
            storeName: storeName,
            storeCode:storeCode,
            storeDesc:storeDesc,
            storeManager:storeManager,
            userId:214,
            sessionId:8
          })
          .then(function (response) {
            console.log(response.status);
            if(response.status===200)
            {
                alert(response.data.message);
            }
            else if(response.status === 201){
                let errorMessage = response.data.details.error;
                let messageList = errorMessage.split('-');
                alert(messageList);
            }
            else{
                alert(response.data.message);
            }
          })
          .catch(function (error) {
            console.log(error.message);
          });
  };
    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalHeading={'Add New Store'}
            submitText='Confirm'
            cancelText='Cancel'
            saveAction={handleConfirmClicked}
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