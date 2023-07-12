import React, { useState } from 'react';
import Modal from '../../../../../components/Modal/Modal';
import Input from '../../../../../components/Inputs/Input';
import { Link } from 'react-router-dom';
import { AddMoreField, FieldContainer, FieldContainerBottomLine, FieldDivider, FieldLeftContainer, FieldLeftContainer1, FieldRightContainer, FieldRightContainer1, RemoveContianer } from '../../../TransportModule/TransportRoute/components/AddRouteStyles';

// Assets
import AddMoreIcon from '../../../../../images/add-more-icon.svg';
import Button from '../../../../../components/Buttons/Button';
import RemoveIcon from '../../../../../images/remove-icon.svg';
import RightIcon from '../../../../../images/date-icon.svg';

const options = [
    {
        value: 1,
        label: "Leanne Graham"
    },
    {
        value: 2,
        label: "Ervin Howell"
    }
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

    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalHeading={'Move Items'}
            submitText='Confirm'
            cancelText='Cancel'
        >
            <form onSubmit={handleSubmit}>
                <FieldContainer>
                    <Input
                        type='select'
                        options={options}
                        label={'Movement Type'}
                        placeholder={'---- Select movement type ----'}
                        name='staff_member'
                    />
                </FieldContainer>
                <FieldContainer>
                    <Input
                        type="text"
                        placeholder={'Date'}
                        label={'Date'}
                        name={'route_name'}
                        rightIcon={RightIcon}
                    />
                </FieldContainer>
                {/* <FieldContainerBottomLine>
                </FieldContainerBottomLine> */}
                {formValues.map((element, index) => (
                    <FieldDivider>
                        <FieldLeftContainer1>
                            <Input
                                type='select'
                                options={options}
                                label={'From Store'}
                                placeholder={'---- Select from Store ----'}
                                name='stops'
                                value={element.stops || ""}
                                onChange={e => handleChange(index, e)}
                            />
                        </FieldLeftContainer1>
                        <FieldRightContainer1>
                            <Input
                                type="text"
                                placeholder={'From Category'}
                                label={'From Category'}
                                name={'set_order'}
                                value={element.set_order || ""}
                                onChange={e => handleChange(index, e)}
                            />
                        </FieldRightContainer1>
                    </FieldDivider>
                    
                ))}
                {formValues.map((element, index) => (
                    <FieldDivider>
                        <FieldLeftContainer1>
                            <Input
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
                        <span>Add Another</span>
                    </Link>
                </AddMoreField>
                {formValues.map((element, index) => (
                    <FieldDivider>
                        <FieldLeftContainer1>
                            <Input
                                type='select'
                                options={options}
                                label={'To Store'}
                                placeholder={'---- Select store ----'}
                                name='stops'
                                value={element.stops || ""}
                                onChange={e => handleChange(index, e)}
                            />
                        </FieldLeftContainer1>
                        <FieldRightContainer1>
                            <Input
                                type="text"
                                placeholder={'Enter category'}
                                label={'To Category'}
                                name={'set_order'}
                                value={element.set_order || ""}
                                onChange={e => handleChange(index, e)}
                            />
                        </FieldRightContainer1>
                    </FieldDivider>
                    
                ))}
            </form>
        </Modal>
    );
};

export default MoveItem;