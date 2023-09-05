import React, { useState, useEffect } from "react";
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";

import options from "./data";
import {  ErrorContainer, Title } from "./Input";
import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  height:auto;
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

const MultiSelectDropDown = ({label,error,selected}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

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

  return (
    <Container>
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
      selected={selected}
      setState={setSelectedOptions}
      className='multiselect-drop-down'
    />
    {error &&
      <ErrorContainer>
        {error}
      </ErrorContainer>
    }
    </Container>
  );
};

export default MultiSelectDropDown;