import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap'

// Assets
import Modal from '../../../../../../components/Modal/Modal';
import Input from '../../../../../../components/Inputs/Input';
import { AddFormFieldInnerTab, AddFormFieldTab, AddFormFieldTabText, DateInputContainer, FieldContainer, FieldDivider, FieldLeftContainer1, FieldRightContainerItem, ModalBodyConatiner } from '../../../TransportRoute/components/AddRouteStyles';
import SelectInput from '../../../../../../components/Inputs/Select';
import ExistingCustomField from '../../../../../../components/Table/ExistingCustomField';
import ExistingFuelEntry from './ExistingFuelEntry';
import ExistingDailyLog from './ExistingDailyLog';
import DragAndDropUpload from '../../../../../../components/UploadDragDropFile/UploadDragDropStyle';
import UploadDragDrop from '../../../../../../components/UploadDragDropFile/UploadDragDrop';
import DateInput from '../../../../../../components/DateInputField/DateInput';

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


const DailyLog = props => {

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
      modalHeading={'Daily Log'}
      submitText='Confirm'
      cancelText='Cancel'
    >

      <AddFormFieldTab>
        <AddFormFieldTabText>
          <AddFormFieldInnerTab>
            <Tabs className='form-field-tab' activeKey={tabKey} onSelect={(e) => initTabKey(e)}>
              <Tab className='form-field-tab-name' eventKey="one" title="Add Daily Log">
                <p><form>
                  <ModalBodyConatiner>
                  <FieldContainer>
                    <Input
                        type="text"
                        label={'Starting KM*'}
                        placeholder={'Enter starting km'}
                        name='store_name'
                    />
                </FieldContainer>
                <FieldContainer>
                    <Input
                        type="text"
                        placeholder={'Enter ending km'}
                        label={'Ending KM*'}
                        name={'store_code'}
                    />
                </FieldContainer>
                    <FieldDivider>
                      <FieldLeftContainer1>
                      <DateInputContainer>
                        <DateInput
                        width='100%'
                        />
                    </DateInputContainer>
                      </FieldLeftContainer1>
                      <FieldRightContainerItem>
                        <DateInputContainer>
                        <DateInput
                        width='100%'
                        />
                    </DateInputContainer>
                      </FieldRightContainerItem>
                    </FieldDivider>
                    <FieldDivider>
                      <FieldLeftContainer1>
                      <DateInputContainer>
                      <DateInput
                        width='100%'
                        />
                    </DateInputContainer>
                      </FieldLeftContainer1>
                      <FieldRightContainerItem>
                        <DateInputContainer>
                        <DateInput
                        width='100%'
                        />
                    </DateInputContainer>
                      </FieldRightContainerItem>
                    </FieldDivider>
                    <FieldDivider>
                      <FieldLeftContainer1>
                      <DateInputContainer>
                      <DateInput
                        width='100%'
                        />
                    </DateInputContainer>
                      </FieldLeftContainer1>
                      <FieldRightContainerItem>
                        <DateInputContainer>
                        <DateInput
                        width='100%'
                        />
                    </DateInputContainer>
                      </FieldRightContainerItem>
                    </FieldDivider>
                    <FieldContainer>
                    <Input
                        type="text"
                        label={'Remarks*'}
                        placeholder={'Enter remarks'}
                        name='store_name'
                    />
                </FieldContainer>
                <UploadDragDrop/>
                  </ModalBodyConatiner>
                </form></p>
              </Tab>
              <Tab eventKey="two" title="Existing Daily Log">
                <p>
                <ExistingDailyLog/>
                </p>

              </Tab>
            </Tabs>
          </AddFormFieldInnerTab>
        </AddFormFieldTabText>
      </AddFormFieldTab>
    </Modal>
  );
};

export default DailyLog;