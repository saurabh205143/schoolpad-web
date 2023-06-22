import { styled } from "styled-components";

export const PaginationContainer = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    padding-top:20px;
    padding-bottom:20px;
`;

export const PaginationUnderList = styled.ul`
    margin:0;
    padding:0;
    display:flex;
    align-items:center
    list-style:none;
`;

export const PagesList = styled.li`
    padding:0;
    display:flex;
    align-items:center;
    justify-content:center;
    width:32px;
    height:32px;
    background:transparent;
    border-radius: 3px;
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeightRegular};
    font-size: ${({ theme }) => theme.smallFont};
    color: #172B4D;
    cursor:pointer;
    
    &.selected{
        background: #E9F2FF;
        color: #0C66E4;
    }

    &.disabled {
        >.arrow.right{
            >img.active-icon{
                display:none;
            }
            >img.disabled-icon{
                display:flex;
                width:32px;
                height:32px;
            }
        }
    }
    >.arrow.right{
        >img.disabled-icon{
            display:none;
        }
        >img.active-icon{
            display:flex;
            width:32px;
            height:32px;
        }
    }
`;