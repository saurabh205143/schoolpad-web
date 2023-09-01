import React, { useState } from 'react';
import Modal from '../../../../../components/Modal/Modal';
import Input from '../../../../../components/Inputs/Input';
import { Link } from 'react-router-dom';
import { AddMoreField, FieldContainer, FieldContainerBottom, FieldContainerBottomLine, FieldContainerBox, FieldDivider, FieldDividerBottom, FieldDividerHeading, FieldLeftContainer1, FieldRightContainerItem, RemoveContianer } from '../../../TransportModule/TransportRoute/components/AddRouteStyles';


// Assets
import AddMoreIcon from '../../../../../images/add-more-icon.svg';
import RemoveIcon from '../../../../../images/delete-icon.svg';
import Button from '../../../../../components/Buttons/Button';
import SelectInput from '../../../../../components/Inputs/Select';
import MultiSelectDropDown from '../../../../../components/Inputs/MultiSelectDropDown';

const AddItems = props => {

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

    const selectSomeItemsText = "----Select category----";

    const width = "550px";

    const { show, handleClose } = props;
    const [formValuesEmail, setFormValuesEmail] = useState(
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

    const [formValuesItem, setFormValuesItem] = useState(
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

    let handleChange = (index, field, e) => {
        let newFormValues = [...formValuesEmail];
        newFormValues[index][field] = e.target.value;
        setFormValuesEmail(newFormValues);
    };

    let addEmailFields = () => {
        setFormValuesEmail([...formValuesEmail, { stops: "", set_order: "" }])
    }

    let addItemFields = () => {
        setFormValuesItem([...formValuesEmail, { stops: "", set_order: "" }])
    }


    let removeFormFields = (i) => {
        let newFormValues = [...formValuesEmail];
        newFormValues.splice(i, 1);
        setFormValuesEmail(newFormValues)
    }

    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalHeading={'Add New Items'}
            submitText='Confirm'
            cancelText='Cancel'
        >
            <form>
                <>
                    <FieldContainerBottom>
                        <FieldContainerBox>
                            <FieldContainer>
                                <SelectInput
                                    label='Select Store'
                                    placeholder='---- Select store ----'
                                />
                                <MultiSelectDropDown
                                label='Select Category'
                                />
                                <Input
                                    type="text"
                                    label={'Alert Me If Item Count Falls Below'}
                                    options={options}
                                    placeholder={'Enter if item count falls below'}
                                    name='store_name'
                                />
                                {formValuesEmail.map((element, index) => (
                                    <FieldDivider>
                                        <FieldLeftContainer1>
                                            <Input
                                                type="text"
                                                label={'Add Email IDs For Alert'}
                                                options={options}
                                                placeholder={'Enter email address'}
                                                name='store_name'
                                                onChange={(e) => handleChange(index, 'email', e)}
                                            />
                                        </FieldLeftContainer1>
                                        {
                                            index ?
                                                <RemoveContianer>
                                                    <Button
                                                        className={'only-icon-button'}
                                                        onlyIcon={RemoveIcon}
                                                        onClick={() => removeFormFields(index)}
                                                    />
                                                </RemoveContianer>
                                                : null
                                        }
                                    </FieldDivider>
                                ))}
                            </FieldContainer>
                            {/* Add More field button */}
                            <AddMoreField style={{ marginBottom: '14px' }}>
                                <Link onClick={() => addEmailFields()}>
                                    <img src={AddMoreIcon} alt="Icon" />
                                    <span>Add Another Email</span>
                                </Link>
                            </AddMoreField>
                        </FieldContainerBox>
                    </FieldContainerBottom>
                </>

                <>
                    <FieldDividerBottom>
                        {formValuesItem.map((element, index) => (
                            <>
                                <FieldDividerHeading>
                                    <span>Add Item Details Below</span>
                                </FieldDividerHeading>
                                <FieldDivider>
                                    <FieldLeftContainer1>
                                        <Input
                                            type="text"
                                            options={options}
                                            label={'Name'}
                                            placeholder={'Enter name of the item'}
                                            name='stops'
                                            onChange={(e) => handleChange(index, 'name', e)}
                                        />
                                    </FieldLeftContainer1>
                                    <FieldRightContainerItem>
                                        <Input
                                            type="text"
                                            placeholder={'Enter purchase cost'}
                                            label={'Purchase Cost'}
                                            name={'set_order'}
                                            onChange={(e) => handleChange(index, 'purchase_cost', e)}
                                        />
                                    </FieldRightContainerItem>
                                    {
                                        index ?
                                            <RemoveContianer>
                                                <Button
                                                    className={'only-icon-button'}
                                                    onlyIcon={RemoveIcon}
                                                    onClick={() => removeFormFields(index)}
                                                />
                                            </RemoveContianer>
                                            : null
                                    }
                                </FieldDivider>
                            </>
                        ))}
                        {formValuesItem.map((element, index) => (
                            <>
                                <FieldDivider>
                                    <FieldLeftContainer1>
                                        <SelectInput
                                            label='Select Store'
                                            placeholder='---- Select store ----'
                                        />
                                    </FieldLeftContainer1>
                                    <FieldRightContainerItem>
                                        <SelectInput
                                            label='Rtn/Cns'
                                            placeholder='---- Select rtn/cns ----'
                                        />
                                    </FieldRightContainerItem>
                                    {
                                        index ?
                                            <RemoveContianer>
                                                <Button
                                                    className={'only-icon-button'}
                                                    onlyIcon={RemoveIcon}
                                                    onClick={() => removeFormFields(index)}
                                                />
                                            </RemoveContianer>
                                            : null
                                    }
                                </FieldDivider>
                                {/* Add More field button */}
                                <AddMoreField style={{ marginBottom: '14px' }}>
                                    <Link onClick={() => addItemFields()}>
                                        <img src={AddMoreIcon} alt="Icon" />
                                        <span>Add Another Item</span>
                                    </Link>
                                </AddMoreField>
                            </>
                        ))}
                    </FieldDividerBottom>
                </>
            </form>
        </Modal>
    );
};

export default AddItems;