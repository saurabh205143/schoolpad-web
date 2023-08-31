import React, { useState } from 'react';
import Modal from '../../../../../components/Modal/Modal';
import Input from '../../../../../components/Inputs/Input';
import { AddMoreField, FieldContainer, FieldDivider, FieldLeftContainer, FieldLeftContainer1, FieldRightContainer, FieldRightContainer1, ModalBodyConatiner, RemoveContianer } from './AddRouteStyles';
import { Link } from 'react-router-dom';



const AddGpsLinkModal = props => {
    console.log(props.id);

    const { show, handleClose } = props;
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [formValues, setFormValues] = useState(
        [
            {
                gps_link: "",
            }
        ]
    )
// Validate Inputs
const validate = () => {
    let fields = [
        {
            label: 'GPS Link',
            key: 'gps_link',
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
};
    const handleChange = (e) => {
        let i = [...formValues];
        i[e.target.name] = e.target.value;
        setFormValues(i);
    }

    let handleSubmit = () => {
        if (!validate()) {
            return;
        }
        setLoading(true);
    }

    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalHeading={'Add GPS Link'}
            submitText='Save'
            cancelText='Cancel'
            saveAction={handleSubmit}
        >
            <form >
                <ModalBodyConatiner>
                    <FieldContainer>
                        <Input
                            type="text"
                            placeholder={'Enter Link'}
                            label={'GPS Link'}
                            name={'gps_link'}
                            value={formValues.gps_link}
                            error={errors.gps_link}
                            onChange={handleChange}
                        />
                    </FieldContainer>
                </ModalBodyConatiner>
            </form>
        </Modal>
    );
};

export default AddGpsLinkModal;