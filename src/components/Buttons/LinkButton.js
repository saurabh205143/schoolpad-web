import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkClassic = styled(Link)`
    color:${({ theme }) => theme.blueColor};
    font-size: ${({ theme }) => theme.smallFont};
    font-weight:${({ theme }) => theme.fontWeightBold};
    font-family: 'Source Sans Pro',sans-serif;
    text-align:center;
    text-decoration:none;
    letter-spacing:0px;
`;

const LinkButton = ({ to, linkText , onlyIcon}) => {
    return (
        <LinkClassic to={to} >
            {linkText}
            {onlyIcon &&
                <img src={onlyIcon} alt="Icon" />
            }
        </LinkClassic>
    )
}

export default LinkButton;