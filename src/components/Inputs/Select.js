import React, { useState } from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import { ErrorContainer } from './Input';

const SelectInputLabel = styled.div`
    >label {
      font-weight: 600;
      font-size: 12px;
      color: #000000;
    }
    >.css-143obrt-control {
      margin-bottom: 0 !important;
    }
`;

const SelectInput = ({label,selectedKey, placeholder,onChange,name,error,value,options}) => { 
  

  // Custom styles for the Select component
  const selectStyles = {
    control: (provided, state) => ({
      ...provided,
      minHeight: '36px',
      borderRadius: '3px',
      border: error ? '1px solid #AE2A19' : '1px solid rgba(9, 30, 66, 0.141176)',
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
        value={value}
        onChange={onChange}
        options={options}
        styles={selectStyles}
        placeholder={placeholder}
        className='select-input'
        name={name}
        error={error}
        checkbox={true}
        selectedKey={selectedKey}
      />
      {error &&
      <ErrorContainer>{error}</ErrorContainer>
      }
    </div>
  );
};

export default SelectInput;