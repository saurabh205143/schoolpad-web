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

    const { show, handleClose,saveAction } = props;
    const [formValuesEmail, setFormValuesEmail] = useState(
        [
            {
                alert_count: "",
                alert_email: "",
            }
        ]
    )

    const [formValuesItem, setFormValuesItem] = useState(
        [
            {
                name_item: "",
                purchase_cost: "",
            }
        ]
    )

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    // Validate Inputs
    const validate = () => {
        let fields = [
            {
                label: 'Alert Me If Item Count Falls Below',
                key: 'alert_count',
                required: true,
            },
            {
                label: 'Add Email IDs For Alert',
                key: 'alert_email',
                required: true,
            },
            {
                label: 'Name',
                key: 'name_item',
                required: true,
            },
            {
                label: 'Purchase Cost',
                key: 'purchase_cost',
                required: true,
            },
        ];

        let e = {};
        fields.forEach((field) => {
            if (
                field.required &&
                (formValuesEmail[field.key] === undefined ||
                    formValuesEmail[field.key] === null ||
                    formValuesEmail[field.key] === '')
            ) {
                e[field.key] = `Please enter ${field.label} `;
                return;
            }
            else if (
                field.required &&
                (formValuesItem[field.key] === undefined ||
                    formValuesItem[field.key] === null ||
                    formValuesItem[field.key] === '')
            ) {
                e[field.key] = `Please enter ${field.label} `;
                return;
            }
        });

        setErrors(e);
        return Object.keys(e).length === 0;
    }

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

    let handleChange = (index, field, e) => {
        let newFormValues = [...formValuesEmail];
        newFormValues[index][field] = e.target.value;
        setFormValuesEmail(newFormValues);
    };

    let addEmailFields = () => {
        setFormValuesEmail([...formValuesEmail, { alert_count: "", alert_email: ""}])
    }

    let addItemFields = () => {
        setFormValuesItem([...formValuesItem, { name_item: "" }])
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
            submitText='Save and Close'
            actionText={'Save and Continue'}
            cancelText='Cancel'
            saveAction={onSubmit}
            loading={loading}
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
                                error={true}
                                />
                                <Input
                                    type="text"
                                    label={'Alert Me If Item Count Falls Below'}
                                    options={options}
                                    placeholder={'Enter if item count falls below'}
                                    name='alert_count'
                                    required={true}
                                    error={errors.alert_count}
                                    value={formValuesEmail.alert_count}
                                />
                                {formValuesEmail.map((element, index) => (
                                    <FieldDivider>
                                        <FieldLeftContainer1>
                                            <Input
                                                type="text"
                                                label={'Add Email IDs For Alert'}
                                                options={options}
                                                placeholder={'Enter email address'}
                                                onChange={(e) => handleChange(index, 'email', e)}
                                                name='alert_email'
                                                required={true}
                                                error={errors.alert_email}
                                                value={formValuesEmail.alert_email}
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
                                            onChange={(e) => handleChange(index, 'name', e)}
                                            name='name_item'
                                            required={true}
                                            error={errors.name_item}
                                            value={formValuesItem.name_item}
                                        />
                                    </FieldLeftContainer1>
                                    <FieldRightContainerItem>
                                        <Input
                                            type="text"
                                            placeholder={'Enter purchase cost'}
                                            label={'Purchase Cost'}
                                            name='purchase_cost'
                                            onChange={(e) => handleChange(index, 'purchase_cost', e)}
                                            required={true}
                                            error={errors.purchase_cost}
                                            value={formValuesItem.purchase_cost}
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