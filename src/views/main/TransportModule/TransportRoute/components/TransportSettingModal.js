import React, { useState } from 'react';
import Modal from '../../../../../components/Modal/Modal';
import Input from '../../../../../components/Inputs/Input';
import { AddMoreField, FieldContainer, FieldDivider, FieldLeftContainer, FieldLeftContainer1, FieldRightContainer, FieldRightContainer1, ModalBodyConatiner, RemoveContianer } from './AddRouteStyles';
import { Link } from 'react-router-dom';
import SelectInput from '../../../../../components/Inputs/Select';

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

const TransportSettingModal = props => {
    console.log(props.id);

    const { show, handleClose } = props;
    

    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalHeading={'Transport Settings'}
            submitText='Save'
            cancelText='Cancel'
            
        >
            <form >
                <ModalBodyConatiner>
                    <FieldContainer>
                        <SelectInput
                            label='Track bus Link'
                            placeholder='---- Select staff member ----'
                            options={options}                            
                        />
                    </FieldContainer>
                </ModalBodyConatiner>
            </form>
        </Modal>
    );
};

export default TransportSettingModal;