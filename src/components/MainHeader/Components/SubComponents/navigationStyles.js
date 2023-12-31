import styled from "styled-components";

export const NavBar = styled.ul`
 margin:0;
 padding:0 0px 0 10px;
 list-style:none;
 display:flex;
 align-items:center;
`;

export const NavBarItem = styled.li`
    padding:0px 8px;
>a{
    text-decoration:none;
    height:55px;
    display:flex;
    align-items:center;
}
>a.active{
    border-bottom:2px solid ${({theme}) => theme.whiteColor};
    >span{
        color:${({theme}) => theme.whiteColor};
        font-weight:600;
    }
}
>.more-drop{
    >button{
        height:32px;
        border-radius:3px;
        display:flex;
        align-items:center;
        background: ${({ theme }) => theme.whiteColor};
        color: ${({ theme }) => theme.buttonPrimary};
        font-size: ${({ theme }) => theme.smallFont};
        font-weight:600;
        background
        @media screen and (max-width: 1240px) {
            font-size:12px;
            height:28px;
        }
    }
}
@media screen and (max-width: 1240px) {
    padding:0px 5px;
}
`;

export const LinkTitle = styled.span`
    font-style: normal;
    font-weight: ${({theme}) => theme.fontWeightRegular};
    font-size: ${({ theme }) => theme.smallFont};
    line-height: 32px;
    color:#ffffff;
    @media screen and (max-width: 1240px) {
        font-size:${({theme}) => theme.xsmallFont};
    }
`;

export const InactiveIcon = styled.img``;

export const ActiveIcon = styled.img``;



