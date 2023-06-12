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
        width:213px;       
    }
    & >th:nth-child(3) {
        width:140px;       
    }
    & >th:nth-child(4) {
        width:215px;       
    }
    & >th:nth-child(5) {
        width:170px;       
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
    padding:7px 12px !important;
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
`;


