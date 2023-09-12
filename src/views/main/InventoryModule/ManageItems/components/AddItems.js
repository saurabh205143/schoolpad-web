import React, { useState, useEffect } from 'react';
import Modal from '../../../../../components/Modal/Modal';
import Input from '../../../../../components/Inputs/Input';
import { Link } from 'react-router-dom';
import { AddMoreField, FieldContainer, FieldContainerBottom, FieldContainerBottomLine, FieldContainerBox, FieldDivider, FieldDividerBottom, FieldDividerHeading, FieldLeftContainer1, FieldRightContainerItem, RemoveContianer } from '../../../TransportModule/TransportRoute/components/AddRouteStyles';
import multiOptions from '../../../../../components/Inputs/data';
import axios from 'axios';
import config from '../../../../../config';

// Assets
import AddMoreIcon from '../../../../../images/add-more-icon.svg';
import RemoveIcon from '../../../../../images/delete-icon.svg';
import Button from '../../../../../components/Buttons/Button';
import SelectInput from '../../../../../components/Inputs/Select';
import MultiSelect from '../../../../../components/Inputs/MultiSelect';

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

    const { show, handleClose, saveAction } = props;

    // Add state variables for selected store and store error
    const [selectedStore, setSelectedStore] = useState('');
    const [selectedRtn, setSelectedRtn] = useState('');
    const [storeError, setStoreError] = useState('');

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

    const [formValuesSelect, setFormValuesSelect] = useState(
        [
            {
                select_store: "",
                select_rtn: "",
            }
        ]
    )

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [errorsMultiSelect, setErrorMultiSelect] = useState("");

    // Multiselect validation
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [validationError, setValidationError] = useState('');

    // useEffect(() => {
    //     setSelectedOptions([{ label: "All", value: "*" }, ...multiOptions]);
    // }, []);

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

    const handleSelectChange = (newSelectedOptions) => {
        setSelectedOptions(newSelectedOptions);
        console.log(newSelectedOptions);
        setValidationError('');
    }

    const [SelectedValue, setSelectValue] = useState([]);
    const [typeselectedValue, setTypeSelectValue] = useState('');
    const [unitselectedValue, setUnitSelectValue] = useState('');
    const [CategoryValue, setCategoryValue] = useState([]);
    const [thresholdcount, setthresholdcount] = useState([]);
    // Validate Inputs
    const validate = () => {
        let fields = [
            {
                label: 'Select Store',
                key: 'select_store',
                required: true,
            },
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
                ((field.key === 'select_store' && selectedStore === '') ||
                    (formValuesEmail[field.key] === undefined ||
                        formValuesEmail[field.key] === null ||
                        formValuesEmail[field.key] === ''))
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
        if (selectedStore === '') {
            setStoreError('Please select a store');
        } else {
            setStoreError('');
        }
        if (selectedRtn === '') {
            setSelectedRtn('Please select rtn/csn');
        } else {
            setSelectedRtn('');
        }
        console.log(selectedOptions);
        if (selectedOptions.length === 0) {
            setErrorMultiSelect("Please select category");
        }
        else {
            setErrorMultiSelect("");
        }
        if (!validate()) {
            return;
        }
        if (handleSubmit()) {
            return; // Category submission if validation fails
        }
        setLoading(true);
        setTimeout(() => {
            window.location.reload();
        }, 2000);
        setLoading(false);
        saveAction();
        // if (!validate()) {
        //     return;
        //     }
        console.log(formValuesEmail[0].name);
        const addproduct = config.baseUrl + "api/v1/inventory/products";
        axios.post(addproduct, {
            itemName: formValuesEmail[0].name,
            rtncns: typeselectedValue,
            threshHold: thresholdcount,
            unitPr: formValuesEmail[0].purchase_cost,
            mrp: formValuesEmail[0].purchase_cost,
            userId: 214,
            categoryId: CategoryValue,
            storeId: SelectedValue,
            unitId: 5,
            threshholdEmail: formValuesEmail[0].email
        })
            .then(function (response) {
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            })
            .catch(function (error) { console.log({ error }); });
        // setLoading(true);
        // setTimeout(() => {
        //     window.location.reload();
        // }, 2000);
        // setLoading(false);
        // saveAction();

    }

    let handleChange = (index, field, e) => {
        let newFormValues = [...formValuesEmail];
        newFormValues[index][field] = e.target.value;
        setFormValuesEmail(newFormValues);
    };

    let addEmailFields = () => {
        setFormValuesEmail([...formValuesEmail, { alert_count: "", alert_email: "" }])
    }

    let addItemFields = () => {
        setFormValuesItem([...formValuesItem, { name_item: "" }])
    }

    let removeFormFields = (i) => {
        let newFormValues = [...formValuesEmail];
        newFormValues.splice(i, 1);
        setFormValuesEmail(newFormValues)
    }

    let removeFormFieldsItem = (i) => {
        let newFormValues = [...formValuesItem];
        newFormValues.splice(i, 1);
        setFormValuesItem(newFormValues)
    }

    const handleSubmit = () => {
        // Perform validations
        if (selectedOptions.length === 0) {
            setValidationError('Please select category');
            return false;
        } else {
            setValidationError('');
            return true;
        }
    }

    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalHeading={'Add New Product'}
            submitText='Save and Close'
            actionText={'Save and Continue'}
            cancelText='Cancel'
            saveAction={onSubmit}
            loading={loading}
        >
            <form onSubmit={onSubmit}>
                <>
                    <FieldContainerBottom>
                        <FieldContainerBox>
                            <FieldContainer>
                                {formValuesSelect.map((element, index) => (
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
                                ))}
                                <MultiSelect
                                    label='Select Category'
                                    options={[{ label: "All", value: "*" }, ...multiOptions]}
                                    placeholderButtonLabel='Select category'
                                    getDropdownButtonLabel={getDropdownButtonLabel}
                                    value={selectedOptions}
                                    onChange={onChange}
                                    selected={selectedOptions}
                                    setState={setSelectedOptions}
                                    error={errorsMultiSelect}
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
                        <>
                            <FieldDividerHeading>
                                <span>Add Item Details Below</span>
                            </FieldDividerHeading>
                        </>
                        {formValuesItem.map((element, index) => (
                            <>
                                <FieldDivider>
                                    <FieldLeftContainer1>
                                        <Input
                                            type="text"
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
                                                    onClick={() => removeFormFieldsItem(index)}
                                                />
                                            </RemoveContianer>
                                            : null
                                    }
                                </FieldDivider>
                                <FieldDivider>
                                    <FieldLeftContainer1>
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
                                    </FieldLeftContainer1>
                                    <FieldRightContainerItem>
                                        <SelectInput
                                            label='Rtn/Cns'
                                            options={options}
                                            placeholder='---- Select rtn/cns----'
                                            name={' select_rtn'}
                                            required={true}
                                            value={selectedRtn}
                                            onChange={(e) => setSelectedRtn(e.target.value)}
                                            error={selectedRtn}
                                        />
                                    </FieldRightContainerItem>
                                    {/* {
                                        index ?
                                            <RemoveContianer>
                                                <Button
                                                    className={'only-icon-button'}
                                                    onlyIcon={RemoveIcon}
                                                    onClick={() => removeFormFieldsItem(index)}
                                                    required={true}
                                                />
                                            </RemoveContianer>
                                            : null
                                    } */}
                                </FieldDivider>
                            </>
                        ))}
                        {/* Add More field button */}
                        <AddMoreField style={{ margin: '14px 0px 14px 0px' }}>
                            <Link onClick={() => addItemFields()}>
                                <img src={AddMoreIcon} alt="Icon" />
                                <span>Add Another Item</span>
                            </Link>
                        </AddMoreField>
                    </FieldDividerBottom>
                </>
            </form>
        </Modal>
    );
};

export default AddItems;