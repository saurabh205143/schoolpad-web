import React from 'react';
import Modal from '../../../../../components/Modal/Modal';
import Input from '../../../../../components/Inputs/Input';
import LeftIcon from '../../../../../images/phone-icon.svg';
import { FieldContainer, ModalBodyConatiner } from '../../../TransportModule/TransportRoute/components/AddRouteStyles';

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

const AddVendor = props => {
    const {show,handleClose} = props;
    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalHeading={'Add New Vendor'}
            submitText='Confirm'
            cancelText='Cancel'
        >
            <ModalBodyConatiner>
            <FieldContainer>
                <Input
                    type='text'
                    options={options}
                    label={'Vendor Name*'}
                    placeholder={'Enter vendor name'}
                />
            </FieldContainer>
            <FieldContainer>
                <Input
                    type="text"
                    placeholder={'Enter vendor code'}
                    label={'Vendor Code*'}
                    name={'bus_help'}
                />
            </FieldContainer>
            <FieldContainer>
                <Input
                    type="text"
                    placeholder={'Enter contact number'}
                    label={'Contact No.*'}
                    name={'bus_help'}
                    leftIcon={LeftIcon}
                />
            </FieldContainer>
            <FieldContainer>
                <Input
                    type="text"
                    placeholder={'Enter gst no'}
                    label={'GST No.*'}
                    name={'bus_help'}
                />
            </FieldContainer>
            <FieldContainer>
                <Input
                    type="text"
                    placeholder={'Enter region'}
                    label={'Region*'}
                    name={'bus_help'}
                />
            </FieldContainer>
            <FieldContainer>
                <Input
                    type="textarea"
                    placeholder={'Enter vendor address'}
                    label={'Address'}
                    name={'bus_help'}
                />
            </FieldContainer>
            </ModalBodyConatiner>
        </Modal>
    );
};

export default AddVendor;