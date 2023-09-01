import React, { useState } from 'react';
import Select from 'react-select';
import styled from 'styled-components';

export const SelectInputLabel = styled.div`
    >label {
      font-weight: 600;
      font-size: 12px;
      color: #000000;
    }
`;

// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
// ];

const SelectInput = ({label, placeholder, options}) => { 
  const [selectedOption, setSelectedOption] = useState(null);

  // Custom styles for the Select component
  const selectStyles = {
    control: (provided, state) => ({
      ...provided,
      minHeight: '36px',
      borderRadius: '3px',
      marginBottom: '10px',
      border: '1px solid rgba(9, 30, 66, 0.141176)',
      height: '36px',
    }),
    placeholder: (provided) => ({
      ...provided,
      fontSize: '14px', 
      padding: '0px',
      margin: '0px'
    }),
    option: (provided) => ({
      ...provided,
      fontSize: '14px', 
    }),
  };

  return (
    <div>
      <SelectInputLabel>
      <label>{label}</label>
      </SelectInputLabel>
      <Select
        value={selectedOption}
        onChange={setSelectedOption}
        options={options}
        styles={selectStyles} 
        placeholder={placeholder}
        className='select-input'
      />
    </div>
  );
};

export default SelectInput;