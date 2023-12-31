import React, { useState } from 'react';
import Modal from '../../../../../components/Modal/Modal';
import Input from '../../../../../components/Inputs/Input';
import { Link } from 'react-router-dom';
import { AddMoreField, FieldContainer, FieldDivider, FieldLeftContainer1, FieldRightContainerItem, ModalBodyConatiner, RemoveContianer } from '../../../TransportModule/TransportRoute/components/AddRouteStyles';
import axios from 'axios';
import config from '../../../../../config';
// Assets
import AddMoreIcon from '../../../../../images/add-more-icon.svg';
import RemoveIcon from '../../../../../images/delete-icon.svg';
import Button from '../../../../../components/Buttons/Button';
import SelectInput from '../../../../../components/Inputs/Select';

const AddCategories = props => {
    const { show, handleClose, Storelist, saveAction } = props;
    const options = Storelist;

    // Add state variables for selected store and store error
    const [selectedStore, setSelectedStore] = useState('');
    const [storeError, setStoreError] = useState('');

    const [formValues, setFormValues] = useState(
        [
            {
                select_store: '',
                category_name: '',
                category_code: '',
            }
        ]
    )

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [SelectedValue, setSelectValue] = useState([]);

    // Validate Inputs
    const validate = () => {
        let fields = [
            {
                label: 'Select Store',
                key: 'select_store',
                required: true,
            },
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
                ((field.key === 'select_store' && selectedStore === '') ||
                    (formValues[field.key] === undefined ||
                        formValues[field.key] === null ||
                        formValues[field.key] === ''))
            ) {
                e[field.key] = `Please enter ${field.label} `;
                return;
            }
        });

        setErrors(e);
        return Object.keys(e).length === 0;
    };

    // Inputs handle change
    const handleChange = (e) => {
        let i = { ...formValues };
        i[e.target.name] = e.target.value;
        setFormValues(i);
    };

    // OnSubmit Validate 
    const onSubmit = () => {
        let e = {};
        if (selectedStore === '') {
            setStoreError('Please select a store');
        } else {
            setStoreError('');
        }
        if (!validate()) {
            return;
        }
        setLoading(true);
        for (let i = 0; i < formValues.length; i++) {
            const baseURL = config.baseUrl + "api/v1/inventory/category";
            axios.post(baseURL, {
                categoryName: formValues[i].category_name,
                categoryCode: formValues[i].category_code,
                storeId: SelectedValue,
            })
                .then(function (response) {
                    if (response.data.code == '002') {
                        e['category_name'] = response.data.message;
                        setErrors(e);
                    }
                    else if (response.data.code == '001') {
                        e['category_code'] = response.data.message;
                        setErrors(e);
                    }
                    else {
                        // saveAction();
                        // setTimeout(() => {
                        //     window.location.reload();
                        // }, 2000);
                        // setLoading(false);
                        saveAction();
                    }

                    // console.log({ response });
                })
                .catch(function (error) { });
        }

        // setLoading(true);
        // setTimeout(() => {
        //     window.location.reload();
        // }, 2000);
        // setLoading(false);
        // saveAction();

    }

    let addFormFields = () => {
        setFormValues([...formValues, { select_store: "", category_name: "", category_code: "" }])
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
            modalHeading={'Add New Category'}
            submitText='Save and Close'
            actionText={'Save and Continue'}
            cancelText='Cancel'
            saveAction={onSubmit}
        // loading={loading}
        >
            <form>
                <ModalBodyConatiner>
                    <FieldContainer>
                        <SelectInput
                            label='Select Store'
                            options={options}
                            placeholder='---- Select store ----'
                            name={'select_store'}
                            required={true}
                            value={selectedStore}
                            onChange={(e) => setSelectedStore(e.target.value)}
                            error={storeError}
                        />
                    </FieldContainer>
                    {formValues.map((element, index) => (
                        <FieldDivider>
                            <FieldLeftContainer1>
                                <Input
                                    type="text"
                                    label={'Category Name'}
                                    placeholder={'Enter category name'}
                                    name={'category_name'}
                                    value={formValues.category_name}
                                    onChange={handleChange}
                                    required={true}
                                    error={errors.category_name}
                                />
                            </FieldLeftContainer1>
                            <FieldRightContainerItem>
                                <Input
                                    type="text"
                                    placeholder={'Enter category code'}
                                    label={'Category Code'}
                                    name={'category_code'}
                                    value={formValues.category_code}
                                    onChange={(e) => handleChange(index, 'category_code', e)}
                                    required={true}
                                    error={errors.category_code}
                                />
                            </FieldRightContainerItem>
                            {
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
                            }
                        </FieldDivider>
                    ))}
                    {/* Add More field button */}
                    <AddMoreField style={{ marginBottom: '14px' }}>
                        <Link onClick={() => addFormFields()}>
                            <img src={AddMoreIcon} alt="Icon" />
                            <span>Add Another Category</span>
                        </Link>
                    </AddMoreField>
                </ModalBodyConatiner>
            </form>
        </Modal>
    );
};

export default AddCategories;