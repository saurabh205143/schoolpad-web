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
import TriangleIcon from '../../../images/triangle.svg';
import HeaderMegaMenu from './SubComponents/HeaderMegaMenu';


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

export const MegaMenuIconContainer = styled.div`
    position:relative;
    > a{
        position:relative;
        > .max-mega-menu{
            display:none;
        }
        &:hover{
            > .max-mega-menu{
                display:block;
            }
        }
    }
`;

export const MaxMegaMenu = styled.div`
    position: fixed;
    top: 56px;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(9, 30, 66, 0.7);
    z-index:999;
`;

export const TriangleContainer = styled.div`
    position: absolute;
    left: 7px;
    top: -19px;
`;

export const MegaMenuBox = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px;
    height:490px;
    margin:10px;
`;

const HeaderIItems = () => {

    return (
        <>
            <HeaderContainer>
                <HeaderLeftContainer>
                    <MegaMenuIconContainer>
                        <Link>
                            <IconContainer src={MenuIcon} alt="Menu Icon" />
                            <MaxMegaMenu className='max-mega-menu'>
                                <TriangleContainer>
                                    <img src={TriangleIcon} alt="Icon" />
                                </TriangleContainer>
                                <MegaMenuBox>
                                    <HeaderMegaMenu />
                                </MegaMenuBox>
                            </MaxMegaMenu>
                        </Link>
                        
                    </MegaMenuIconContainer>
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

        </>
    )
}

export default HeaderIItems;