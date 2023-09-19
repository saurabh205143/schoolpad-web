import styled from "styled-components";

export const ModalContainer = styled.div`
    display:${show=> show.block && show.block};
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background: rgba(9, 30, 66, 0.7);
`;

export const ModalContent = styled.div`
    position:fixed;
    background: #ffffff;
    width:auto;
    min-width:600px;
    top:50%;
    left:50%;
    height: auto;
    transform:translate(-50%, -50%);
    border-radius:3px;
`;

export const ModalHeader = styled.div`
    width:100%;
    height:60px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 24px;
    border-bottom: 1px solid #B3BAC5;
    border-radius: 3px 3px 0px 0px;
`;

export const ModalBody = styled.div`
    // padding:11px 22px;
    max-height:80vh;
    overflow:auto;
   
`;

export const ModalFooter = styled.div`
    border-top: 1px solid #C1C7D0;
    border-radius: 0px 0px 3px 3px;
    width:100%;
    height:68px;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    padding:0px 24px;
`;

export const FooterButtonContainer = styled.div`
    margin-left:8px;
`;

export const DeleteModalContent = styled.div`
    position:fixed;
    background: #ffffff;
    width:auto;
    width:440px;
    top:50%;
    left:50%;
    height: auto;
    transform:translate(-50%, -50%);
    border-radius:3px;
    padding: 24px;
`;

export const DeleteModalHeader = styled.div`
    width:100%;
    height:50px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    border-radius: 3px 3px 0px 0px;
`;

export const DeleteInnerContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`
export const DeleteIcon = styled. div`
    padding-right: 10px;
`
export const DeleteModalBody = styled.div`
    max-height:80vh;
    overflow:auto;
`;

export const DeleteModalContainer = styled.div`
    display: flex;
    >span {
        font-size: 14px;
    }
`;

export const DeleteModalFooter = styled.div`
    border-radius: 0px 0px 3px 3px;
    width:100%;
    height:60px;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    padding-top: 16px;
`;



