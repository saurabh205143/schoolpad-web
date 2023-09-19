import { styled } from "styled-components";

export const Container = styled.div`
    width:100%;
    padding:${(props) => props.padding || '16px 16px'};
    display:flex;
    align-items:center;
    justify-content:space-between;
`;

export const HeaderFilterContainder = styled.div`
    width:100%;
    padding:16px 16px;
    display:flex;
    flex-direction: column;
    align-items:flex-start;
    justify-content:space-between;
`

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
    margin: 0 10px 0 0;
    position:relative;
    >div{
        margin-bottom:0px;
        >.simple-input{
            height:36px;
            width:256px;
            @media screen and (max-width: 1240px) {
                width:160px;
            }
        }
    }
    >button{
        position:relative;
    }
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

export const HeaderFilterHeadings = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    border-top:1px solid rgba(9, 30, 66, 0.1412);
`;

export const ExportHeadings = styled.div`
    margin-right:6px;
`;

export const VerticalContainer = styled.div`
    width:100%;
    padding:16px 16px;
    display:flex; 
    flex-direction:column; 
`;

export const DescriptionText = styled.div`
    margin: 8px 0;
`;

export const GetRecordsContainer = styled.div`
    width:100%;
    display:flex;
    flex-flow: wrap;
    align-items:flex-end;
`;

export const RecordBox = styled.div`
 margin-right:10px;
 > div{
    margin-bottom:0px;
    > div{
        > div{
            > .select-drop{
                width:250px;
                height:36px;
                min-height:32px;
            }
        }
    }
    >.simple-input{
        width:250px;
        height:36px;
    }
 }
`;

export const RecordBoxNew = styled.div`
 margin-right:10px;
 > div{
    margin-bottom:0px;
    > div{
        >.select-drop-record-new {
        width:100px;
        }
        }
    }
 }
`;

export const DateContainer = styled.div`
    margin-right: 0px;
`;

export const DateInputLabel = styled.div`
    font-weight: 600;
    font-size: 12px;
    color: #000000;
`;

export const DateInputField = styled.div`
    display: flex;
    flex-direction: column;
    input#placeholder {
        color: #000000;
    }
`;

export const TabHeaderFilterHeading = styled.div`
    padding: 16px 0px 0px 16px;
`;

export const TabFilterContainer = styled.div`
    width:100%;
    display:flex;
    flex-flow: wrap;
    align-items:flex-end;
    padding: 0px 0px 16px 16px;
    gap:10px;
`;


