import React, { useState,useEffect } from 'react';
import Modal from '../../../../../components/Modal/Modal';
import Input from '../../../../../components/Inputs/Input';
import { FieldContainer, ModalBodyConatiner } from '../../../TransportModule/TransportRoute/components/AddRouteStyles';
import CustomCheckbox from '../../../../../components/Checkbox/CustomCheckbox';
import axios from 'axios';
import config from '../../../../../config';
import MultiSelect from '../../../../../components/Inputs/MultiSelect';
import multiOptions from '../../../../../components/Inputs/data';
const EditStore = props => {

    const { show, handleClose,vendorList } = props;
    const [isChecked, setIsChecked] = useState(true);
    const [storeName, setstoreName] = useState('');
    const [storeCode, setstoreCode] = useState('');
    const [storeDesc, setstoreDesc] = useState('');
    const [StoreManager, setStoremanager] = useState([]);
    const [selectedValue, setSelectedValue] = useState([]);
    const { confirm, handleConfirm,record } = props;
    // const baseURL = "http://localhost/schoolpad/Inventory-api/StoreApiManager/addStore";
    const baseURL = config.baseUrl +"api/v1/inventory/store";
    // console.log({baseURL});
    // const options = vendorList;
    const allOption = { label: "All", value: "*" };
    const options = [allOption].concat(vendorList);
    const selectSomeItemsText = "----Select stop manager----";
    
//  console.log('red', StoreManager);

    // Multiselect validation
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [validationError, setValidationError] = useState('');
    const [errorsMultiSelect, setErrorMultiSelect] = useState("");

    useEffect(() => {
        // setSelectedOptions([{ label: "All", value: "*" }, ...options]);
    }, []);

    function getDropdownButtonLabel({ placeholderButtonLabel, value }) {
        if (value && value.some((o) => o.value === "*")) {
            return `${placeholderButtonLabel}: All`;
        } else {
            return `${placeholderButtonLabel}: ${value.length} selected`;
        }
    }

    function onChange(value, event) {
        if (event.action === "select-option" && event.option.value === "*") {
            this.setState(this.options);
        } else if (
            event.action === "deselect-option" &&
            event.option.value === "*"
        ) {
            this.setState([]);
        } else if (event.action === "deselect-option") {
            this.setState(value.filter((o) => o.value !== "*"));
        } else if (value.length === this.options.length - 1) {
            this.setState(this.options);
        } else {
            this.setState(value);
        }
    }

    useEffect(() => {
        setstoreName(record.storeName);
        setstoreCode(record.storeCode);
        setstoreDesc(record.storeDesc);
        console.log(record.storeManager);
        let storeMnge = record.storeManager;
        
        // const regex = new RegExp(',', 'g');
        // const foundMatches = storeMnge.includes(',');
        // // // text.match(foundMatches);
        // // // 
        // console.log({foundMatches});
        let categoryselopt = { label: 'Cambridge', value: '5'}
        setStoremanager(categoryselopt);
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
                    <MultiSelect
                        label='Stop Manager'
                        options={[ ...options]}
                        placeholderButtonLabel='----Select stop manager----'
                        getDropdownButtonLabel={getDropdownButtonLabel}
                        value={selectedOptions}
                        onChange={onChange}
                        selected={StoreManager}
                        setState={setSelectedOptions}
                        error={errorsMultiSelect}
                        // setSelection={StoreManager}
                        setMultiSelect={setSelectedValue}
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