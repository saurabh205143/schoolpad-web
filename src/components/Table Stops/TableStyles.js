import { styled } from "styled-components";

export const TableContainer = styled.table`
   
`;

export const TableHead = styled.thead`
    background:${({ theme }) => theme.tableheadingBack};
    border:none;
    border-bottom: 1px solid rgba(9, 30, 66, 0.1412);
`;

export const TableRow = styled.tr`
    & >th:nth-child(2) {
        width:360px;       
    }
    & >th:nth-child(3) {
        width:406px;       
    }
    & >th:nth-child(4) {
        width:210px;       
    }
    & >th:nth-child(5) {
        width:100px;   
    }
    @media only screen and (max-width: 1340px) {
        & >th:nth-child(2) {
            width:auto;       
        }
        & >th:nth-child(3) {
            width:auto;       
        }
        & >th:nth-child(4) {
            width:auto;       
        }
        & >th:nth-child(5) {
            width:auto;       
        }
    }
`;

export const TableBody = styled.tbody``;

export const TableHeading = styled.th`
    background:${({ theme }) => theme.tableheadingBack};
    color:${({ theme }) => theme.darkColor};
    font-weight: ${({ theme }) => theme.fontWeightBold};
    font-size: ${({ theme }) => theme.xsmallFont};
    border:none;
    padding:10px 12px !important;
`;

export const Tabledata = styled.td`
    color:${({ theme }) => theme.darkColor};
    font-weight: ${({ theme }) => theme.fontWeightRegular};
    font-size: ${({ theme }) => theme.smallFont};
    padding:7px 10px !important;
    width: 100px;
`;


export const ActionsConatiner = styled.ul`
    display:inline;
    margin:0;
    padding:0;
    list-style:none;
`;

export const ActionsList = styled.li`
    padding:0 10px 0 0;
    display:inline-block;
`;

export const MoreAction = styled.div`
    padding-left:10px;
    display: none;
`;


