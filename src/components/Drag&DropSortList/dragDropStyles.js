import styled from "styled-components";

export const DragIconWrapper = styled.div`
  display: inline-block;
  svg {
    width: 38px;
    height: 38px;
    vertical-align: middle;
  }
`;
export const RouteModalHeading = styled.h6`
    font-weight: 700;
    font-size: 14px;
    color: #0065FF;
    margin: 10px 0 10px 0;
`;
export const RouteDiabledHeading = styled.div`
    background: #F8F8F8;
    border-bottom: 1px solid rgba(9, 30, 66, 0.141176);
    width: 100%;
    height: 46px;
    padding: 12px 0 12px 42px;
    color: #000000;
    font-weight: 700;
    font-size: 12px;
    margin-top: 20px;
`;

export const ListContainer = styled.div`
  box-sizing: border-box;
  border-radius: 3px;
  width: 100%;
`;

export const ListItem = styled.div`
  color: #000000;
  padding: 4px;
  width: 100%;
  border: 1px solid #A5ADBA;
  margin-bottom: 10px;
  border-radius: 3px;
  background: #ffffff;
`;