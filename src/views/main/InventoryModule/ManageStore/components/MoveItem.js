import React, { useState } from 'react';
import Modal from '../../../../../components/Modal/Modal';
import Input from '../../../../../components/Inputs/Input';
import { Link } from 'react-router-dom';
import { AddMoreField, FieldContainer, FieldContainerBottomLine, FieldContainerBottom, FieldDivider,FieldLeftContainer1, FieldRightContainer1, FieldRightContainerItem, RemoveContianer, FieldDividerBottom, FieldContainerMove, FieldDividerHeading, FieldDividerHeadingBottom, FiledDividerHeadingContent, DateInputContainer } from '../../../TransportModule/TransportRoute/components/AddRouteStyles';
import Select from 'react-select';

// Assets
import AddMoreIcon from '../../../../../images/add-more-icon.svg';
import Button from '../../../../../components/Buttons/Button';
import RemoveIcon from '../../../../../images/delete-icon.svg';
import DateInputField from '../../../../../components/DateInputField/DateInput';
import CustomDateInput from '../../../../../components/DateInputField/DateInput';
import SelectInput, { SelectInputContainer } from '../../../../../components/Inputs/Select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    ];

const MoveItem = props => {

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

    let handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formValues));
    }

    const handleSelectChange = (selectedValue) => {
        console.log('Selected value:', selectedValue);
    };

    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalHeading={'Move Items'}
            submitText='Confirm'
            cancelText='Cancel'
        >
            <form onSubmit={handleSubmit}>
            <FieldContainerBottom>
                <FieldContainerMove>
                    <SelectInput
                    label='Movement Type'
                    placeholder='---- Select movement type ----'
                    />
                    <DateInputContainer>
                        <CustomDateInput
                        width='100%'
                        />
                    </DateInputContainer>
                </FieldContainerMove>
            </FieldContainerBottom>
                <>
                <FieldContainerBottomLine>
                    <>
                    <FieldDividerHeading>
                    <span>Move Items From</span>
                    </FieldDividerHeading>
                    <FieldDivider>
                        <FieldLeftContainer1>
                            <SelectInput
                                label='From store'
                                placeholder='---- Select store ----'
                            />
                        </FieldLeftContainer1>
                        <FieldRightContainerItem>
                            <Input
                                type="text"
                                placeholder={'From Category'}
                                label={'From Category'}
                                name={'set_order'}
                            />
                        </FieldRightContainerItem>
                    </FieldDivider>
                    </>

                {formValues.map((element, index) => (
                    <FieldDivider>
                        <FieldLeftContainer1>
                            <SelectInput
                                type='select'
                                options={options}
                                label={'Select Items'}
                                placeholder={'---- Select items ----'}
                                name='stops'
                                value={element.stops || ""}
                                onChange={e => handleChange(index, e)}
                            />
                        </FieldLeftContainer1>
                        <FieldRightContainer1>
                            <Input
                                type="text"
                                placeholder={'Enter quantity'}
                                label={'Quantity'}
                                name={'set_order'}
                                value={element.set_order || ""}
                                onChange={e => handleChange(index, e)}
                            />
                        </FieldRightContainer1>
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

                {/* Add More field button */}
                <AddMoreField>
                    <Link onClick={() => addFormFields()}>
                        <img src={AddMoreIcon} alt="Icon" />
                        <span>Add Another Items</span>
                    </Link>
                </AddMoreField>
                </FieldContainerBottomLine>
                </>
                    <>
                    <FieldDividerBottom>
                    <FieldDividerHeading>
                    <span>Move Items From</span>
                    </FieldDividerHeading>
                    <FiledDividerHeadingContent>
                        <FieldLeftContainer1>
                            <SelectInput
                                type='select'
                                options={options}
                                label={'To Store'}
                                placeholder={'---- Select store ----'}
                                name='stops'
                            />
                        </FieldLeftContainer1>
                        <FieldRightContainerItem>
                            <Input
                                type="text"
                                placeholder={'Enter category'}
                                label={'To Category'}
                                name={'set_order'}
                            />
                        </FieldRightContainerItem>
                        </FiledDividerHeadingContent>
                    </FieldDividerBottom>
                    </>
            </form>
        </Modal>
    );
};

export default MoveItem;