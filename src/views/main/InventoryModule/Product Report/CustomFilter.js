import React, { useState } from 'react';
import { Link } from 'react-router-dom';



// Assets
import AddMoreIcon from '../../../../images/add-more-icon.svg';
import RemoveIcon from '../../../../images/delete-icon.svg';
import Modal from '../../../../components/Modal/Modal';
import SelectInput from '../../../../components/Inputs/Select';
import Button from '../../../../components/Buttons/Button';
import Input from '../../../../components/Inputs/Input';
import { AddMoreField, FieldContainer, FieldDivider, FieldLeftContainer, FieldLeftContainer1, FieldRightContainerItem, ModalBodyConatiner, RemoveContianer } from '../../TransportModule/TransportRoute/components/AddRouteStyles';

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
    const options = Storelist;
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
        // if (!validate()) {
        //     return;
        // }
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
        setFormValues([...formValues, {select_store:"", category_name: "", category_code:"" }])
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
                <FieldDivider>
                        <FieldLeftContainer1>
                        <Input
                                type="select"
                                options={options}
                                label='Field Name'
                                placeholder={'--Select field name--'}
                                onChange={() => {
                                }}
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
                        <span>Add Another</span>
                    </Link>
                </AddMoreField>
                </ModalBodyConatiner>
            </form>
        </Modal>
    );
};

export default CustomFilter;