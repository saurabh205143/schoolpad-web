import React from 'react';
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
                <span style={{paddingLeft: '8px', fontSize: '14px'}}>{checkboxtext}</span>
            </div>
        </>
    );
};

export default CustomCheckbox;
