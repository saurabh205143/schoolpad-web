import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HeaderNavigation from './SubComponents/HeaderNavigation';
import HeaderMegaMenu from './SubComponents/HeaderMegaMenu';
import CustomDrop from './SubComponents/CustomDrop';
import Notification from '../../Notifications/Notification';
import Input from '../../Inputs/Input';

// Assets
import MenuIcon from '../../../images/menu-icon.svg';
import NotificationIcon from '../../../images/notification-icon.svg';
import SettingIcon from '../../../images/header-setting-icon.svg';
import UserIcon from '../../../images/header-user-icon.svg';
import SearchIcon from '../../../images/search-icon.svg';
import TriangleIcon from '../../../images/triangle.svg';
import DropIcon from '../../../images/drop-down-icon.svg';
import ChatIcon from '../../../images/chat.svg';


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

export const ProfileContainer = styled(Link)`
    >img{
        width:20px;
    }
`;

export const IconContainer = styled.img`
        width:20px;
        &.user-icon {
            width: 26px;
        }
`;

export const SettingsContainer = styled(Link)`
    >img{
        width:20px;
    }
    &.setting-container{
        padding: 0 4px 0 6px;
    }
`;

export const HeaderRightContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-end;
    >a{
        padding:0 6px;
        position:relative;
    }
`;

export const SearchContainer = styled.div`
    > div{
        margin-bottom:0px;
        padding-right:10px;
        >.simple-input{
            width:210px;
            height:32px;
        }
    }
`;

export const MegaMenuIconContainer = styled.div`
    position:relative;
    > a{
        position:relative;
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

export const DropContianer = styled.div`
    position:absolute;
    right:20px;
    z-index:99;
`;

// Hook
function useOnClickOutside(ref, buttonRef, handler) {
    useEffect(
        () => {
            const listener = (event) => {
                // Do nothing if clicking ref's element or descendent elements
                if (!ref.current || ref.current.contains(event.target) || (buttonRef && buttonRef.current.contains(event.target))) {
                    return;
                }
                handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            };
        },
        // Add ref and handler to effect dependencies
        // It's worth noting that because passed in handler is a new ...
        // ... function on every render that will cause this effect ...
        // ... callback/cleanup to run every render. It's not a big deal ...
        // ... but to optimize you can wrap handler in useCallback before ...
        // ... passing it into this hook.
        [ref, handler]
    );
}

const HeaderIItems = () => {

    const [showmegaMenu, setShowmegaMenu] = useState(false);
    const ref = useRef();
    const buttonRef = useRef();
    const ref2 = useRef();
    const buttonRef2 = useRef();
    const ref3 = useRef();
    const buttonRef3 = useRef();

    const [showDrop, setShowDrop] = useState(false);
    const [showSettingDrop, setShowSettingDrop] = useState(false);

    useOnClickOutside(ref, buttonRef, () => setShowmegaMenu(false));
    useOnClickOutside(ref2, buttonRef2, () => setShowSettingDrop(false));
    useOnClickOutside(ref3, buttonRef3, () => setShowDrop(false));
    

    return (
        <>
            <HeaderContainer>
                <HeaderLeftContainer>
                    <MegaMenuIconContainer>
                        <Link
                            ref={buttonRef}
                            onClick={() => setShowmegaMenu(!showmegaMenu)}
                        >
                            <IconContainer src={MenuIcon} alt="Menu Icon" />
                            {showmegaMenu &&
                                <MaxMegaMenu ref={ref} className='max-mega-menu'>
                                    <TriangleContainer>
                                        <img src={TriangleIcon} alt="Icon" />
                                    </TriangleContainer>
                                    <MegaMenuBox>
                                        <HeaderMegaMenu />
                                    </MegaMenuBox>
                                </MaxMegaMenu>
                            }
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
                    {/* All Notification */}
                    <Notification 
                    tooltiptext='Notification'
                    countText='9' 
                    icon={NotificationIcon} />

                    {/* Messages Notification */}
                    <Notification 
                    tooltiptext='Chat'
                    countText='2' 
                    icon={ChatIcon} />

                    {/* Setting Container */}
                    <SettingsContainer
                    className='setting-container'
                    ref={buttonRef2} 
                    onClick={() => setShowSettingDrop(!showSettingDrop)}>
                        <IconContainer 
                        src={SettingIcon} 
                        alt="Icon" />
                        <IconContainer 
                        src={DropIcon}
                        alt="Icon"
                        />
                        {/* Setting Drop Down */}
                        {showSettingDrop && (
                            <DropContianer ref={ref2}>
                                <CustomDrop type='setting' />
                            </DropContianer>
                        )}
                    </SettingsContainer>

                    {/* Profile Container */}
                    <Link 
                    ref={buttonRef3} 
                    onClick={() => setShowDrop(!showDrop)}>
                        <IconContainer 
                        src={UserIcon} 
                        alt="Icon" 
                        className='user-icon'
                        />
                        <IconContainer 
                        src={DropIcon}
                        alt="Icon"
                        />

                        {/* Profile Drop Down */}
                        {showDrop && (
                            <DropContianer ref={ref3}>
                                <CustomDrop />
                            </DropContianer>
                        )}
                    </Link>
                </HeaderRightContainer>
            </HeaderContainer>
        </>
    )
}

export default HeaderIItems;