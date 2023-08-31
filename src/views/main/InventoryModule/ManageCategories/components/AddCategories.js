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

    const options = [
        {
            value: 1,
            label: "Primary Store"
        },
        {
            value: 2,
            label: "Secondary Store"
        }
    ];

    const { show, handleClose } = props;
    const [formValues, setFormValues] = useState(
        [
            {
                staff_member: "",
                route_name: "",
                stops: "",
                set_order: "",
                vehicle_number: "",
                vehicle_capacity: "",
                bus_help: "",
            }
        ]
    )

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
    }

    let addFormFields = () => {
        setFormValues([...formValues, { stops: "", set_order: "" }])
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
            submitText='Confirm'
            cancelText='Cancel'
        >
            <form>
                <ModalBodyConatiner>
                <FieldContainer>
                    <SelectInput
                        label='Select Store'
                        placeholder='---- Select store ----'
                    />
                </FieldContainer>
                {formValues.map((element, index) => (
                <FieldDivider>
                        <FieldLeftContainer1>
                            <Input
                                type="text"
                                options={options}
                                label={'Category Name'}
                                placeholder={'Enter category name'}
                                name='stops'
                                onChange={e => handleChange(index, e)}
                                required={true}
                            />
                        </FieldLeftContainer1>
                        <FieldRightContainerItem>
                            <Input
                                type="text"
                                placeholder={'Enter category code'}
                                label={'Category Code'}
                                name={'set_order'}
                                onChange={e => handleChange(index, e)}
                                required={true}
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