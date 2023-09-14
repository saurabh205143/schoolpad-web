import { Tooltip } from "react-tooltip";
import styled from "styled-components";
import Loader from 'react-js-loader';

export const ButtonClassic = styled.button` 
    background: ${({ theme }) => theme.backgroundPrimary};
    color: ${({ theme }) => theme.whiteColor};
    font-size: ${({ theme }) => theme.smallFont};
    font-weight:${({ theme }) => theme.fontWeightBold};
    font-family: 'Source Sans Pro',sans-serif;
    margin: 0;
    padding: 0px 12px;
    height:${({ theme }) => theme.buttonHeight};
    border: none;
    border-radius:${({ theme }) => theme.buttonRadius};
    cursor: pointer;

    &.primary {
        background: ${({ theme }) => theme.backgroundPrimary};
        color: ${({ theme }) => theme.whiteColor};
        margin-right: ${({ theme }) => theme.marginRight};
    } 
    
    &.secondary {
        background: ${({ theme }) => theme.backgroundSecondary};
        color: ${({ theme }) => theme.darkColor};
        // border:2px solid ${({ theme }) => theme.backgroundSecondary};

        &:hover{
            background: ${({ theme }) => theme.secondarHover};
        }

        &:focus{
            border:2px solid #388BFF;
            background:rgba(9, 30, 66, 0.0588235);
        }
    }
    
    &.link-button{
        background:transparent;
        color:${({ theme }) => theme.buttonPrimary};
        height:auto;
        padding:0;

        &:hover{
            background:transparent;
        }

        &:focus{
            background: transparent;
        }
    }

    &.link-button-black{
        background:transparent;
        color:${({ theme }) => theme.darkColor};
        height:32px;
        padding:0 12px;

        &:hover{
            background: ${({ theme }) => theme.secondarHover};
        }

        &:focus{
            border:2px solid #388BFF;
            background:rgba(9, 30, 66, 0.0588235);
        }
    }

    &.only-icon-button{
        background:transparent;
        color:transparent;
        height:auto;
        padding:0;

        &:hover{
            background:transparent;
        }

        &:focus{
            background: transparent;
        }
    }
    
    &:hover{
        background: ${({ theme }) => theme.bgHover};
    }

    &:focus{
        background: ${({ theme }) => theme.bgFocus};
    }

    &:disabled {
        color: #8993A5;
        opacity: 0.7;
        cursor: default;
        background: ${({ theme }) => theme.bgDisabled};
    }

    >.button-left-icon{
        margin-right:8px;
    }

    &.delete {
        background: ${({ theme }) => theme.bgDelete};
        margin-right: 8px;
        padding:0;
    }

    &.delete-text {
        background:none;
        color:#CA3521;
    }
    @media screen and (max-width: 1240px) {
        font-size:12px;
    }
`;


const Button = ({ className, disabled, loading, onClick, buttonText, leftIcon,rightIcon,onlyIcon, tooltiptext, borderBottom, borderRadius}) => {
    if (loading) {
        return (
                <ButtonClassic
                    className={className}
                >
                    <Loader
                        type="bubble-scale"
                        bgColor={'#FFFFFF'}
                        color={'#FFFFFF'}
                        size={28}
                    />
                </ButtonClassic>
        );
    }

    return (
        <ButtonClassic
            disabled={disabled}
            className={className}
            onClick={onClick}
            data-tooltip-id={tooltiptext}
            data-tooltip-content={buttonText}
            style={{ borderBottom, borderRadius }} 
        >
            {leftIcon &&
                <img src={leftIcon} alt="Icon" className="button-left-icon" />
            }
            {buttonText}
            {onlyIcon &&
                <img src={onlyIcon} alt="Icon" className="only-icon" data-tooltip-id={tooltiptext} />
            }
            {rightIcon &&
                <img src={rightIcon} alt="Icon" className="button-right-icon" />
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
        </ButtonClassic>
    )
}

export default Button;

