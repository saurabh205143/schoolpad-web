import React from 'react';
import styled from 'styled-components';
import InactiveCheckbox from '../../images/inactive-checkbox.svg';
import ActiveCheckbox from '../../images/active-checkbox.svg';

export const CheckboxContainer = styled.div`
    >span {
        display: flex;
        padding-left: 10px;
    }

`;

const CustomCheckbox = ({ isChecked, onChange, disabled, checkboxtext}) => {
    return (
        <>
            <div
                onClick={() => {
                    if (!disabled) {
                        onChange();
                    }
                }}
            >
                {isChecked ? (
                    <img src={InactiveCheckbox} alt={'Checkbox'} />
                    
                ) : (
                    <img src={ActiveCheckbox} alt={'Checkbox'} />
                    
                )}
                <span>{checkboxtext}</span>
            </div>
        </>
    );
};

export default CustomCheckbox;
