import { styled } from "styled-components";

export const HistoryContainer = styled.div`
    width: 100%;
}
`;

export const ChangeHistoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-item: centre;
    justify-content: space-between;
`;

export const HistoryList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    font-size: font-weight: 700;
    font-size: 14px;
    color: #000000;
`;


export const HistoryItem = styled.li`
    display: flex;
    margin-top: 20px;
`;

export const LeftContainer = styled.div`
    display:flex;
    flex-direction:column;
`;

export const LeftContainerProgressLine = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 4px;
`;

export const RightContainer = styled.div`
    display:flex;
    flex-direction:column;
    padding-left: 16px;
    >h6 {
      font-weight: 700;
      font-size: 14px;
      color: #0065FF;
      margin-bottom: 0px;
      display: flex;
      flex-direction: column;
    }

    >span {
      color: #000000;
      display: flex;
      flex-direction: column;
      font-weight: 400;
      font-size: 14px;
    }
`;