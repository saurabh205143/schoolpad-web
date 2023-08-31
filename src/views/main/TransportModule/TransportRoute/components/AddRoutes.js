import React, { useCallback, useState } from 'react';
import Modal from '../../../../../components/Modal/Modal';
import Input from '../../../../../components/Inputs/Input';
import { AddMoreField, FieldContainer, FieldDivider, FieldLeftContainer, FieldLeftContainer1, FieldRightContainer, FieldRightContainer1, ModalBodyConatiner, RemoveContianer } from './AddRouteStyles';
import { Link } from 'react-router-dom';

// Assets
import AddMoreIcon from '../../../../../images/add-more-icon.svg';
import Button from '../../../../../components/Buttons/Button';
import RemoveIcon from '../../../../../images/delete-icon.svg';
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

const AddRoutes = props => {

    const { show, handleClose } = props;
    const [formValues, setFormValues] = useState(
            [{
                staff_members: "",
                route_name: "",
                stops: "",
                set_order: "",
                vehicle_number: "",              
            }]
    );
    console.log(formValues);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    // Validate Inputs
    const validate = () => {
        let fields = [
            {
                label: 'Staff Memmbers',
                key: 'staff_members',
                required: true,
            },
            {
                label: 'Route Name',
                key: 'route_name',
                required: true,
            },
            {
                label: 'Stops',
                key: 'stops',
                required: true,
            },
            {
                label: 'Set Order',
                key: 'set_order',
                required: true,
            },
            {
                label: 'Vehicle Number',
                key: 'vehicle_number',
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
// Inputs handle change
const onhandleChange = (e) => {
    let i = { ...formValues };
    i[e.target.name] = e.target.value;
    setFormValues(i);
};
    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
    }

    let addFormFields = () => {
        setFormValues([...formValues, { stops: "", set_order: "" }])
    }

    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }
    
    let handleSubmit = (event) => {
        event.preventDefault();
        if (!validate()) {
            return;
        }
        setLoading(true);
        alert(JSON.stringify(formValues));
    }

    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalHeading={'Add New Route'}
            submitText='Confirm'
            cancelText='Cancel'
            saveAction={handleSubmit}
            loading={loading}
        >
            <form onSubmit={handleSubmit}>
                <ModalBodyConatiner>
                <FieldContainer>
                    <SelectInput
                        label='Staff Memmbers'
                        placeholder='---- Select staff member ----'
                        options={options}
                        value={formValues.staff_members}
                        name="staff_members"
                        selectedKey={formValues.staff_members}
                        onChange={({value}) => setFormValues(value)}
                         error={errors.staff_members}
                        required={true}
                     />
                </FieldContainer>
                <FieldContainer>
                    <Input
                        type="text"
                        placeholder={'Route name'}
                        label={'Route Name'}
                        name={'route_name'}
                        value={formValues.route_name}
                        onChange={onhandleChange}
                        error={errors.route_name}
                        required={true}
                        
                    />
                </FieldContainer>
                {formValues.map((element, index) => (
                    <FieldDivider>
                        <FieldLeftContainer1>
                            <Input
                                type='select'
                                options={options}
                                label={'Stops'}
                                placeholder={'---- Select stops ----'}
                                name='stops'
                                value={element.stops || ""}
                                onChange={e => handleChange(index, e)}
                            />
                        </FieldLeftContainer1>
                        <FieldRightContainer1>
                            <Input
                                type="text"
                                placeholder={'Set order'}
                                label={'Order'}
                                name={'set_order'}
                                value={element.set_order || ""}
                                onChange={e => handleChange(index, e)}
                            />
                        </FieldRightContainer1>
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
                {/* <AddMoreField>
                    <Link onClick={() => addFormFields()}>
                        <img src={AddMoreIcon} alt="Icon" />
                        <span>Add Another Stop</span>
                    </Link>
                </AddMoreField> */}
                <FieldDivider>
                    <FieldLeftContainer>
                        <Input
                            type='text'
                            name={'vehicle_number'}
                            label={'Vehicle Number'}
                            placeholder={'Vehicle number'}
                            value={formValues.vehicle_number}
                        onChange={onhandleChange}
                        error={errors.vehicle_number}
                        required={true}
                        />
                    </FieldLeftContainer>
                    <FieldRightContainer>
                        <Input
                            type="text"
                            placeholder={'Vehicle capacity'}
                            label={'Vehicle Capacity'}
                            name={'vehicle_capacity'}
                            value='25'
                            disabled={true}
                        />
                    </FieldRightContainer>
                </FieldDivider>
                <FieldContainer>
                    <Input
                        type="text"
                        placeholder={'Helpline number'}
                        label={'Bus Help'}
                        name={'bus_help'}
                    />
                </FieldContainer>
                </ModalBodyConatiner>
            </form>
        </Modal>
    );
};

export default AddRoutes;