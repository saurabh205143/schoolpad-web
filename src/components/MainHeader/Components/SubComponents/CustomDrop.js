import React from 'react'
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const DropContainer = styled.div`
  position:absolute;
  right:20px;
  z-index:99;
`;

export const DropBox = styled.ul`
  box-shadow: 0px 0px 1px rgba(9, 30, 66, 0.31), 0px 8px 12px rgba(9, 30, 66, 0.15);
  border-radius: 3px;
  background: #ffffff;
  width: 154px;
  padding: 0px 0px; 
`;

export const DropList = styled.li`
    padding: 0px 16px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid rgba(9, 30, 66, 0.1412);
    
`;

export const DropItems = styled(Link)`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #000000;
  text-decoration:none;
`;

const CustomDrop = props => {
  return (
    <DropContainer>
      <DropBox>
        <DropList>
          <DropItems>My Info</DropItems>
        </DropList>
        <DropList>
          <DropItems>Logout</DropItems>
        </DropList>
      </DropBox>
    </DropContainer>
  )
}

export default CustomDrop;