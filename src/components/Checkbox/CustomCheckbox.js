import React from 'react';
import styled from 'styled-components';
import InactiveCheckbox from '../../images/inactive-checkbox.svg';
import ActiveCheckbox from '../../images/active-checkbox.svg';

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
                <span style={{paddingLeft: '10px'}}>{checkboxtext}</span>
            </div>
        </>
    );
};

export default CustomCheckbox;
