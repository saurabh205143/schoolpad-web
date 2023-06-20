import React from 'react'
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

// Assets
import LogoutIcon from '../../../../images/logout.svg';
import InfoIcon from '../../../../images/inbox-icon.svg';

export const DropContainer = styled.div`
  
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
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid rgba(9, 30, 66, 0.1412);
    
    &:hover{
      >a{
        >span{
          color:#0065FF;
        }
      }
    }
`;

export const DropItems = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-decoration:none;
`;

export const ItemText = styled.span`
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeightRegular};
  font-size: ${({ theme }) => theme.smallFont};
  color: ${({ theme }) => theme.darkColor};
`;

export const ItemIcon = styled.img`
margin-right:10px;
`;

const CustomDrop = ({ type }) => {
  if (type === 'setting') {
    return (
      <DropContainer>
        <DropBox>
          <DropList>
            <DropItems>
              <ItemIcon src={InfoIcon} alt="Icon" />
              <ItemText>Basic Setup</ItemText>
            </DropItems>
          </DropList>
          <DropList>
            <DropItems>
              <ItemIcon src={LogoutIcon} alt="Icon" />
              <ItemText>SMS Left 11</ItemText>
            </DropItems>
          </DropList>
        </DropBox>
      </DropContainer>
    );
  }
  else if (type === 'associatedoptions') {
    return (
      <DropContainer>
        <DropBox>
          <DropList>
            <DropItems>
              <ItemText>Add Form Field</ItemText>
            </DropItems>
          </DropList>
          <DropList>
            <DropItems>
              <ItemText>Add Pick/Drop Time</ItemText>
            </DropItems>
          </DropList>
          <DropList>
            <DropItems>
              <ItemText>Transport Settings</ItemText>
            </DropItems>
          </DropList>
          <DropList>
            <DropItems>
              <ItemText>Change History</ItemText>
            </DropItems>
          </DropList>
        </DropBox>
      </DropContainer>
    );
  }
  else {
    return (
      <DropContainer>
        <DropBox>
          <DropList>
            <DropItems>
              <ItemIcon src={InfoIcon} alt="Icon" />
              <ItemText>My Info</ItemText>
            </DropItems>
          </DropList>
          <DropList>
            <DropItems>
              <ItemIcon src={LogoutIcon} alt="Icon" />
              <ItemText>Logout</ItemText>
            </DropItems>
          </DropList>
        </DropBox>
      </DropContainer>
    );
  }
}

export default CustomDrop;