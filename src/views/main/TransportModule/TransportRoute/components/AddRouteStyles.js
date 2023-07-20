import { styled } from "styled-components";

export const ModalBodyConatiner = styled.div`
    padding: 11px 22px;
`

export const FieldContainer = styled.div`
    width:100%;
    float:left;
`;

export const FieldContainerMove = styled.div`
    width:100%;
    float:left;
    padding: 11px 22px;
`;

export const FieldContainerBottom = styled.div`
    border-bottom: 1px solid #C1C7D0;
    width:100%;
    display:flex;
    flex-direction: column;
    align-items:center;
`;

export const FieldContainerBox = styled.div`
    padding: 11px 22px;
    width: 100%;
`

export const FieldContainerBottomLine = styled.div`
    border-bottom: 1px solid #C1C7D0;
    width:100%;
    display:flex;
    flex-direction: column;
    align-items:flex-start;
    padding: 11px 22px;
`;

export const FieldDividerHeading = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;
    >span {
        font-size: 14px;
        font-weight: 600;
    }
`;

export const FiledDividerHeadingContent = styled.div`
    display: flex;
    width: 100%;
`

export const FieldDividerHeadingBottom = styled.div`
    >span {
        font-size: 14px;
        font-weight: 600;
        margin: 11px 22px;
    }
`;

export const FieldDivider = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:flex-start;
`;

export const FieldDividerBottom = styled.div`
    width:100%;
    display:flex;
    align-items:flex-start;
    justify-content:flex-start;
    padding: 11px 22px;
    flex-direction:column;
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
    width:100%;
    float:left;
`;

export const FieldRightContainer1 = styled.div`
    width:30%;
    float:left;
    padding-left:8px;
`;

export const FieldRightContainerItem = styled.div`
    width:100%;
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
        margin-top: -6px;
        // width:120px;
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
            width:20px;
            height:20px;
        }
    }
`;

export const AddFormFieldTab = styled.div`
    margin: 10px 0 10px 0;
`

export const AddFormFieldTabText = styled.div`
    font-size: 14px;
    font-weight: 600;
    color: #44546F;
    cursor: pointer;
`

export const AddFormFieldInnerTab = styled.div`
    .form-field-tab {
        padding-left: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        border-bottom: none;
        border-radius: 0px;
        > li {
            > button{
                border:none;
                color: #44546F;
                border-bottom: 2px solid #091E4224;
            }
            >.nav-link.active{
                color: #0C66E4;
                border-bottom: 2px solid  #0C66E4;
            }
        }
    }
`

