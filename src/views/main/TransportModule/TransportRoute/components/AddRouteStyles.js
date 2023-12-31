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

export const DateInputContainer = styled.div`
    margin: 0 0 10px 0;
`;

export const FieldContainerBottom = styled.div`
    border-bottom: 1px solid #C1C7D0;
    width:100%;
    display:flex;
    flex-direction: column;
    align-items:center;
`;

export const FieldContainerBottomBox = styled.div`
    border-bottom: 1px solid #C1C7D0;
    width:100%;
    display:flex;
    flex-direction: row;
    align-items:center;
    padding: 0 0 20px;
`;

export const FieldDeleteBox = styled.div`
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

export const FieldDividerLine = styled.div`
    border-top: 1px solid rgba(9, 30, 66, 0.141176);
    margin: 30px 0 0 0;
    width:90%;
    display: flex;
    align-items:center;
    justify-content:flex-start;
`;

export const FieldDividerContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 30px 0 0;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        top: 40;
        right: 0;
        bottom: 0;
        width: 1px; 
        background-color: rgba(9, 30, 66, 0.141176);
        height: 70%; 
    }
`;

export const FieldDivider = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
`;

export const FieldDividerCustom = styled.div`
    width:100%;
    display:flex;
    align-items:flex-start;
    justify-content:flex-start;
`;

export const CustomCheckboxField = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:flex-start;
    margin-bottom:16px;
`;

export const FieldDividerDeleteBorder = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
`;

export const FieldDividerDeleteIcon = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
`;

export const FieldDividerDelete = styled.div`
    display: flex;
    flex-direction:column;
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
        >span{
            font-weight: ${({ theme }) => theme.fontWeightSemiBold};
            font-size: ${({ theme }) => theme.smallFont};
            color: ${({ theme }) => theme. buttonPrimary};
        }
    }
`;

export const RemoveBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    margin:12px 0;
    >button{
        >img{
            width:20px;
            height:20px;
        }
    }
`;


export const RemoveContianer = styled.div`
    width: auto;
    // padding-left: 16px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin:12px 20px;
    >button{
        >img{
            width:20px;
            height:20px;
        }
    }
`;

export const RemoveContianerDelete = styled.div`
    width: auto;
    // padding-left: 16px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin:12px 6px;
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

export const TabHeaderFilter = styled.div`
    .form-field-tab {
        padding-left: 0px;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
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

