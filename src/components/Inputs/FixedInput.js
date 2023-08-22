import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
    width: 100%;
    float: left;

    > label {
        font-size: 14px;
        font-weight: 400;
        color: #344054;
        padding-bottom: 4px;
    }

    > span {
        font-size: 14px;
        color: #f04438;
    }
`;

const GroupContainer = styled.div`
    width: 112px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 32px;
    border: 1px solid ${(props) => (props.hasError ? '#F04438' : '#D0D5DD')};
    border-top-right-radius: 0px !importatnt;
    border-bottom-right-radius: 0px !importatnt;
    border-top-left-radius: 0px !importatnt;
    border-bottom-left-radius: 0px !importatnt;
    border-radius: 4px;
    padding: 0 0px;

    &:hover {
        box-shadow: none;
    }

    > img {
        width: 18px;
        height: 18px;
        margin: 8px;
        color: #c1c1c1;
    }
`;

const PlaceholderFixed = styled.div`
    width: ${(props) => props.width || '120px'};
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-left: 1px solid #d0d5dd;
    padding: 6px;
    color:#000000;
    background: #DFE1E6;
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px;
`;

const InputBase = styled.input`
    width: 100%;
    height: auto;
    color: #333333;
    font-size: 15px;
    font-weight: 400;
    border: none;
    background: transparent;
    outline: none;
    text-indent: 10px;

    &::placeholder {
        color: #626F86;
    }
`;

export const FixedInput = ({
    onChange,
    type,
    value,
    placeholder,
    name,
    error,
    successMsg,
    fixedtext,
    width,
    disabled ,
}) => (
    <InputContainer>
        <GroupContainer hasError={error}>
      
            <InputBase
                disabled={disabled}
                type={type}
                onChange={onChange}
                name={name}
                value={value}
                placeholder={placeholder}
            />
                  <PlaceholderFixed width={width}>{fixedtext}</PlaceholderFixed>
        </GroupContainer>
        {successMsg ? (
            <p style={{ color: 'green' }}>{successMsg}</p>
        ) : (
            <span>{error}</span>
        )}
    </InputContainer>
);

export default FixedInput;