import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

// Assets
import RightIcon from '../../../../images/right-arrow.svg';
import ActiveIcon from '../../../../images/active-icon.svg';
import VideoIcon from '../../../../images/video-icon.svg';
import Headings from '../../../Headings/Headings';

export const MegaMenu = styled.div`
    width:100%;
    float:left;
`;

export const MenuCol = styled.div`
    width:60%;
    float:left;
`;

export const  MegaNavigation = styled.div`
    width:290px;
    background: #F4F5F7;
    padding:40px 0px;
    float:left;
`;

export const MenuNavbar = styled.ul`
    list-style:none;
    margin:0;
    padding:0;
    display:flex;
    flex-direction:column;
`;

export const MenuList = styled.li`
    list-style:none;
    height:41px;
    display:flex;
    align-items:center;
    padding:0px 30px;
    position:relative;
    > a{
        display:flex;
        align-items:center;
        justify-content:space-between;
        text-decoration:none;
        width:100%;
        > span{
            font-style: normal;
            font-weight: ${({ theme }) => theme.fontWeightRegular};
            font-size: ${({ theme }) => theme.mediunFont};
            color: ${({ theme }) => theme.darkColor};
        }
        >.active-icon{
            display:none;
        }
        >.inactive-icon{
            display:block;
        }
    }
    &:hover{
        background:#ffffff;
        >a {
            > span{
                color:${({ theme }) => theme.blueColor};
            }
            >.active-icon{
                display:block;
            }
            >.inactive-icon{
                display:none;
            }
        }
        > .sub-drop-down{
            display:block;
            position:absolute;
            left:290px;
            top:0;
        }
    }
`;

export const SubMenu = styled.ul`
    width:290px;
    float:left;
    margin:0;
    padding:0 20px;
    display:none;
    border-right:1px solid #A5ADBA;
    >li{
        list-style:none;
        height:41px;
        display:flex;
        align-items:center;
        padding:0px 20px;
        position:relative;
        > a{
            display:flex;
            align-items:center;
            justify-content:space-between;
            text-decoration:none;
            width:100%;
            > span{
                font-style: normal;
                font-weight: ${({ theme }) => theme.fontWeightRegular};
                font-size: ${({ theme }) => theme.smallFont};
                color: ${({ theme }) => theme.darkColor};
            }
            >.active-icon{
                display:none;
            }
            >.inactive-icon{
                display:block;
            }
        } 
        &:hover{
            background:#ffffff;
            >a {
                > span{
                    color:${({ theme }) => theme.blueColor};
                }
                >.active-icon{
                    display:block;
                }
                >.inactive-icon{
                    display:none;
                }
            }
            >.sub-drop-level2{
                display:block;
                position:absolute;
                left:250px;
                top:0;
            }
        }   
    }
`;

export const SubMenuLevelTwo = styled.ul`
    width:220px;
    float:left;
    margin:0;
    display:none;
    padding:0 20px;
    >li{
        list-style:none;
        height:41px;
        display:flex;
        align-items:center;
        padding:0px 20px;
        position:relative;
        > a{
            display:flex;
            align-items:center;
            justify-content:space-between;
            text-decoration:none;
            width:100%;
            > span{
                font-style: normal;
                font-weight: ${({ theme }) => theme.fontWeightRegular};
                font-size: ${({ theme }) => theme.smallFont};
                color: ${({ theme }) => theme.darkColor};
            }
        } 
        &:hover{
            >a {
                > span{
                    color:${({ theme }) => theme.blueColor};
                }
            }
        }   
    }
`;

export const MenuVideo = styled.div`
    padding:40px 0;
    width: 40%;
    float: left;
`;

export const ParagraphText = styled.div`
    margin-top:7px;
    > p{
        width:70%;
    }
`;

const HeaderMegaMenu = props => {
  return (
    <MegaMenu>
        <MenuCol>
            <MegaNavigation>
                <MenuNavbar>
                    <MenuList>
                        <Link>
                            <span>Setup</span>
                            <img src={RightIcon} alt="Icon" className='inactive-icon' />
                            <img src={ActiveIcon} alt="Icon" className='active-icon' />
                        </Link>
                        <SubMenu className='sub-drop-down'>
                            <li>
                                <Link>
                                    <span>Staff Data Setup</span>
                                    <img src={RightIcon} alt="Icon" className='inactive-icon' />
                                    <img src={ActiveIcon} alt="Icon" className='active-icon' />
                                </Link>
                                <SubMenuLevelTwo className='sub-drop-level2'>
                                    <li>
                                        <Link>
                                            <span>Staff Data Reports</span>
                                        </Link>
                                    </li>
                                </SubMenuLevelTwo>
                            </li>
                            <li>
                                <Link>
                                    <span>Staff Data Reports</span>
                                    <img src={RightIcon} alt="Icon" className='inactive-icon' />
                                    <img src={ActiveIcon} alt="Icon" className='active-icon' />
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <span>Setup Staff Attendance</span>
                                    <img src={RightIcon} alt="Icon" className='inactive-icon' />
                                    <img src={ActiveIcon} alt="Icon" className='active-icon' />
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <span>Record Staff Attendance</span>
                                    <img src={RightIcon} alt="Icon" className='inactive-icon' />
                                    <img src={ActiveIcon} alt="Icon" className='active-icon' />
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <span>Staff Attendance Reports</span>
                                    <img src={RightIcon} alt="Icon" className='inactive-icon' />
                                    <img src={ActiveIcon} alt="Icon" className='active-icon' />
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <span>Salary Generation </span>
                                    <img src={RightIcon} alt="Icon" className='inactive-icon' />
                                    <img src={ActiveIcon} alt="Icon" className='active-icon' />
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <span>Salary Generation Reports </span>
                                    <img src={RightIcon} alt="Icon" className='inactive-icon' />
                                    <img src={ActiveIcon} alt="Icon" className='active-icon' />
                                </Link>
                            </li>
                        </SubMenu>
                    </MenuList>
                    <MenuList>
                        <Link>
                            <span>HR & Payroll</span>
                            <img src={RightIcon} alt="Icon" className='inactive-icon' />
                            <img src={ActiveIcon} alt="Icon" className='active-icon' />
                        </Link>
                    </MenuList>
                    <MenuList>
                        <Link>
                            <span>Fees</span>
                            <img src={RightIcon} alt="Icon" className='inactive-icon' />
                            <img src={ActiveIcon} alt="Icon" className='active-icon' />
                        </Link>
                    </MenuList>
                    <MenuList>
                        <Link>
                            <span>Timetable & Attendance</span>
                            <img src={RightIcon} alt="Icon" className='inactive-icon' />
                            <img src={ActiveIcon} alt="Icon" className='active-icon' />
                        </Link>
                    </MenuList>
                    <MenuList>
                        <Link>
                            <span>Examination</span>
                            <img src={RightIcon} alt="Icon" className='inactive-icon' />
                            <img src={ActiveIcon} alt="Icon" className='active-icon' />
                        </Link>
                    </MenuList>
                    <MenuList>
                        <Link>
                            <span>Communication</span>
                            <img src={RightIcon} alt="Icon" className='inactive-icon' />
                            <img src={ActiveIcon} alt="Icon" className='active-icon' />
                        </Link>
                    </MenuList>
                    <MenuList>
                        <Link>
                            <span>Transport</span>
                            <img src={RightIcon} alt="Icon" className='inactive-icon' />
                            <img src={ActiveIcon} alt="Icon" className='active-icon' />
                        </Link>
                    </MenuList>
                    <MenuList>
                        <Link>
                            <span>Inventory</span>
                            <img src={RightIcon} alt="Icon" className='inactive-icon' />
                            <img src={ActiveIcon} alt="Icon" className='active-icon' />
                        </Link>
                    </MenuList>
                    <MenuList>
                        <Link>
                            <span>Library</span>
                            <img src={RightIcon} alt="Icon" className='inactive-icon' />
                            <img src={ActiveIcon} alt="Icon" className='active-icon' />
                        </Link>
                    </MenuList>
                    <MenuList>
                        <Link>
                            <span>Security</span>
                            <img src={RightIcon} alt="Icon" className='inactive-icon' />
                            <img src={ActiveIcon} alt="Icon" className='active-icon' />
                        </Link>
                    </MenuList>
                </MenuNavbar>
            </MegaNavigation>
        </MenuCol>
        <MenuVideo>
            <img src={VideoIcon} alt="Video Icon" />
            <ParagraphText>
                <Headings 
                    description='A Practical Technique To Ensure That Your School Teachers Are 
                    Teaching As Per The Academic Plans'
                />
            </ParagraphText>
        </MenuVideo>
    </MegaMenu>
  )
}

export default HeaderMegaMenu;