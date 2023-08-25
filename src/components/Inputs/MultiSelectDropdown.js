import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";



const MultiSelectDropdown = ({options}) => {
  const [selected, setSelected] = useState([]);

  return (
    <div>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />

    </div>
  );
};

export default MultiSelectDropdown;