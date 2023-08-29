import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import styled from 'styled-components';

export const MultiSelectInputLabel = styled.div`
    >label {
      font-weight: 600;
      font-size: 12px;
      color: #000000;
    }
`;


const MultiSelectDropdown = ({options, label}) => {
  const [selected, setSelected] = useState([]);

  return (
    <div>
      <MultiSelectInputLabel>
      <label>{label}</label>
      </MultiSelectInputLabel>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy='----Select stop manager----'
        className='dropdown-container'
      />

    </div>
  );
};

export default MultiSelectDropdown;