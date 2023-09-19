import React, { useState } from 'react';
import Input from '../../../../../../components/Inputs/Input';
import { FieldContainer, ModalBodyConatiner } from '../../../../TransportModule/TransportRoute/components/AddRouteStyles';
import Modal from '../../../../../../components/Modal/Modal';
import TableStylesStatus from '../../../../../../components/Table copy/TableStyles';

const ReturnItemStaffModal = props => {
    const { show, handleClose, saveAction } = props;
    const [formValues, setFormValues] = useState(
        [
            {
                return_date: '',
                remarks_field: '',
            }
        ]
    )

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    // Validate Inputs
    const validate = () => {
        let fields = [
            {
                label: 'Return Date',
                key: 'return_date',
                required: true,
            },
            {
                label: 'Remarks',
                key: 'remarks_field',
                required: true,
            },

        ];

        let e = {};
        fields.forEach((field) => {
            if (
                field.required &&
                (formValues[field.key] === undefined ||
                    formValues[field.key] === null ||
                    formValues[field.key] === '')
            ) {
                e[field.key] = `Please enter ${field.label} `;
                return;
            }
        });

        setErrors(e);
        return Object.keys(e).length === 0;
    }


    // Inputs handle change
    const handleChange = (index, event) => {
        const { name, value } = event.target;
        let updatedFormValues = [...formValues];
        updatedFormValues[index][name] = value;
        setFormValues(updatedFormValues);
    };

    // OnSubmit Validate 
    const onSubmit = () => {
        let e = {};
        if (!validate()) {
            return;
        }
        setLoading(true);
        for (let i = 0; i < formValues.length; i++) {
        }

        // setLoading(true);
        // setTimeout(() => {
        //     window.location.reload();
        // }, 2000);
        // setLoading(false);
        // saveAction();

    }

    let addFormFields = () => {
        setFormValues([...formValues, { return_date: "", remarks_field: "" }])
    }

    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalHeading={props.id !== true ? 'Return Product(s)' : 'Add New Return Product'}
            submitText='Return'
            actionText={props.id !== true ? '' : 'Save and Continue'}
            cancelText='Cancel'
            saveAction={onSubmit}
            loading={loading}

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
                {formValues.map((element, index) => (
                    <>
                        <FieldContainer>
                            <Input
                                type="text"
                                label={'Return Date*'}
                                placeholder={'Enter Date on which item is returned'}
                                name={'return_date'}
                                value={formValues.return_date}
                                onChange={(e) => handleChange(index, e)}
                                required={true}
                                error={errors.return_date}
                            />
                        </FieldContainer>
                        <FieldContainer>
                            <Input
                                type="text"
                                label={'Remarks*'}
                                placeholder={'Enter Remarks here'}
                                name={'remarks_field'}
                                value={formValues.remarks_field}
                                onChange={(e) => handleChange(index, e)}
                                required={true}
                                error={errors.remarks_field}
                            />
                        </FieldContainer>
                    </>
                ))}
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