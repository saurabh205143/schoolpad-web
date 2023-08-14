import React, { useState } from 'react';
import Modal from '../../../../../components/Modal/Modal';
import Input from '../../../../../components/Inputs/Input';
import { Tab, Tabs } from 'react-bootstrap'

// Assets
import { AddFormFieldInnerTab, AddFormFieldTab, AddFormFieldTabText, FieldContainer, ModalBodyConatiner } from '../../TransportRoute/components/AddRouteStyles';
import ExistingCustomField from '../../../../../components/Table/ExistingCustomField';

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


const ManageFuelPump = props => {

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
            modalHeading={'Manage Fuel Pump(s)'}
            submitText='Confirm'
            cancelText='Cancel'
        >

            <AddFormFieldTab>
                <AddFormFieldTabText>
                    <AddFormFieldInnerTab>
                        <Tabs className='form-field-tab' activeKey={tabKey} onSelect={(e) => initTabKey(e)}>
                            <Tab className='form-field-tab-name' eventKey="one" title="Add New Fuel Pump">
                                <p><form>
                                    <ModalBodyConatiner>
                                    <FieldContainer>
                                        <Input
                                            type="text"
                                            placeholder={'Enter fuel pump name'}
                                            label={'Fuel Pump Name'}
                                            name={'field_name'}
                                        />
                                    </FieldContainer>
                                    </ModalBodyConatiner>
                                </form></p>
                            </Tab>
                            <Tab eventKey="two" title="Existing Fuel Pump(s)">
                                <p>
                                <ExistingCustomField/>
                                </p>
                                
                            </Tab>
                        </Tabs>
                    </AddFormFieldInnerTab>
                </AddFormFieldTabText>
            </AddFormFieldTab>

        </Modal>
    );
};

export default ManageFuelPump;