import styled from "styled-components";

export const ButtonClassic = styled.button` 
    background: ${({ theme }) => theme.bgPrimary};
    color: ${({ theme }) => theme.whiteColor};
    font-size: ${({ theme }) => theme.smallFont};
    font-weight:${({ theme }) => theme.fontWeightBold};
    font-family: 'Source Sans Pro',sans-serif;
    margin:0;
    padding: 0px 12px;
    height:${({ theme }) => theme.buttonHeight};
    border: none;
    border-radius:${({ theme }) => theme.buttonRadius};
    cursor: pointer;

    &.primary {
        background: ${({ theme }) => theme.bgPrimary};
        color: ${({ theme }) => theme.whiteColor};
    }  
    
    &:hover{
        background: ${({ theme }) => theme.bgHover};
    }

    &::focus{
        background: ${({ theme }) => theme.bgFocus};
    }

    &:disabled {
        color: #8993A5;
        opacity: 0.7;
        cursor: default;
        background: ${({ theme }) => theme.bgDisabled};
      }
  
 `;

const Button = ({ className, disabled,onClick,buttonText }) => {
    return (
        <ButtonClassic
            disabled={disabled}
            className={className}
            onClick={onClick}
        >
            {buttonText}
        </ButtonClassic>
    )
}

export default Button;

