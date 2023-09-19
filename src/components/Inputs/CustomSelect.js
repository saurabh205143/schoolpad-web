import React, { useState } from 'react'
import { styled } from 'styled-components';

// Assets
import DropIcon from '../../images/down-icon.svg';
import CloseIcon from '../../images/drop-close.svg';

export const ContainerBox = styled.div`
    
`;

export const DefaultSelectBox = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    border-style:solid;
    border-width:1px;
    border-radius: 3px;
    padding:0px 8px;
    height:36px;
    cursor:pointer;
    width:154px;
`;

export const OptionText = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #626F86;
`;

export const DropDownListContainer = styled.div`
    margin-top:8px;
    position: absolute;
    
`;

export const DropDownList = styled.ul`
    box-shadow: 0px 0px 1px rgba(9, 30, 66, 0.31), 0px 8px 12px rgba(9, 30, 66, 0.15);
    border-radius: 3px;
    background:#ffffff;
    width:154px;
    padding:8px 0px;
`;

export const DropOptions = styled.li`
    padding:0px 16px;
    height:32px;
    display:flex;
    align-items:center;
    justify-content:flex-start;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color:#000000;
`;


const CustomSelect = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
        // console.log(value);
    };

    return (
        <ContainerBox>
            <DefaultSelectBox onClick={toggling} style={{borderColor: selectedOption ? 'rgba(9, 30, 66, 0.141176)' : '#172B4D'}} >
                <OptionText style={{color: selectedOption ? '#000000' : '#626F86'}}>{selectedOption || "Select"}</OptionText>
                {selectedOption ?
                    <img src={CloseIcon} alt="icon" onClick={() => setSelectedOption(!selectedOption)} />
                    :
                    <img src={DropIcon} alt="icon" />
                }
            </DefaultSelectBox>

            {isOpen && (
                <DropDownListContainer>
                    <DropDownList>
                        {props.options.map(option => (
                            <DropOptions onClick={onOptionClicked(option)} key={Math.random()}>{option}</DropOptions>
                        ))}
                    </DropDownList>
                </DropDownListContainer>
            )}
        </ContainerBox>
    )
}

export default CustomSelect;