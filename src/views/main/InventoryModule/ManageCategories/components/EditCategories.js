import React, { useState, useEffect} from 'react';
import Modal from '../../../../../components/Modal/Modal';
import Input from '../../../../../components/Inputs/Input';
import { Link } from 'react-router-dom';
import {AddMoreField, FieldContainer, FieldDivider, FieldLeftContainer1, FieldRightContainerItem, ModalBodyConatiner, RemoveContianer } from '../../../TransportModule/TransportRoute/components/AddRouteStyles';
import axios from 'axios';
import config from '../../../../../config';
// Assets
import AddMoreIcon from '../../../../../images/add-more-icon.svg';
import RemoveIcon from '../../../../../images/delete-icon.svg';
import Button from '../../../../../components/Buttons/Button';
import SelectInput from '../../../../../components/Inputs/Select';
const baseURL = config.baseUrl +"api/v1/inventory/category";
const EditCategories = props => {
    
    const [categoryname, setCategoryName] = useState('');
    const [categorycode, setCategoryCode] = useState('');
    const [storename, setstorename] = useState('');
    const [storelist, setStorelist] = useState([]);
    const { show, handleClose, saveAction, singlerecord, Storelist } = props;
    useEffect(() => {
        setCategoryName(singlerecord.categoryName);
        setCategoryCode(singlerecord.categoryCode);
        setstorename(singlerecord.storeName);
        // getstoreList();
      }, [singlerecord]);
    // console.log({singlerecord});
    
    const [formValues, setFormValues] = useState(
        [
            {
                // select_store:'',
                category_name: '',
                category_code: '',
            }
        ]
    )

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [SelectedValue, setSelectValue] = useState([]);
    

    //---------------------
    const handlesetCategoryNameChange = (e) => {
        setCategoryName(e.target.value);
    };
    const handlesetCategoryCodeChange = (e) => {
        setCategoryCode(e.target.value);
    };
    const options = Storelist;
    // Validate Inputs
    const validate = () => {
        let fields = [
            // {
            //     label: 'Select Store',
            //     key: 'select_store',
            //     required: true,
            // },
            {
                label: 'Category Name',
                key: 'category_name',
                required: true,
            },
            {
                label: 'Category Code',
                key: 'category_code',
                required: true,
            },
            
        ];

        let e = {};
        fields.forEach((field) => {
            if (
                field.required &&
                (formValues[field.key] === undefined ||
                    formValues[field.key] === null ||
                    formValues[field.key] === '')
            ) {
                e[field.key] = `Please enter ${field.label} `;
                return;
            }
        });

        setErrors(e);
        return Object.keys(e).length === 0;
    }

//     const getstoreList = () => {
//     const fetchstorelistURL = config.baseUrl + +"api/v1/inventory/storelist";
//     axios.get(fetchstorelistURL).then((resp) => {
//       // console.log({ resp });
//       setStorelist(resp.data);
//     });
//   }

     // Inputs handle change
    const handleChange = (event) => {
        const { name, value } = event.target;
        let updatedFormValues = [...formValues];
        // updatedFormValues[index][name] = value;
        setFormValues(updatedFormValues);
    };

    // OnSubmit Validate 
    const onSubmit = () => {
        let e = {};
        // if (!validate()) {
        //     return;
        // }
        setLoading(true);
        for (let i = 0; i < formValues.length; i++) { 
            const baseURL = config.baseUrl +"api/v1/inventory/category";
            axios.put(baseURL, {
                categoryName: categoryname,
                categoryCode: categorycode,
                storeId: SelectedValue,
            })
                .then(function (response) {
                    if (response.data.code == '002') {
                        e['category_name'] = response.data.message;
                        setErrors(e);
                        // setLoading(false);
                    }
                    else if (response.data.code == '001') {
                        e['category_code'] = response.data.message;
                        setErrors(e);
                        // setLoading(false);
                    }
                    else { 
                        console.log({ response });
                        setTimeout(() => {
                            window.location.reload();
                        }, 2000);
                        saveAction();
                    }
                    // console.log({ response });
             })
            .catch(function (error) { console.log({ error }); });
        }
        
        // setLoading(true);
        // setTimeout(() => {
        //     window.location.reload();
        // }, 2000);
        // setLoading(false);
        // saveAction();
        
    }

    let addFormFields = () => {
        setFormValues([...formValues, {select_store:"", category_name: "", category_code:"" }])
    }

    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }

    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalHeading={'Edit Category'}
            submitText='Save and Close'
            actionText={'Save and Continue'}
            cancelText='Cancel'
            saveAction={onSubmit}
            loading={loading}
        >
            <form>
                <ModalBodyConatiner style={{marginBottom: '0px'}}>
                <FieldContainer>
                    <SelectInput
                        label='Select Store'
                        options={options}
                        placeholder='---- Select store ----'
                        name={'select_store'}
                        required={true}
                        SelectedValue={setSelectValue}
                        setSelectedvalue={storename}
                        error={errors.select_store}
                    />
                </FieldContainer>
                {/* {formValues.map((element, index) => ( */}
                <FieldDivider>
                        <FieldLeftContainer1>
                            <Input
                                type="text"
                                label={'Category Name'}
                                placeholder={'Enter category name'}
                                name={'category_name'}
                                onChange={(e) => handlesetCategoryNameChange(e)}
                                required={true}
                                value={categoryname}
                                error={errors.category_name}
                            />
                        </FieldLeftContainer1>
                        <FieldRightContainerItem>
                            <Input
                                type="text"
                                placeholder={'Enter category code'}
                                label={'Category Code'}
                                name={'category_code'}
                                onChange={(e) => handlesetCategoryCodeChange(e)}
                                required={true}
                                value={categorycode}
                                error={errors.category_code}
                            />
                        </FieldRightContainerItem>
                        {/* {
                            index ?
                                <RemoveContianer>
                                    <Button
                                        className={'only-icon-button'}
                                        onlyIcon={RemoveIcon}
                                        onClick={() => removeFormFields(index)}
                                        required={true}
                                    />
                                </RemoveContianer>
                                : null
                        } */}
                    </FieldDivider>
                    {/* ))} */}
                {/* Add More field button */}
                {/* <AddMoreField style={{marginBottom: '14px'}}>
                    <Link onClick={() => addFormFields()}>
                        <img src={AddMoreIcon} alt="Icon" />
                        <span>Add Another Category</span>
                    </Link>
                </AddMoreField> */}
                </ModalBodyConatiner>
            </form>
        </Modal>
    );
};

export default EditCategories;