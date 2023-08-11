import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap'

// Assets
import Modal from '../../../../../../components/Modal/Modal';
import Input from '../../../../../../components/Inputs/Input';
import { AddFormFieldInnerTab, AddFormFieldTab, AddFormFieldTabText, DateInputContainer, FieldContainer, FieldDivider, FieldLeftContainer1, FieldRightContainerItem, ModalBodyConatiner } from '../../../TransportRoute/components/AddRouteStyles';
import SelectInput from '../../../../../../components/Inputs/Select';
import CustomDateInput from '../../../../../../components/DateInputField/DateInputField';
import ExistingCustomField from '../../../../../../components/Table/ExistingCustomField';
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


const FuelEntry = props => {

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
      modalHeading={'Fuel Entry(s)'}
      submitText='Confirm'
      cancelText='Cancel'
    >

      <AddFormFieldTab>
        <AddFormFieldTabText>
          <AddFormFieldInnerTab>
            <Tabs className='form-field-tab' activeKey={tabKey} onSelect={(e) => initTabKey(e)}>
              <Tab className='form-field-tab-name' eventKey="one" title="Add New Fuel Entry">
                <p><form>
                  <ModalBodyConatiner>
                    <FieldDivider>
                      <FieldLeftContainer1>
                      <DateInputContainer>
                        <CustomDateInput
                        width='100%'
                        />
                    </DateInputContainer>
                      </FieldLeftContainer1>
                      <FieldRightContainerItem>
                        <Input
                          type="text"
                          placeholder={'Enter litre(s)'}
                          label={'Litre(s)'}
                          name={'set_order'}

                        />
                      </FieldRightContainerItem>
                    </FieldDivider>
                    <FieldDivider>
                      <FieldLeftContainer1>
                        <Input
                          type="text"
                          options={options}
                          label={'Price Per Litre'}
                          placeholder={'Enter price per litre'}
                          name='stops'
                        />
                      </FieldLeftContainer1>
                      <FieldRightContainerItem>
                        <Input
                          type="text"
                          placeholder={'Enter refilled by'}
                          label={'Refilled By'}
                          name={'set_order'}

                        />
                      </FieldRightContainerItem>
                    </FieldDivider>
                    <FieldDivider>
                    <FieldLeftContainer1>
                            <SelectInput
                                label='Fuel Pump'
                                placeholder='---- Select fuel pump ----'
                            />
                        </FieldLeftContainer1>
                      <FieldRightContainerItem>
                        <Input
                          type="text"
                          placeholder={'Enter km reading'}
                          label={'KM Reading'}
                          name={'set_order'}

                        />
                      </FieldRightContainerItem>
                    </FieldDivider>
                    <FieldDivider>
                      <FieldLeftContainer1>
                        <Input
                          type="text"
                          options={options}
                          label={'Voucher No.'}
                          placeholder={'Enter voucher no.'}
                          name='stops'
                        />
                      </FieldLeftContainer1>
                      <FieldRightContainerItem>
                        <Input
                          type="text"
                          placeholder={'Enter remarks'}
                          label={'Remarks'}
                          name={'set_order'}

                        />
                      </FieldRightContainerItem>
                    </FieldDivider>
                  </ModalBodyConatiner>
                </form></p>
              </Tab>
              <Tab eventKey="two" title="Existing Fuel Entry">
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

export default FuelEntry;