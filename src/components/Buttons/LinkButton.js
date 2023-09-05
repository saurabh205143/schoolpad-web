import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';

export const LinkClassic = styled(Link)`
    width: auto;
    height:${({ theme }) => theme.buttonHeight};
    color: ${(props) => props.color || '#ffffff'};
    background-color: ${(props) => props.backgroundColor || 'none'};
    border-radius:${({ theme }) => theme.buttonRadius};
    font-size: ${({ theme }) => theme.smallFont};
    font-weight:${({ theme }) => theme.fontWeightBold};
    font-family: 'Source Sans Pro',sans-serif;
    padding:${(props) => props.padding || 'none'};
    cursor: pointer;
    transition: all 0.6s;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    > .only-icon{
        width:22px;
    }
    &:hover{
        background-color: ${(props) => props.backgroundColor || 'none'};
        color: ${(props) => props.color || '#ffffff'};
    }
`;

const LinkButton = ({ to,linkText, onlyIcon, tooltiptext, onClick, backgroundColor, color, padding, height}) => {
    return (
        <LinkClassic 
            to={to} 
            onClick={onClick}
            backgroundColor={backgroundColor}
            color={color}
            height={height}
            padding={padding}
            >
            {linkText}
            {onlyIcon &&
                <img src={onlyIcon} alt="Icon" className='only-icon' data-tooltip-id={tooltiptext} />
            }
            {tooltiptext && 
                <Tooltip
                id={tooltiptext}
                type="dark"
                effect="solid"
                place="bottom"
                content={tooltiptext}
                style={{
                    backgroundColor: '#44546F',
                    color: 'white',
                    borderRadius: '4px',
                    padding: '2px 8px 2px 8px',
                    fontSize: '12px',
                }}
                />
            }
        </LinkClassic>
    )
}

export default LinkButton;