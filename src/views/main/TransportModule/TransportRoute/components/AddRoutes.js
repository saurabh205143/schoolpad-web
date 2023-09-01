import React, { useState } from 'react';
import Modal from '../../../../../components/Modal/Modal';
import Input from '../../../../../components/Inputs/Input';
import { AddMoreField, FieldContainer, FieldDivider, FieldLeftContainer, FieldLeftContainer1, FieldRightContainer, FieldRightContainer1, ModalBodyConatiner, RemoveContianer } from './AddRouteStyles';
import { Link } from 'react-router-dom';

// Assets
import AddMoreIcon from '../../../../../images/add-more-icon.svg';
import Button from '../../../../../components/Buttons/Button';
import RemoveIcon from '../../../../../images/delete-icon.svg';
import SelectInput from '../../../../../components/Inputs/Select';
import MultiSelectDropDown from '../../../../../components/Inputs/MultiSelectDropDown';

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

const options1 = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    // Add more options as needed
  ];

const AddRoutes = props => {
    console.log(props.id);

    const { show, handleClose } = props;
    const [formValues, setFormValues] = useState(
        [
            {
                staff_member: "",
                route_name: "",
                stops: "",
                set_order: "",
                vehicle_number: "",
                vehicle_capacity: "",
                bus_help: "",
            }
        ]
    )

    let handleChange = (e) => {
        let newFormValues = [...formValues];
        newFormValues[e.target.name] = e.target.value;
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
        alert(JSON.stringify(formValues));
    }

    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalHeading={'Add New Route'}
            submitText='Confirm'
            cancelText='Cancel'
        >
            <form onSubmit={handleSubmit}>
                <ModalBodyConatiner>
                <FieldContainer>
                    <MultiSelectDropDown
                        label='Staff Memmbers'
                     />
                </FieldContainer>
                <FieldContainer>
                    <Input
                        type="text"
                        placeholder={'Route name'}
                        label={'Route Name'}
                        name={'route_name'}
                    />
                </FieldContainer>
                {formValues.map((element, index) => (
                    <FieldDivider>
                        <FieldLeftContainer1>
                            <SelectInput
                                type='select'
                                options={options}
                                label={'Stops'}
                                placeholder={'---- Select stops ----'}
                                name='stops'
                                value={formValues.stops }
                                onChange={(e, item) => {
                                    handleChange({
                                        target: {
                                            value: item.key,
                                            name: 'stops',
                                        },
                                    });
                                }}
                            />
                        </FieldLeftContainer1>
                        <FieldRightContainer1>
                            <Input
                                type="text"
                                placeholder={'Set order'}
                                label={'Order'}
                                name={'set_order'}
                                value={formValues.set_order }
                                onChange={(e,item) => handleChange(e,item)}
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
                <AddMoreField>
                    <Link onClick={() => addFormFields()}>
                        <img src={AddMoreIcon} alt="Icon" />
                        <span>Add Another Stop</span>
                    </Link>
                </AddMoreField>
                <FieldDivider>
                    <FieldLeftContainer>
                        <Input
                            type='text'
                            name={'vehicle_number'}
                            label={'Vehicle Number'}
                            placeholder={'Vehicle number'}
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