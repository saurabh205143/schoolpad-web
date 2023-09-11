import React, { useState, useEffect } from 'react';
import Modal from '../../../../../components/Modal/Modal';
import Input from '../../../../../components/Inputs/Input';
import { Link } from 'react-router-dom';
import { AddMoreField, FieldContainer, FieldContainerBottom, FieldContainerBottomLine, FieldContainerBox, FieldDivider, FieldDividerBottom, FieldDividerHeading, FieldLeftContainer1, FieldRightContainerItem, RemoveContianer } from '../../../TransportModule/TransportRoute/components/AddRouteStyles';
import axios from 'axios';
import config from '../../../../../config';

// Assets
import AddMoreIcon from '../../../../../images/add-more-icon.svg';
import RemoveIcon from '../../../../../images/delete-icon.svg';
import Button from '../../../../../components/Buttons/Button';
import SelectInput from '../../../../../components/Inputs/Select';
import MultiSelect from '../../../../../components/Inputs/MultiSelect';

const EditItems = props => {

    const typeOptions = [
        {
            value: 1,
            label: "Returnable"
        },
        {
            value: 2,
            label: "Consumeable"
        }
    ];

    const selectSomeItemsText = "----Select category----";

    const width = "550px";

    const { show, handleClose, saveAction, storelist, categorylist, singlerecord,unitlist } = props;
    console.log({ unitlist });
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
    const [SelectedValue, setSelectValue] = useState([]);
    const [typeselectedValue, setTypeSelectValue] = useState([]);//setCategoryValue
    const [CategoryValue, setCategoryValue] = useState([]);
    const [unitselectedValue, setUnitSelectValue] = useState('');
    const [thresholdcount, setthresholdcount] = useState(0);
    const [storename, setstorename] = useState('');
    const [categoryname, setcategoryname] = useState('');
    const [itemname, setitemname] = useState('');
    const [itemcost, setitemcost] = useState('');
    const [rtncns, setrtncns] = useState('');
    const [emaillist, setemaillist] = useState('');
    const [itemunit, setitemunit] = useState('');
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
        // if (!validate()) {
        //     return;
        //     }
            // console.log( formValuesEmail[0].name);
            const addproduct = config.baseUrl +"api/v1/inventory/products";
            axios.put(addproduct, {
                itemName: itemname,
                rtncns: (typeselectedValue=='')?rtncns.value:typeselectedValue,
                threshHold:thresholdcount,
                unitPr:itemcost,
                mrp:itemcost,
                userId:214,
                categoryId:(CategoryValue=='')?categoryname.value:CategoryValue,
                storeId:(SelectedValue=='')?storename.value:SelectedValue,
                unitId:(unitselectedValue=='')?itemunit.value:unitselectedValue,
                threshholdEmail: emaillist,
                id:singlerecord.id
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
        setFormValuesEmail([...formValuesEmail, { alert_count: "", alert_email: ""}])
    }

    let addItemFields = () => {
        setFormValuesItem([...formValuesItem, { name_item: "" }])//formValuesItem
    }

    let removeFormFields = (i) => {
        let newFormValues = [...formValuesEmail];
        newFormValues.splice(i, 1);
        setFormValuesEmail(newFormValues)
    }
    
    const handleThresholdCountChange = (e) => { 
        console.log({ e });
        setthresholdcount(e.target.value);
    }

    useEffect(() => {
        let storeselopt = { label: singlerecord.storeName, value: singlerecord.storeId }
        let categoryselopt = { label: singlerecord.categoryName, value: singlerecord.categoryId }
        let typeselopt = { label: (singlerecord.rtncns == 1) ? 'Returnable' : 'Cosumeable', value: singlerecord.rtncns }
        let unitselopt = { label:singlerecord.unit,value:singlerecord.unitId }
        setitemname(singlerecord.itemName);
        setitemcost(singlerecord.mrp);
        setstorename(storeselopt);
        setcategoryname(categoryselopt);
        setthresholdcount(singlerecord.threshHold);
        setrtncns(typeselopt);
        setitemunit(unitselopt);
        setemaillist(singlerecord.emaillist);

    },[singlerecord]);

    const handleItemNameChange = (e) => {
        setitemname(e.target.value);
    };

    const handleItemCostChange = (e) => {
        setitemcost(e.target.value);
    }

    
    let removeFormFieldsItem = (i) => {
        let newFormValues = [...formValuesItem];
        newFormValues.splice(i, 1);
        setFormValuesItem(newFormValues)
    }

    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalHeading={'Edit New Product'}
            submitText='Save and Close'
            // actionText={'Save and Continue'}
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
                                    placeholder='--Select Store--'
                                    options={storelist}
                                    SelectedValue={setSelectValue}
                                    setSelectedvalue={storename}
                                />
                                <MultiSelect
                                    label='Select Category'
                                    error={true}
                                    options={categorylist}
                                    SelectedValue={setCategoryValue}
                                    setSelectedvalue={categoryname}
                                />
                                <Input
                                    type="text"
                                    label={'Alert Me If Item Count Falls Below'}
                                    placeholder={'Enter if item count falls below'}
                                    name='alert_count'
                                    required={true}
                                    error={errors.alert_count}
                                    value={thresholdcount}
                                    onChange={handleThresholdCountChange}
                                />
                                {formValuesEmail.map((element, index) => (
                                    <FieldDivider>
                                        <FieldLeftContainer1>
                                            <Input
                                                type="text"
                                                label={'Add Email IDs For Alert'}
                                                // options={options}
                                                placeholder={'Enter email address'}
                                                onChange={(e) => handleChange(index, 'email', e)}
                                                name='alert_email'
                                                required={true}
                                                error={errors.alert_email}
                                                value={emaillist}
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
                        {/* //{formValuesItem.map((element, index) => ( */}
                            <>
                                                <FieldDivider>
                                    <FieldLeftContainer1>
                                        <Input
                                            type="text"
                                            // options={options}
                                            label={'Name'}
                                            placeholder={'Enter name of the item'}
                                            onChange={handleItemNameChange}//index, 'name', e
                                            name='name_item'
                                            required={true}
                                            error={errors.name_item}
                                            value={itemname}
                                        />
                                    </FieldLeftContainer1>
                                    <FieldRightContainerItem>
                                        <Input
                                            type="text"
                                            placeholder={'Enter purchase cost'}
                                            label={'Purchase Cost'}
                                            name='purchase_cost'
                                            onChange={handleItemCostChange}
                                            required={true}
                                            error={errors.purchase_cost}
                                            value={itemcost}
                                        />
                                    </FieldRightContainerItem>
                                    {/* {
                                        index ?
                                            <RemoveContianer>
                                                <Button
                                                    className={'only-icon-button'}
                                                    onlyIcon={RemoveIcon}
                                                    onClick={() => removeFormFieldsItem(index)}
                                                />
                                            </RemoveContianer>
                                            : null
                                    } */}
                                </FieldDivider>
                                <FieldDivider>
                                    <FieldLeftContainer1>
                                        <SelectInput
                                            label='Select Unit'
                                        placeholder='--Select Unit--'
                                        options={unitlist}
                                        SelectedValue={setUnitSelectValue}
                                        setSelectedvalue={itemunit}
                                        />
                                    </FieldLeftContainer1>
                                    <FieldRightContainerItem>
                                        <SelectInput
                                            label='Rtn/Cns'
                                            placeholder='--Select Rtn/Cns--'
                                            options={typeOptions}
                                            SelectedValue={setTypeSelectValue}
                                            setSelectedvalue={rtncns}
                                        />
                                    </FieldRightContainerItem>
                                    {/* {
                                        index ?
                                            <RemoveContianer>
                                                <Button
                                                    className={'only-icon-button'}
                                                    onlyIcon={RemoveIcon}
                                                    onClick={() => removeFormFields(index)}
                                                />
                                            </RemoveContianer>
                                            : null
                                    } */}
                                </FieldDivider>
                            </>
                        {/* //))} */}
                                 {/* Add More field button */}
                                {/* <AddMoreField style={{ marginBottom: '14px' }}>
                                    <Link onClick={() => addItemFields()}>
                                        <img src={AddMoreIcon} alt="Icon" />
                                        <span>Add Another Item</span>
                                    </Link>
                                </AddMoreField> */}
                    </FieldDividerBottom>
                </>
            </form>
        </Modal>
    );
};

export default EditItems;