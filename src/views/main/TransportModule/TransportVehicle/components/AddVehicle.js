import React from 'react';
import Modal from '../../../../../components/Modal/Modal';
import Input from '../../../../../components/Inputs/Input';
import { FieldContainer, FieldDivider, FieldLeftContainer, FieldRightContainer } from '../../TransportRoute/components/AddRouteStyles';
import LeftIcon from '../../../../../images/phone-icon.svg';

const options = [
    { 
      value: 1,
      label: "Leanne Graham"
    },
    {
      value:  2,
      label: "Ervin Howell"
    }
];

const AddVehicle = props => {
    const {show,handleClose} = props;
    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalHeading={'Add New Vehicle'}
            submitText='Confirm'
        >
            <FieldContainer>
                <Input
                    type='text'
                    options={options}
                    label={'Vehicle Number'}
                    placeholder={'Enter vehicle number'}
                />
            </FieldContainer>
            <FieldContainer>
                <Input
                    type="text"
                    placeholder={'Enter vehicle capacity'}
                    label={'Vehicle Capacity'}
                    name={'bus_help'}
                />
            </FieldContainer>
            <FieldContainer>
                <Input
                    type="text"
                    placeholder={'Enter driver name'}
                    label={'Driver Name'}
                    name={'bus_help'}
                />
            </FieldContainer>
            <FieldContainer>
                <Input
                    type="text"
                    placeholder={'Enter contact number'}
                    label={'Driver Contact Number'}
                    name={'bus_help'}
                    leftIcon={LeftIcon}
                />
            </FieldContainer>
            <FieldContainer>
                <Input
                    type="text"
                    placeholder={'Enter helper name'}
                    label={'Helper Name'}
                    name={'bus_help'}
                />
            </FieldContainer>
            <FieldContainer>
                <Input
                    type="text"
                    placeholder={'Enter contact number'}
                    label={'Helper Contact Number'}
                    leftIcon={LeftIcon}
                    name={'bus_help'}
                />
            </FieldContainer>
            <FieldContainer>
                <Input
                    type="text"
                    placeholder={'Enter serial number'}
                    label={'Serial Number'}
                    name={'bus_help'}
                />
            </FieldContainer>
            <FieldContainer>
                <Input
                    type="text"
                    placeholder={'Enter year'}
                    label={'Year'}
                    name={'bus_help'}
                />
            </FieldContainer>
            <FieldContainer>
                <Input
                    type="text"
                    placeholder={'Enter make'}
                    label={'Make'}
                    name={'bus_help'}
                />
            </FieldContainer>
            <FieldContainer>
                <Input
                    type="text"
                    placeholder={'Enter model'}
                    label={'Model'}
                    name={'bus_help'}
                />
            </FieldContainer>
            <FieldContainer>
                <Input
                    type="text"
                    placeholder={'Enter engine'}
                    label={'Engine'}
                    name={'bus_help'}
                />
            </FieldContainer>
            <FieldContainer>
                <Input
                    type="select"
                    placeholder={'---- Select fuel type ----'}
                    label={'Fuel Type'}
                    name={'bus_help'}
                    options={options}
                />
            </FieldContainer>
            <FieldContainer>
                <Input
                    type="select"
                    placeholder={'---- Select status ----'}
                    label={'Status'}
                    name={'bus_help'}
                    options={options}
                />
            </FieldContainer>
        </Modal>
    );
};

export default AddVehicle;