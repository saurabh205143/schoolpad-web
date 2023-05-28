import { styled } from "styled-components";

export const Container = styled.div`
    width:100%;
    padding:16px 16px;
    display:flex;
    align-items:center;
    justify-content:space-between;
`;

export const ContainerLeft = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;
`;

export const ContainerRight = styled.div`
    display:flex;
    align-items:center;
`;

export const ButtonContainer = styled.div`
    margin-left:8px;
`;

export const ExportContainer = styled.div`
    width:100%;
    padding:13px 16px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    border-top:1px solid rgba(9, 30, 66, 0.1412);
    border-bottom:1px solid rgba(9, 30, 66, 0.1412);
`;

export const ExportHeadings = styled.div`
    margin-right:15px;
`;