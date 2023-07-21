import React, { useState } from 'react';
import Modal from '../../../../../components/Modal/Modal';
import Input from '../../../../../components/Inputs/Input';
import { AddFormFieldInnerTab, AddFormFieldTab, AddFormFieldTabText, AddMoreField, FieldContainer, FieldDivider, FieldLeftContainer1,ModalBodyConatiner,RemoveContianer } from './AddRouteStyles';
import { Link } from 'react-router-dom';
import { Tab, Tabs } from 'react-bootstrap'


// Assets
import AddMoreIcon from '../../../../../images/add-more-icon.svg';
import Button from '../../../../../components/Buttons/Button';
import RemoveIcon from '../../../../../images/delete-icon.svg';
import PreviousCustomField from '../../../../../components/Table/PreviousCustomField';

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


const AddFormField = props => {

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

    let addFormFields = () => {
        setFormValues([...formValues, { stops: "", set_order: "" }])
    }

    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }

    const [tabKey, initTabKey] = useState('one')

    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalHeading={'Add Form Field(s)'}
            submitText='Confirm'
            cancelText='Cancel'
        >

            <AddFormFieldTab>
                <AddFormFieldTabText>
                    <AddFormFieldInnerTab>
                        <Tabs className='form-field-tab' activeKey={tabKey} onSelect={(e) => initTabKey(e)}>
                            <Tab className='form-field-tab-name' eventKey="one" title="Add New Form Field">
                                <p><form>
                                    <ModalBodyConatiner>
                                    <FieldContainer>
                                        <Input
                                            type="select"
                                            options={options}
                                            label={'Field Type'}
                                            placeholder={'----Select field type----'}
                                            name='field_type'
                                        />
                                    </FieldContainer>
                                    <FieldContainer>
                                        <Input
                                            type="text"
                                            placeholder={'Field Name'}
                                            label={'Field Name'}
                                            name={'field_name'}
                                        />
                                    </FieldContainer>
                                    {formValues.map((element, index) => (
                                        <FieldDivider>
                                            <FieldLeftContainer1>
                                                <Input
                                                    type='text'
                                                    label={'Option 1'}
                                                    placeholder={'Enter option'}
                                                    name='Option 1'
                                                    value={element.stops || ""}
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
                                    {/* Add More field button */}
                                    <AddMoreField>
                                        <Link onClick={() => addFormFields()}>
                                            <img src={AddMoreIcon} alt="Icon" />
                                            <span>Add Another Option</span>
                                        </Link>
                                    </AddMoreField>
                                    </ModalBodyConatiner>
                                </form></p>
                            </Tab>
                            <Tab eventKey="two" title="Previous Custom Fields">
                                <p>
                                <PreviousCustomField/>
                                </p>
                                
                            </Tab>
                        </Tabs>

                    </AddFormFieldInnerTab>
                </AddFormFieldTabText>
            </AddFormFieldTab>

        </Modal>
    );
};

export default AddFormField;