import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Assets
import AddMoreIcon from '../../../../images/add-more-icon.svg';
import RemoveIcon from '../../../../images/delete-icon.svg';
import Modal from '../../../../components/Modal/Modal';
import Button from '../../../../components/Buttons/Button';
import Input from '../../../../components/Inputs/Input';
import { AddMoreField, FieldContainer, FieldDivider, FieldDividerCustom, FieldLeftContainer, FieldLeftContainer1, FieldRightContainerItem, ModalBodyConatiner, RemoveContianer } from '../../TransportModule/TransportRoute/components/AddRouteStyles';
import Select from '../../../../components/Inputs/Select';

const options = [
  {
      value: 1,
      label: "Class Wise"
  },
  {
      value: 2,
      label: "Admission No"
  }
];

const CustomFilter = props => {
    const { show, handleClose, Storelist,saveAction } = props;
    const [formValues, setFormValues] = useState(
        [
            {
                select_store:'',
                field_criteria: '',
                field_value: '',
            }
        ]
    )

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [selectedStore, setSelectedStore] = useState('');
    const [fieldError, setFieldError] = useState('');
    // Validate Inputs
    const validate = () => {
        let fields = [
            {
                label: 'Field Name',
                key: 'field_name',
                required: true,
            },
            {
                label: 'Field Criteria',
                key: 'field_criteria',
                required: true,
            },
            {
                label: 'Field Value',
                key: 'field_value',
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
        if (selectedStore === '') {
            setFieldError('Please select a field name');
        } else {
            setFieldError('');
        }
        if (!validate()) {
            return;
        }
        setLoading(true);
        for (let i = 0; i < formValues.length; i++) { 
        }
        
        // setLoading(true);
        // setTimeout(() => {
        //     window.location.reload();
        // }, 2000);
        // setLoading(false);
        // saveAction();
        
    }

    let addFormFields = () => {
        setFormValues([...formValues, {field_name:"",   field_criteria: "", field_value:"" }])
    }

    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }

    const [showDependentDrop, setShowDependentDrop] = useState();

    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalHeading={'Custom Filter(s)'}
            submitText='Apply '
            cancelText='Clear All'
            saveAction={onSubmit}
            loading={loading}
        >
            <form>
                <ModalBodyConatiner>
                {formValues.map((element, index) => (
                <FieldDividerCustom>
                        <FieldLeftContainer1>
                        <Select
                                options={options}
                                label='Field Name'
                                placeholder={'--Select field name--'}
                                onChange={(e) => handleChange(index, e)}
                                required={true}
                                error={fieldError}
                                value={formValues.field_name}
                            />
                        </FieldLeftContainer1>
                        <FieldRightContainerItem>
                            <Input
                                type="text"
                                placeholder={'Enter field criteria'}
                                label={'Field Criteria'}
                                name={'field_criteria'}
                                value={formValues.field_criteria}
                                onChange={(e) => handleChange(index, e)}
                                required={true}
                                error={errors.field_criteria}
                            />
                        </FieldRightContainerItem>
                        <FieldRightContainerItem>
                            <Input
                                type="text"
                                placeholder={'Enter field value'}
                                label={'Field Value'}
                                name={'field_value'}
                                value={formValues.field_value}
                                onChange={(e) => handleChange(index, e)}
                                required={true}
                                error={errors.field_value}
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
                    </FieldDividerCustom>
                    ))}
                {/* Add More field button */}
                <AddMoreField style={{marginBottom: '14px'}}>
                    <Link onClick={() => addFormFields()}>
                        <img src={AddMoreIcon} alt="Icon" />
                        <span>Add Another</span>
                    </Link>
                </AddMoreField>
                </ModalBodyConatiner>
            </form>
        </Modal>
    );
};

export default CustomFilter;