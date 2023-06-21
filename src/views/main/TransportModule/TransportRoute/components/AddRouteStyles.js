import { styled } from "styled-components";

export const FieldContainer = styled.div`
    width:100%;
    float:left;
`;

export const FieldDivider = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:flex-start;
`;

export const FieldLeftContainer = styled.div`
    width:70%;
    float:left;
    padding-right:8px;
`;

export const FieldRightContainer = styled.div`
    width:30%;
    float:left;
    padding-left:8px;
`;
export const FieldLeftContainer1 = styled.div`
    width:63%;
    float:left;
    padding-right:8px;
`;

export const FieldRightContainer1 = styled.div`
    width:30%;
    float:left;
    padding-left:8px;
`;

export const PickedDropContainer = styled.div`
    padding:8px 10px;
`;

export const AddMoreField = styled.div`
    width:100%;
    float:left;
    >a{
        display:flex;
        align-items:center;
        justify-content:flex-start;
        text-decoration:none;
        width:120px;
        >span{
            font-weight: ${({ theme }) => theme.fontWeightSemiBold};
            font-size: ${({ theme }) => theme.smallFont};
            color: ${({ theme }) => theme.blueColor};
        }
    }
`;

export const RemoveContianer = styled.div`
    width: auto;
    padding-left: 16px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top:12px;
    >button{
        >img{
            width:32px;
            height:32px;
        }
    }
`;