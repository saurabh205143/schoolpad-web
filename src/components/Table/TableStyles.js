import { styled } from "styled-components";

export const Container = styled.div`
    max-height:450px;
    height:100%;
    overflow:auto;
`;

export const ApproveContainer = styled.div`
    padding: 20px;
`;

export const ContainerTable = styled.div`
    padding: 20px;
`;

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
    // & >th:nth-child(2) {
    //     width:213px;       
    // }
    // & >th:nth-child(3) {
    //     width:192px;       
    // }
    // & >th:nth-child(4) {
    //     width:234px;       
    // }
    // & >th:nth-child(5) {
    //     width:178px; 
    // }
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

export const TableBody = styled.tbody`
& > tr:nth-child(even) {
    background: #FAFCFF;
}
& > tr:nth-child(odd) {
    background: #ffffff;
}`;

export const TableHeading = styled.th`
    background:${({ theme }) => theme.tableheadingBack};
    color:${({ theme }) => theme.darkColor};
    font-weight: ${({ theme }) => theme.fontWeightBold};
    font-size: ${({ theme }) => theme.xsmallFont};
    border:none;
    padding:10px 12px !important;
`;

export const TableHeadingModalAction = styled.th`
    float: right;
    background: #F8F8F8;
    color: #000000;
    font-weight: 400;
    font-size: 12px;
    border: none;
    padding: 0 26px;
`;

export const TableCheckbox = styled.div`
    padding-right: 10px;
`;

export const TableActionHeading = styled.div`
    float: right;
    font-size: ${({ theme }) => theme.xsmallFont};
    font-weight: ${({ theme }) => theme.fontWeightBold};
    padding-right: 27px;
`;

export const TableActionHeadings = styled.div`
    float: right;
    font-size: ${({ theme }) => theme.xsmallFont};
    font-weight: ${({ theme }) => theme.fontWeightBold};
    padding-right: 74px;
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
                    height:36px;
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
    float: right;

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

