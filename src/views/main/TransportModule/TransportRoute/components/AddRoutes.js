import React, { useEffect, useState } from 'react';
import Modal from '../../../../../components/Modal/Modal';
import Input from '../../../../../components/Inputs/Input';
import { AddMoreField, FieldContainer, FieldCustomContainer, FieldDivider, FieldLeftContainer, FieldLeftContainer1, FieldRightContainer, FieldRightContainer1, ModalBodyConatiner, RemoveContianer } from './AddRouteStyles';
import { Link } from 'react-router-dom';

// Assets
import AddMoreIcon from '../../../../../images/add-more-icon.svg';
import Button from '../../../../../components/Buttons/Button';
import RemoveIcon from '../../../../../images/delete-icon.svg';
import SelectInput from '../../../../../components/Inputs/Select';
import MultiSelectDropDown from '../../../../../components/Inputs/MultiSelectDropDown';
import multiOptions from '../../../../../components/Inputs/data';
import SelectVehicle from '../../../../../components/Inputs/SelectVehicle';

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

  const fieldNames = ['firstName', 'lastName', 'email'];

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
                vehicle_capacity: "",
    });

    const [vehicleNumber, setVehicleNumber] = useState({
        vehicle_number: '',
    });

    // Custom field state
    const [customFields,setCustomFields] = useState({})

    // Handle input changes and update the state
  const handleFieldsChange = (e) => {
    const { name, value } = e.target;
    setCustomFields({ ...customFields, [name]: value });
  };

    // multiselect validation
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [validationError, setValidationError] = useState('');

    useEffect(() => {
        setSelectedOptions([{ label: "All", value: "*" }, ...multiOptions]);
      }, []);
    
      function getDropdownButtonLabel({ placeholderButtonLabel, value }) {
        if (value && value.some((o) => o.value === "*")) {
          return `${placeholderButtonLabel}: All`;
        } else {
          return `${placeholderButtonLabel}: ${value.length} selected`;
        }
      }
    
      function onChange(value, event) {
        if (event.action === "select-option" && event.option.value === "*") {
          this.setState(this.options);
        } else if (
          event.action === "deselect-option" &&
          event.option.value === "*"
        ) {
          this.setState([]);
        } else if (event.action === "deselect-option") {
          this.setState(value.filter((o) => o.value !== "*"));
        } else if (value.length === this.options.length - 1) {
          this.setState(this.options);
        } else {
          this.setState(value);
        }
      }

    //   vehicle onchange
    let handleVehicleChange = (e) => {
        let i = {...vehicleNumber};
        i[e.target.name] = e.target.value;
        setVehicleNumber(i);  
    }

    let handleChange = (e) => {
        let newFormValues = [...formValues];
        newFormValues[e.target?.name] = e.target?.value;
        setFormValues(newFormValues); 
    }
    // Inputs handle change
    const handleChangeInputs = (e) => {
        let i = { ...inputs };
        i[e.target.name] = e.target.value;
        setInputs(i);
        console.log(i);
    };

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
            setValidationError('Please select staff members');
        } else {
            setValidationError('');
        }
        alert(JSON.stringify(formValues));
        alert(JSON.stringify(vehicleNumber));
        alert(JSON.stringify(inputs));
        alert(JSON.stringify(selectedOptions.length));
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
                        options={[{ label: "All", value: "*" }, ...multiOptions]}
                        placeholderButtonLabel='Select staff members'
                            getDropdownButtonLabel={getDropdownButtonLabel}
                        value={selectedOptions}
                        onChange={onChange}
                        selected={selectedOptions}
                        setState={setSelectedOptions}
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
                        <SelectVehicle
                                type='select'
                                options={options}
                                label={'Vehicle Number'}
                                placeholder={'---- Select Vehicle number ----'}
                                name='vehicle_number'
                                value={vehicleNumber.vehicle_number  }
                                selectedKey={vehicleNumber.vehicle_number}
                                onChange={(e,item) => handleVehicleChange({
                                    target:{
                                        value:e.value,
                                        name:'vehicle_number'
                                    }
                                })}
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
                    <FieldCustomContainer >
                        <span>Custom fields</span>
                    </FieldCustomContainer>
                    {fieldNames.map((fieldName) => (
                    <FieldContainer>
                        <Input
                            type="text"
                            name={fieldName}
                            placeholder={fieldName}
                            label={fieldName}
                            value={customFields[fieldName] || ''}
                            onChange={handleFieldsChange}
                        />
                    </FieldContainer>
                    ))}
                </ModalBodyConatiner>
            </form>
        </Modal>
    );
};

export default AddRoutes;