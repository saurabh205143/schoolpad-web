import React from 'react';
import Input from '../../../../../../components/Inputs/Input';
import { FieldContainer, ModalBodyConatiner } from '../../../../TransportModule/TransportRoute/components/AddRouteStyles';
import Modal from '../../../../../../components/Modal/Modal';
import TableStylesStatus from '../../../../../../components/Table copy/TableStyles';
import { Tabledata } from '../../../../../../components/Table/TableStyles';

const ReturnItemStaffModal = props => {
    const { show, handleClose,saveAction } = props;

    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalHeading={props.id !== true ? 'Return Item(s)' : 'Add New Stop'}
            submitText='Return'
            actionText={props.id !== true ? '' : 'Save and Continue'}
            cancelText='Cancel'
            // saveAction={saveAction}
            
        >
            <ModalBodyConatiner>
                <FieldContainer>
                    <Input
                      type="text"
                      placeholder={'Vehicle capacity'}
                      label={'Item Name'}
                      name={'vehicle_capacity'}
                      value='Laptop'
                      disabled={true}
                    />
                    
                </FieldContainer>
                <FieldContainer>
                    <Input
                        type="text"
                        label={'Return Date*'}
                        placeholder={'Enter Date on which item is returned'}
                    />
                    
                </FieldContainer>
                <FieldContainer>
                    <Input
                        type="text"
                        label={'Remarks*'}
                        placeholder={'Enter Remarks here'}
                    />
                    
                </FieldContainer>
                <FieldContainer>
                    <TableStylesStatus
                      type='item-type-returnable'
                      statusType='PAID'
                    />
                </FieldContainer>
            </ModalBodyConatiner>
        </Modal>
    );
};

export default ReturnItemStaffModal;