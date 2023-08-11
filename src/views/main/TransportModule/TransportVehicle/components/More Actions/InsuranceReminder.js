import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap'

// Assets
import Modal from '../../../../../../components/Modal/Modal';
import Input from '../../../../../../components/Inputs/Input';
import { AddFormFieldInnerTab, AddFormFieldTab, AddFormFieldTabText, DateInputContainer, FieldDivider, FieldLeftContainer1, FieldRightContainerItem, ModalBodyConatiner } from '../../../TransportRoute/components/AddRouteStyles';
import SelectInput from '../../../../../../components/Inputs/Select';
import CustomDateInput from '../../../../../../components/DateInputField/DateInputField';
import ExistingFuelEntry from './ExistingFuelEntry';

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


const InsuranceReminder = props => {

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
      modalHeading={'Insurance Reminder(s)'}
      submitText='Confirm'
      cancelText='Cancel'
    >

      <AddFormFieldTab>
        <AddFormFieldTabText>
          <AddFormFieldInnerTab>
            <Tabs className='form-field-tab' activeKey={tabKey} onSelect={(e) => initTabKey(e)}>
              <Tab className='form-field-tab-name' eventKey="one" title="Add New Insurance Reminder">
                <p><form>
                  <ModalBodyConatiner>
                    <FieldDivider>
                      <FieldLeftContainer1>
                        <Input
                          type="text"
                          options={options}
                          label={'Insurance Date*'}
                          placeholder={'Enter insurance date'}
                          name='stops'
                        />
                      </FieldLeftContainer1>
                      <FieldRightContainerItem>
                        <Input
                          type="text"
                          placeholder={'Enter amount'}
                          label={'Amount*'}
                          name={'set_order'}

                        />
                      </FieldRightContainerItem>
                    </FieldDivider>
                    <FieldDivider>
                    <FieldLeftContainer1>
                    <Input
                          type="text"
                          placeholder={'Enter premium amount'}
                          label={'Premium Amount*'}
                          name={'set_order'}

                        />
                        </FieldLeftContainer1>
                      <FieldRightContainerItem>
                        <Input
                          type="text"
                          placeholder={'Enter insurance company'}
                          label={'Insurance Company*'}
                          name={'set_order'}

                        />
                      </FieldRightContainerItem>
                    </FieldDivider>
                    <FieldDivider>
                      <FieldLeftContainer1>
                        <Input
                          type="text"
                          options={options}
                          label={'Agency Name*'}
                          placeholder={'Enter agency name'}
                          name='stops'
                        />
                      </FieldLeftContainer1>
                      <FieldRightContainerItem>
                        <Input
                          type="text"
                          placeholder={'Enter insurance name'}
                          label={'Insurance Name*'}
                          name={'set_order'}
                        />
                      </FieldRightContainerItem>
                    </FieldDivider>
                    <FieldDivider>
                      <FieldLeftContainer1>
                        <Input
                          type="text"
                          options={options}
                          label={'Agent Name*'}
                          placeholder={'Enter agent name'}
                          name='stops'
                        />
                      </FieldLeftContainer1>
                      <FieldRightContainerItem>
                        <Input
                          type="text"
                          placeholder={'Enter address'}
                          label={'Address*'}
                          name={'set_order'}
                        />
                      </FieldRightContainerItem>
                    </FieldDivider>
                    <FieldDivider>
                      <FieldLeftContainer1>
                        <Input
                          type="text"
                          options={options}
                          label={'Contact No.*'}
                          placeholder={'Enter contact no.'}
                          name='stops'
                        />
                      </FieldLeftContainer1>
                      <FieldRightContainerItem>
                        <Input
                          type="text"
                          placeholder={'Enter email id'}
                          label={'Email Id*'}
                          name={'set_order'}
                        />
                      </FieldRightContainerItem>
                    </FieldDivider>
                    <FieldDivider>
                      <FieldLeftContainer1>
                        <Input
                          type="text"
                          options={options}
                          label={'Remind After Every*'}
                          placeholder={'Enter remind after every'}
                          name='stops'
                        />
                      </FieldLeftContainer1>
                      <FieldRightContainerItem>
                        <Input
                          type="text"
                          placeholder={'Enter reminder type'}
                          label={'Reminder Type*'}
                          name={'set_order'}
                        />
                      </FieldRightContainerItem>
                    </FieldDivider>
                  </ModalBodyConatiner>
                </form></p>
              </Tab>
              <Tab eventKey="two" title="Existing Insurance Reminder">
                <p>
                <ExistingFuelEntry/>
                </p>
              </Tab>
            </Tabs>
          </AddFormFieldInnerTab>
        </AddFormFieldTabText>
      </AddFormFieldTab>
    </Modal>
  );
};

export default InsuranceReminder;