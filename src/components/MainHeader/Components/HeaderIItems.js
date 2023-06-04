import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HeaderNavigation from './SubComponents/HeaderNavigation';

// Assets
import MenuIcon from '../../../images/menu-icon.svg';
import NotificationIcon from '../../../images/header-noti-icon.svg';
import SettingIcon from '../../../images/header-seting-icon.svg';
import UserIcon from '../../../images/header-user-icon.svg';
import Input from '../../Inputs/Input';
import SearchIcon from '../../../images/search-icon.svg';


export const HeaderContainer = styled.div`
    width:100%;
    height:56px;
    background:#ffffff;
    border-bottom:1px solid #C1C7D0;
    padding:0 12px;
    display:flex;
    align-items:center;
    justify-content:space-between;
`;

export const HeaderLeftContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;
`;

export const IconContainer = styled.img`
    width:32px;
`;

export const HeaderRightContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-end;
    >a{
        padding:0 6px;
    }
`;

export const SearchContainer = styled.div`
    > div{
        margin-bottom:0px;
        >.simple-input{
            width:240px;
            height:32px;
        }
    }
`;

const HeaderIItems = () => {
    return (
        <HeaderContainer>
            <HeaderLeftContainer>
                <Link >
                    <IconContainer src={MenuIcon} alt="Menu Icon" />
                </Link>
                <HeaderNavigation />
            </HeaderLeftContainer>
            <HeaderRightContainer>
                <SearchContainer>
                    <Input
                        leftIcon={SearchIcon}
                        placeholder={'Search '}
                        name='search'
                    />
                </SearchContainer>
                <Link>
                    <IconContainer src={NotificationIcon} alt="Notification Icon" />
                </Link>
                <Link>
                    <IconContainer src={SettingIcon} alt="Notification Icon" />
                </Link>
                <Link>
                    <IconContainer src={UserIcon} alt="Notification Icon" />
                </Link>
            </HeaderRightContainer>
        </HeaderContainer>
    )
}

export default HeaderIItems;