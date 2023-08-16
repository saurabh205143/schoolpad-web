import React from 'react';
import Modal from '../../../../../components/Modal/Modal';
import { FieldContainer, ModalBodyConatiner } from '../../TransportRoute/components/AddRouteStyles';
import Input from '../../../../../components/Inputs/Input';

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

const AddStopMaster = props => {

    const {show,handleClose,saveAction} = props;
    console.log(props.id);

    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalHeading={'Add New Stop'}
            submitText='Save and Close'
            actionText='Save and Continue'
            cancelText='Cancel'
            saveAction={saveAction}
            
        >
        <ModalBodyConatiner>
        <FieldContainer>
                <Input
                    type='text'
                    options={options}
                    label={'Stop Name'}
                    placeholder={'Enter stop name'}
                />
            </FieldContainer>
            <FieldContainer>
                <Input
                    type="text"
                    placeholder={'Enter stop abbreviation'}
                    label={'Stop Abbreviation'}
                    name={'bus_help'}
                />
            </FieldContainer>
        </ModalBodyConatiner>
        </Modal>
    );
};

export default AddStopMaster;