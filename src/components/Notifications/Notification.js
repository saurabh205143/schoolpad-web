import React from 'react'
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { Tooltip } from 'react-tooltip';

export const NotificationContainer = styled(Link)`
    position:relative;
    >img{
        width:24px;
        height:24px;
        @media screen and (max-width: 1240px) {
            width: 18px;
            height: 18px;
        }
    }
`;

export const NotificationCount = styled.div`
    position: absolute;
    background: #CA3521;
    top: -4px;
    right: 4px;
    padding: 5px;
    border-radius: 100px;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 1240px) {
        width: 14px;
        height: 14px;
    }
`;

export const CountText = styled.span`
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeightRegular};
    font-size: ${({ theme }) => theme.xsmallFont};
    color: ${({ theme }) => theme.whiteColor};
`;

const Notification = ({icon,countText,tooltiptext}) => {
    return (
    <NotificationContainer >
        <img src={icon} alt="Icon" data-tooltip-id={tooltiptext}
        />
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

        {/* notification count */}
        <NotificationCount>
            <CountText>{countText}</CountText>
        </NotificationCount>
    </NotificationContainer>

    )
}

export default Notification;