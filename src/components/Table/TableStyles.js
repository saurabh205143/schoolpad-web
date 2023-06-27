import { styled } from "styled-components";

export const TableContainer = styled.table`
   width:100%;
   &.picked-table{
        border:1px solid #EBECF0;
   }
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
        width:192px;       
    }
    & >th:nth-child(4) {
        width:234px;       
    }
    & >th:nth-child(5) {
        width:178px; 
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
    border-bottom: 1px solid rgba(9, 30, 66, 0.1412);
    >div{
        margin-bottom:0px;
        >div{
            >div{
                >.select-drop{
                    height:32px;
                    min-height:32px;
                }
            }
            &.simple-input{
                height:32px;
            }
        }
    }
`;

export const Tabledatatext = styled.span`
    padding-left: 10px;
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
    >.more-options{
        >button{
            background:transparent !important;
            color:#0065FF;
            border:none;
            padding:0px;
            height:auto;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: center;

        }
        >.dropdown-toggle::after{
            margin-top:1px;
        }
        >.dropdown-menu{
            padding:0px;
            box-shadow: 0px 0px 1px rgba(9, 30, 66, 0.31), 0px 8px 12px rgba(9, 30, 66, 0.15);
            border-radius: 3px;
            background: #ffffff;
            border: none;
            >.dropdown-item{
                font-size: 14px;
                padding: 0px 16px;
                height: 35px;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                border-bottom: 1px solid rgba(9, 30, 66, 0.1412);
            }
        }
    }
`;

export const MoreAction = styled.div`
    padding-left:10px;
`;

export const SelectBoxContainer = styled.div``;

