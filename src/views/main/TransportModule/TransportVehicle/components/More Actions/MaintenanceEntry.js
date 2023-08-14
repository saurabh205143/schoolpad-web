import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap'
import { Link } from 'react-router-dom';

// Assets
import Modal from '../../../../../../components/Modal/Modal';
import Input from '../../../../../../components/Inputs/Input';
import { AddFormFieldInnerTab, AddFormFieldTab, AddFormFieldTabText, AddMoreField, DateInputContainer, FieldDivider, FieldLeftContainer1, FieldRightContainerItem, ModalBodyConatiner, RemoveContianer } from '../../../TransportRoute/components/AddRouteStyles';
import SelectInput from '../../../../../../components/Inputs/Select';
import CustomDateInput from '../../../../../../components/DateInputField/DateInputField';
import ExistingFuelEntry from './ExistingFuelEntry';
import Button from '../../../../../../components/Buttons/Button';
import AddMoreIcon from '../../../../../../images/add-more-icon.svg';
import RemoveIcon from '../../../../../../images/delete-icon.svg';
import DragAndDropUpload from '../../../../../../components/UploadDragDropFile/UploadDragDropStyle';

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


const MaintenanceEntry = props => {

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
      modalHeading={'Maintenance Entry'}
      submitText='Confirm'
      cancelText='Cancel'
    >

      <AddFormFieldTab>
        <AddFormFieldTabText>
          <AddFormFieldInnerTab>
            <Tabs className='form-field-tab' activeKey={tabKey} onSelect={(e) => initTabKey(e)}>
              <Tab className='form-field-tab-name' eventKey="one" title="Add New Maintenance Entry">
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
                        <SelectInput
                          type="select"
                          placeholder={'---- Select maintenance type ----'}
                          label={'Maintenance Type'}
                          name={'set_order'}

                        />
                      </FieldRightContainerItem>
                    </FieldDivider>
                    {formValues.map((element, index) => (
                                    <FieldDivider>
                                        <FieldLeftContainer1>
                                            <Input
                                                type="text"
                                                label={'Expenditure'}
                                                options={options}
                                                placeholder={'Enter option 1'}
                                                name='store_name'
                                                // onChange={e => handleChange(index, e)}
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
                            <AddMoreField style={{ marginBottom: '14px' }}>
                                <Link onClick={() => addFormFields()}>
                                    <img src={AddMoreIcon} alt="Icon" />
                                    <span>Add Another</span>
                                </Link>
                            </AddMoreField>
                    <FieldDivider>
                    <FieldLeftContainer1>
                    <Input
                          type="text"
                          placeholder={'Enter total expenditure'}
                          label={'Total Expenditure'}
                          name={'set_order'}

                        />
                        </FieldLeftContainer1>
                      <FieldRightContainerItem>
                        <Input
                          type="text"
                          placeholder={'Enter employee'}
                          label={'Employee'}
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
                    <DragAndDropUpload/>
                  </ModalBodyConatiner>
                </form></p>
              </Tab>
              <Tab eventKey="two" title="Existing Maintenance Entry">
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

export default MaintenanceEntry;