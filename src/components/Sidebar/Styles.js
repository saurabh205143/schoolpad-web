import { styled } from "styled-components";

export const SidebarContainer = styled.div`
    width:240px;
    background: ${({theme}) => theme.bg2};
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    border-right: 1px solid rgba(9, 30, 66, 0.141176);
    float:left;
    height:calc(100vh - 56px);
   
`;

export const LogoContainer = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex:0;
    padding-bottom:30px;
`;