import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';


// Assets
import Button from '../../../Buttons/Button';

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
    padding: 0px 14px;
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

const CustomDrop = ({ type, formFiledClick,formManageClick, buttonManageText, buttonManageMaintenance, formMaintenanceClick,buttonChangeHistory }) => {

  if (type === 'setting') {
    return (
      <DropContainer>
        <DropBox>
          <DropList>
            <DropItems>
              <ItemIcon/>
              <ItemText>Basic Setup</ItemText>
            </DropItems>
          </DropList>
          <DropList>
            <DropItems>
              <ItemIcon/>
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
              <ItemText>
                <Button
                    buttonText='Add Form Field'
                    className='link-button'
                    onClick={formFiledClick}
              />
              </ItemText>
            </DropItems>
          </DropList>
          <DropList>
            <DropItems>
              <ItemText>
                <Button
                    buttonText={buttonManageText}
                    className='link-button'
                    onClick={formManageClick}
              /></ItemText>
            </DropItems>
          </DropList>
          <DropList>
            <DropItems>
              <ItemText>
                <Button
                    buttonText={buttonManageMaintenance}
                    className='link-button'
                    onClick={formMaintenanceClick}
              /></ItemText>
            </DropItems>
          </DropList>
          <DropList>
            <DropItems>
              <ItemText>
                <Button
                    buttonText={buttonChangeHistory}
                    className='link-button'
                    onClick={formMaintenanceClick}
              />
              </ItemText>
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
              <ItemIcon/>
              <ItemText>My Info</ItemText>
            </DropItems>
          </DropList>
          <DropList>
            <DropItems>
              <ItemIcon/>
              <ItemText>Logout</ItemText>
            </DropItems>
          </DropList>
        </DropBox>
      </DropContainer>
    );
  }
  
}


export default CustomDrop;