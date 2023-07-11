import React, { useState } from 'react';
import Modal from '../../../../../components/Modal/Modal';
import Input from '../../../../../components/Inputs/Input';
import { FieldContainer } from '../../../TransportModule/TransportRoute/components/AddRouteStyles';

const AddStore = props => {

    const { show, handleClose } = props;

    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalHeading={'Add New Store'}
            submitText='Confirm'
            cancelText='Cancel'
        >
            <form>
                <FieldContainer>
                    <Input
                        type="text"
                        label={'Store Name*'}
                        placeholder={'---- Enter store name ----'}
                        name='store_name'
                    />
                </FieldContainer>
                <FieldContainer>
                    <Input
                        type="text"
                        placeholder={'---- Enter store code ----'}
                        label={'Store Code*'}
                        name={'store_code'}
                    />
                </FieldContainer>
                <FieldContainer>
                    <Input
                        type="text"
                        placeholder={'---- Enter store description ----'}
                        label={'Store Description*'}
                        name={'store_description'}
                    />
                </FieldContainer>
                <FieldContainer>
                    <Input
                        type="text"
                        placeholder={'---- Enter store manager ----'}
                        label={'Store Manager*'}
                        name={'store_manager'}
                    />
                </FieldContainer>
            </form>
        </Modal>
    );
};

export default AddStore;