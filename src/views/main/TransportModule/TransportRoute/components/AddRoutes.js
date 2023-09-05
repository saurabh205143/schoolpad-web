import React, { useEffect, useState } from 'react';
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
                stops:'',
                set_order:'',
                
            }
        ]
    );
    const [inputs, setInputs] = useState({
        route_name: "",
                vehicle_number: "",
                vehicle_capacity: "",
                bus_help: "",
    });
    // multiselect validation
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [validationError, setValidationError] = useState('');

    const handleSelectChange = (newSelectedOptions) =>{
        setSelectedOptions(newSelectedOptions);
        
        setValidationError('');

    }

    let handleChange = (i,e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target?.name] = e.target?.value;
        setFormValues(newFormValues);
        console.log({formValues});
        
    }
    // Inputs handle change
    const handleChangeInputs = (e) => {
        let i = { ...inputs };
        i[e.target.name] = e.target.value;
        setInputs(i);
        console.log(i);
    };
    const handleSetChange = () => {

    }

    let addFormFields = () => {
        setFormValues([...formValues, { stops:'', set_order:'' }])
    }

    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }

    // useEffect(()=>{
       
    // console.log(formValues);
    // },[formValues]);

    let handleSubmit = (event) => {
        event.preventDefault();
         // Perform validations
        if(selectedOptions.length === 0){
            setValidationError('Please select option');
        } else {
            setValidationError('failed');
        }
        alert(JSON.stringify(formValues));
        alert(JSON.stringify(inputs));
    }

    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalHeading={'Add New Route'}
            submitText='Confirm'
            cancelText='Cancel'
            saveAction={handleSubmit}
        >
            <form onSubmit={handleSubmit}>
                <ModalBodyConatiner>
                <FieldContainer>
                    <MultiSelectDropDown
                        label='Staff Memmbers'
                        onChange={handleSelectChange}
                        selected={selectedOptions}
                        error={validationError}
                     />
                </FieldContainer>
                <FieldContainer>
                    <Input
                        type="text"
                        placeholder={'Route name'}
                        label={'Route Name'}
                        name={'route_name'}
                        value={inputs.route_name}
                        onChange={handleChangeInputs}

                    />
                </FieldContainer>
                {formValues.map((element, index) => (
                    <FieldDivider>
                        <FieldLeftContainer1>
                            <SelectInput
                                type='select'
                                options={options1}
                                label={'Stops'}
                                placeholder={'---- Select stops ----'}
                                name='stops'
                                value={formValues.stops  }
                                selectedKey={formValues.stops}
                                onChange={(e,item) => handleChange(index,{
                                    target:{
                                        value:e.value,
                                        name:'stops'
                                    }
                                })}
                            />
                        </FieldLeftContainer1>
                        <FieldRightContainer1>
                            <Input
                                type="text"
                                placeholder={'Set order'}
                                label={'Order'}
                                name={'set_order'}
                                value={element.set_order }
                                onChange={e => handleChange(index,e)}
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
                            value={inputs.vehicle_number}
                            onChange={handleChangeInputs}
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
                            onChange={handleChangeInputs}
                        />
                    </FieldRightContainer>
                </FieldDivider>
                <FieldContainer>
                    <Input
                        type="text"
                        placeholder={'Helpline number'}
                        label={'Bus Help'}
                        name={'bus_help'}
                        value={inputs.bus_help}
                        onChange={handleChangeInputs}
                    />
                </FieldContainer>
                </ModalBodyConatiner>
            </form>
        </Modal>
    );
};

export default AddRoutes;