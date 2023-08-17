import React from 'react';
import styled from 'styled-components';
import Select from "react-dropdown-select";

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
  border-width:1px;
  border-style: solid;
  border-radius:3px;
  background:${({ theme }) => theme.bg2};
  border-color: ${({ theme }) => theme.inputBorderColor};

  &.disabled-input{
    background:${({ theme }) => theme.disableInput};;
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
        disabled
    }) => {
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
    } else {
        return (
            <Container >
                {label &&
                    <Title>
                        {label}
                    </Title>
                }
            <InputContainer className={disabled ? 'disabled-input':'simple-input'}>
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
            </Container>
        );
    }
};
export default Input;