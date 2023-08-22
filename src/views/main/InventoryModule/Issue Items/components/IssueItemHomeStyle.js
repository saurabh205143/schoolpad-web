import styled from 'styled-components';

export const IssueItemHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 42px;
  >h6{
    color: var(--black, #000);
    text-align: center;
    font-family: Source Sans Pro;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
  }
  >span{
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
`;

export const IssueItemBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-top: 64px;
    gap: 16px;
    >a{
      text-decoration: none;
    }
`;

export const IssueItemConatinerStaff = styled.div`
    width: 404px;
    height: 305px;
    flex-shrink: 0;
    border: 1px solid var(--text-text-tertiary, #0065FF);
    background: var(--bakground-background-tertiary, #E9F2FF);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const IssueInnerBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const IssueInnerConatiner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const IssueInnerConatinerText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
    >h6{
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      margin-bottom: 0px;
    }
    >span{
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
    }
`;

export const IssueItemConatinerStudent = styled.div`
    width: 404px;
    height: 305px;
    flex-shrink: 0;
    border: 1px solid var(--stroke-stroke-light, #C1C7D0);
    background: var(--bakground-background-primary, #FFF);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const EmployeeDetailHeader = styled.div`
  margin: 30px;
>h6{
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
}
`;

export const EmployeeDetailBox = styled.div`
    width: 1135px;
    height: 139px;
    flex-shrink: 0;
    border: 1px solid #DDE0E5;
    margin: 30px;
`;

export const EmployeeDetailBoxLeft = styled.div`
    width: 700px;
    height: 139px;
    border-right: 1px solid #DDE0E5;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 26px;
`;

export const EmployeeDetailBoxLeftData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    >h6{
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      margin-bottom: 0px;
      color: #172B4D;
    }
    >span{
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      color: #172B4D;
    }
`;

export const EmployeeDetailBoxRight = styled.div`

`;
