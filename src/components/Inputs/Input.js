import React, {useState} from 'react';
import styled from 'styled-components';
import Select from "react-dropdown-select";
import { MultiSelect } from "react-multi-select-component";

export const Container = styled.div`
  width:100%;
  height:auto;
  margin-bottom:10px;
`;

export const SelectContainer = styled.div`
    > div{
        > .select-drop{
            padding:0 10px;
            background:${({ theme }) => theme.bg2} ;
            border-width:1px;
            border-style: solid;
            border-color: ${({ theme }) => theme.inputBorderColor} ;
            border-radius:3px;

            &:hover {
                background: ${({ theme }) => theme.inputHoverColor};
            }

            &:placeholder{
                color:${({ theme }) => theme.inputPlaceholderColor};
            }

            &:focus-within{
                box-shadow:none;
                border:1px solid ${({ theme }) => theme. buttonPrimary};
                outline:1px;
            }
        }
    }
`;

export const Title = styled.label`
    font-style: normal;
    font-weight: 600;
    font-size: ${({ theme }) => theme.xsmallFont};
    color: ${({ theme }) => theme.darkColor};
    line-height:16px;
`;

export const InputContainer = styled.div`
  width:100%;
  height:36px;
  display: flex;
  flex: 1 0;
  align-items: center;
  min-width: 0;
  padding:0px 10px;
  border-radius:3px;
  background:${({ theme }) => theme.bg2};
  border: 1px solid ${(props) => (props.hasError ? '#AE2A19' : 'rgba(9, 30, 66, 0.141176)')}; 

  &.error{
    border: 1px solid ;
  }

  &.disabled-input{
    // width:280px;
    background:${({ theme }) => theme.disableInput};
    border: 1px solid ${({ theme }) => theme.disabledBorder};
    border-radius: 3px; 
    &:hover {
        background: ${({ theme }) => theme.disableInput};
    }
  }
  &:hover {
    background: ${({ theme }) => theme.inputHoverColor};
  }
  >.leftIcon{
    margin-right:10px;
  }
 
`;
export const TextInput = styled.input`
  width:100%;
  height:39px;
  background-color: transparent;
  border: 0;
  outline:none;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeightRegular};
  font-size: ${({ theme }) => theme.smallFont};
  color: ${({ theme }) => theme.inputTextColor};

  &:placeholder{
    color:${({ theme }) => theme.inputPlaceholderColor};
  }
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 1240px) {
    font-size:12px;
}
`;

export const Icon = styled.div`
  flex: 0 0;
`;

export const ErrorContainer = styled.span`
    color: #AE2A19;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
`;

export const MultiSelectInputLabel = styled.div`
    >label {
      font-weight: 600;
      font-size: 12px;
      color: #000000;
    }
`;

export const MultiSelectContainer = styled.div`
    > div{
    >.dropdown-container {
        width: 100%;
        height: 36px;
        display: flex;
        flex: 1 0;
        align-items: center;
        min-width: 0;
        padding: 0px 10px;
        border-radius: 3px;
        background: #ffffff;
        border: 1px solid rgba(9, 30, 66, 0.141176);

        >.dropdown-heading .dropdown-heading-value {
            >span{
                font-size: 14px;
                color:${({ theme }) => theme.inputPlaceholderColor};
                font-weight: 400;
            }
        }

        >.dropdown-heading {
            padding: 0px;
        }

        >.dropdown-content .search {
            font-size: 14px;
            color:${({ theme }) => theme.inputPlaceholderColor};
            font-weight: 400;
        }

        >.dropdown-content .options {
            font-size: 14px;
            color:${({ theme }) => theme.inputPlaceholderColor};
            font-weight: 400;
        }

        .item-renderer {
            display: flex;
            align-items: center !important;
        }

        &:hover {
            background: ${({ theme }) => theme.inputHoverColor};
        }

        &:placeholder{
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            color: #172B4D;
        }

        &:focus-within{
            box-shadow:none;
            border:1px solid ${({ theme }) => theme. buttonPrimary};
            outline:1px;
        }
    }
`;

const Input = (
    {
        label, 
        leftIcon,
        rightIcon,
        name,
        type,
        value,
        onChange,
        error,
        placeholder,
        options,
        width,
        disabled,
        labelledBy,
    }) => {

    const [selected, setSelected] = useState([]);

    const customStrings = {
        selectSomeItems: "----Select stop manager----", // Change the placeholder text here
        allItemsAreSelected: "All fruits are selected",
        removeAllItems: "Remove all fruits",
        search: "Search",
      };

    if(type === 'select'){
        return(
            <Container>
                {label &&
                    <Title>
                        {label}
                    </Title>
                }
                <SelectContainer>
                    <Select 
                        width={width}
                        options={options}
                        placeholder={placeholder}
                        className='select-drop'
                        onChange={(e)=>onChange(e)}
                    />
                </SelectContainer>
            </Container>
        );
    } 

    else if(type === 'multi-select'){
        return(
            <Container>
                {label &&
                    <Title>
                        {label}
                    </Title>
                }
                <MultiSelectContainer>
                    <MultiSelect
                            options={options}
                            className='dropdown-container'
                            value={selected}
                            onChange={setSelected}  
                            labelledBy="SelectZZZ"
                            overrideStrings={customStrings}
                    />
                </MultiSelectContainer>
            </Container>
        );
    } 
    
    else {
        return (
            <Container >
                {label &&
                    <Title>
                        {label}
                    </Title>
                }
            <InputContainer hasError={error} className={disabled ? 'disabled-input':'simple-input'}>
                {leftIcon && 
                    <img src={leftIcon} alt="icon" className='leftIcon' />
                }
                <TextInput
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    error={error}
                    placeholder={placeholder}
                    disabled={disabled}
                    width={width}
                    
                />
                {rightIcon && 
                    <img src={rightIcon} alt="icon" className='rightIcon' />
                }
            </InputContainer>
            {error && 
                <ErrorContainer>{error}</ErrorContainer>
            }
            </Container>
        );
    }
};
export default Input;