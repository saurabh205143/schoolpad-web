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
    width:${(props) => props.width || '100%'};
    >button{
      width:100%;
      height: 36px;
      min-width: 0;
      padding: 0px 10px;
      border-radius: 3px;
      background: #ffffff;
      border: ${(props) =>
        props.error ? "1px solid #AE2A19" : "1px solid rgba(9, 30, 66, 0.141176)"};
      box-shadow: none;
    }
    >div{
      margin-top: 0px !important;
      border-radius: 0px !important;
      border: ${(props) =>
        props.error ? "1px solid #AE2A19" : "1px solid rgba(9, 30, 66, 0.141176)"};
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

const MultiSelect = ({label,selected,options,placeholderButtonLabel,getDropdownButtonLabel,value,onChange,setState, width, error,multiOptions}) => {

  // const defaultValue = value && value.length > 0 ? value : [];

  return (
    <Container width={width} error={error}>
      {label &&
        <Title>
          {label}
        </Title>
      }
    <ReactMultiSelectCheckboxes
      options={options}
      placeholderButtonLabel={placeholderButtonLabel}
      getDropdownButtonLabel={getDropdownButtonLabel}
      value={value}
      onChange={onChange}
      selected={selected}
      setState={setState}
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

export default MultiSelect;