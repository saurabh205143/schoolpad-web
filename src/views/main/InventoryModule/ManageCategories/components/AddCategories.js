import React, { useState } from 'react';
import Modal from '../../../../../components/Modal/Modal';
import Input from '../../../../../components/Inputs/Input';
import { Link } from 'react-router-dom';
import {AddMoreField, FieldContainer, FieldDivider, FieldLeftContainer1, FieldRightContainerItem, ModalBodyConatiner, RemoveContianer } from '../../../TransportModule/TransportRoute/components/AddRouteStyles';

// Assets
import AddMoreIcon from '../../../../../images/add-more-icon.svg';
import RemoveIcon from '../../../../../images/delete-icon.svg';
import Button from '../../../../../components/Buttons/Button';
import SelectInput from '../../../../../components/Inputs/Select';

const AddCategories = props => {
    const { show, handleClose, Storelist,saveAction } = props;
    const options = Storelist;
    const [formValues, setFormValues] = useState(
        [
            {
                select_store:'',
                category_name: '',
                category_code: '',
            }
        ]
    )

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

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

    // Inputs handle change
        const handleChange = (index, event) => {
        const { name, value } = event.target;
        let updatedFormValues = [...formValues];
        updatedFormValues[index][name] = value;
        setFormValues(updatedFormValues);
    };

    // OnSubmit Validate 
    const onSubmit = () => {
        let e = {};
        if (!validate()) {
            return;
        }
        setLoading(true);
        setTimeout(() => {
            window.location.reload();
        }, 2000);
        setLoading(false);
        saveAction();
        
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
            modalHeading={'Add New Category'}
            submitText='Save and Close'
            actionText={'Save and Continue'}
            cancelText='Cancel'
            saveAction={onSubmit}
            loading={loading}
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
                        error={errors.select_store}
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
                                onChange={(e) => handleChange(index, e)}
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
                                onChange={(e) => handleChange(index, e)}
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
                <AddMoreField style={{marginBottom: '14px'}}>
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