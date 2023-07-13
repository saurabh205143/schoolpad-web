import React, { useState } from 'react';
import Modal from '../../../../../components/Modal/Modal';
import Input from '../../../../../components/Inputs/Input';
import { FieldContainer } from '../../../TransportModule/TransportRoute/components/AddRouteStyles';

const AddCategories = props => {

    const { show, handleClose } = props;

    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalHeading={'Add New Category'}
            submitText='Confirm'
            cancelText='Cancel'
        >
            <form>
                <FieldContainer>
                    <Input
                        type="text"
                        label={'Category Name*'}
                        placeholder={'---- Enter store name ----'}
                        name='store_name'
                    />
                </FieldContainer>
                <FieldContainer>
                    <Input
                        type="text"
                        placeholder={'---- Enter store code ----'}
                        label={'Category Code*'}
                        name={'store_code'}
                    />
                </FieldContainer>
            </form>
        </Modal>
    );
};

export default AddCategories;