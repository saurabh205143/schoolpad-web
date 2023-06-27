import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';

export const LinkClassic = styled(Link)`
    color:${({ theme }) => theme.blueColor};
    font-size: ${({ theme }) => theme.smallFont};
    font-weight:${({ theme }) => theme.fontWeightBold};
    font-family: 'Source Sans Pro',sans-serif;
    text-align:center;
    text-decoration:none;
    letter-spacing:0px;
    padding:${({theme}) => theme.padding};
`;

const LinkButton = ({ to, linkText, onlyIcon, tooltiptext, onClick, backgroundColor}) => {
    return (
        <LinkClassic 
            to={to} 
            onClick={onClick}
            backgroundColor={backgroundColor}
            >
            {linkText}
            {onlyIcon &&
                <img src={onlyIcon} alt="Icon" data-tooltip-id={tooltiptext} />
            }
            {tooltiptext && 
                <Tooltip
                id={tooltiptext}
                type="dark"
                effect="solid"
                place="bottom"
                content={tooltiptext}
                />
            }
        </LinkClassic>
    )
}

export default LinkButton;