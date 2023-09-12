import React, { useState, useEffect } from "react";
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";
import options from "./data";
import {  Title } from "./Input";
import styled from "styled-components";
import classNames from "classnames";

export const Container = styled.div`
    width:${(props) => props.width || '100%'};
    
  margin-bottom:10px; 
  > div{
    >button{
      width:100%;
      height: 36px;
    min-width: 0;
    padding: 0px 10px;
    border-radius: 3px;
    background: #ffffff;
    border: 1px solid rgba(9, 30, 66, 0.141176);
    box-shadow: none;
    }
    >div{
      margin-top: 0px !important;
      border-radius: 0px !important;
      border: 1px solid rgba(9, 30, 66, 0.141176);
      border-top: none !important;
      >.multiselect-drop-down{
        >.css-ik6y5r{
          >div{
            >.css-1qprcsu-option{
              background-color:transparent;
              font-weight:400 !important;
              padding:4px 10px;
              color:#172B4D;
              font-size:14px;
            }
            >div{
              background-color:transparent;
              font-weight:400 !important;
              padding:4px 10px;
              color:#172B4D;
              font-size:14px;
            }
          }
        }
      }
    }
  }
`;

const MultiSelectDropdown = ({label, width, options, setMultiSelect}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [error, setError] = useState("");
  // console.log({ selectedOptions });
  useEffect(() => {
    setSelectedOptions([{ label: "All", value: "*" }, ...options]);
  }, []);

  function getDropdownButtonLabel({ placeholderButtonLabel, value }) {
    if (value && value.some((o) => o.value === "*")) {
      return `${placeholderButtonLabel}: All`;
    } else {
      return `${placeholderButtonLabel}: ${value.length} selected`;
    }
  }

  function validateSelection(value) {
    // You can add your validation logic here
    // For example, require at least 2 options to be selected
    if (value.length < 2) {
      setError("Please select at least 2 options.");
      return false;
    }
    setError(""); // Clear any previous error messages
    return true;
  }

  function onChange(value, event) {
  const isValid = validateSelection(value);
  if (isValid) {
    setSelectedOptions(value);
  }
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
    setMultiSelect(value);
    this.setState(value);
  }
}

  return (
    <Container width={width}>
      {label &&
        <Title>
          {label}
        </Title>
      }
    <ReactMultiSelectCheckboxes
      options={[{ label: "All", value: "*" }, ...options]}
      placeholderButtonLabel='Select staff members'
      getDropdownButtonLabel={getDropdownButtonLabel}
      value={selectedOptions}
      onChange={onChange}
      setState={setSelectedOptions}
      className='multiselect-drop-down'
    />
      {error && (
        <div style={{ color: "red" }}>{error}</div>
      )}
    </Container>
  );
};

export default MultiSelectDropdown;