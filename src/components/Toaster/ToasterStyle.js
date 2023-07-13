import { styled } from "styled-components";

export const Toaster = styled.div` 
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ToasterConatinerError = styled.div`
  display: flex;
  width: 636px;
  padding: 12px;
  align-items: center;
  gap: 4px;
  background-color: #CA3521;
  margin-bottom: 20px;
`;

export const ToasterConatinerSuccessful = styled.div`
  display: flex;
  width: 636px;
  padding: 12px;
  align-items: center;
  gap: 4px;
  background-color: #00875A;
  margin-bottom: 20px;
`

export const ToasterConatinerWarning = styled.div`
  display: flex;
  width: 636px;
  padding: 12px;
  align-items: center;
  gap: 4px;
  background-color: #E2B203;
`

export const ToasterInnerText = styled.div`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;



