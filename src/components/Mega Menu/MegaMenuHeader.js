import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';

//Assets

import RightIcon from '../../images/right-arrow.svg';
import Video from '../../images/mega-menu-video.svg';
import Headings from '../Headings/Headings';

export const MegaMenu = styled.div`
    width: 100%;
    float: left;
`;

export const MegaMenuCol = styled.div`
    width: 60%;
    float: left;
`;

export const MegaMenuNavigation = styled.div`
    position: absolute;
    width: 290px;
    height: 508px;
    background: #F4F5F7;
    float: left;
`;

export const MegaMenuNav = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 48px 0px 0 48px;
`;

export const MegaMenuNavList = styled.li`
list-style:none;
height:40px;
display:flex;
align-items:center
padding:0px 20px;
position:relative;
> a{
    display:flex;
    align-items:center;
    justify-content:space-between;
    text-decoration:none;
    padding:0px 20px;
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
    >.sub-drop-down{
        display:block;
        position:absolute;
        left:290px;
        top:0;
    }
    >.sub-drop-inner{
        display:block;
        position:absolute;
        left:290px;
        top:0;
    }
}
`;

export const SubNavMenu = styled.ul`
    width:290px;
    float:left;
    margin:0;
    padding:0 20px;
    display:none;
    border-right:1px solid #A5ADBA;
    >li{
        list-style:none;
        height:40px;
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
            >.sub-drop-inner{
                display:block;
                position:absolute;
                left:290px;
                top:0;
            }
        }   
    }
`;

export const SubMenuInner = styled.ul`
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
    }   
}
`;

export const MegaMenuVideo = styled.div`
    width: 40%;
    float: right;
    margin-top: 48px;
`;

export const MegaMenuVideoText = styled.div`
    width: 100%;
    margin-top: 20px;
    width: 360px;
    >p {
        font-weight: ${({ theme }) => theme.fontWeightRegular};
        font-size: ${({ theme }) => theme.mediumFont};
        color:${({ theme }) => theme.darkColor};
    }
`;

const MegaMenuHeader = () => {
    return (
        <>
            <MegaMenu>
                <MegaMenuCol>
                    <MegaMenuNavigation>
                        <MegaMenuNav>
                            <MegaMenuNavList>
                                <Link>
                                    <span>Setup</span>
                                    <img src={RightIcon} alt="Icon" />
                                </Link>
                                <SubNavMenu className='sub-drop-down'>
                                    <li>
                                        <Link>
                                            <span>Staff Data Setup</span>
                                            <img src={RightIcon} alt="Icon" />
                                        </Link>
                                        <SubMenuInner className='sub-drop-inner'>
                                            <li>
                                                <Link>
                                                <span>Take Staff Attendance</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link>
                                                <span>Apply for Leave</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link>
                                                <span>Approve Leave</span>
                                                </Link>
                                            </li>
                                        </SubMenuInner>
                                        </li>
                                    <li>
                                        <Link>
                                            <span>Staff Data Reports</span>
                                            <img src={RightIcon} alt="Icon" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <span>Setup Staff Attendance</span>
                                            <img src={RightIcon} alt="Icon" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <span>Record Staff Attendance</span>
                                            <img src={RightIcon} alt="Icon" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <span>Staff Attendance Reports</span>
                                            <img src={RightIcon} alt="Icon" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <span>Salary Generation</span>
                                            <img src={RightIcon} alt="Icon" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <span>Salary Generation Reports</span>
                                            <img src={RightIcon} alt="Icon" />
                                        </Link>
                                    </li>
                                </SubNavMenu>
                            </MegaMenuNavList>
                            <MegaMenuNavList>
                                <Link>
                                    <span>HR & Payroll</span>
                                    <img src={RightIcon} alt="Icon" />
                                </Link>
                            </MegaMenuNavList>
                            <MegaMenuNavList>
                                <Link>
                                    <span>Student Data</span>
                                    <img src={RightIcon} alt="Icon" />
                                </Link>
                                <SubNavMenu>
                                </SubNavMenu>
                            </MegaMenuNavList>
                            <MegaMenuNavList>
                                <Link>
                                    <span>Fees</span>
                                    <img src={RightIcon} alt="Icon" />
                                </Link>
                                <SubNavMenu>
                                </SubNavMenu>
                            </MegaMenuNavList>
                            <MegaMenuNavList>
                                <Link>
                                    <span>Timetable & Attendance</span>
                                    <img src={RightIcon} alt="Icon" />
                                </Link>
                                <SubNavMenu>
                                </SubNavMenu>
                            </MegaMenuNavList>
                            <MegaMenuNavList>
                                <Link>
                                    <span>Examination</span>
                                    <img src={RightIcon} alt="Icon" />
                                </Link>
                                <SubNavMenu>
                                </SubNavMenu>
                            </MegaMenuNavList>
                            <MegaMenuNavList>
                                <Link>
                                    <span>Communication</span>
                                    <img src={RightIcon} alt="Icon" />
                                </Link>
                                <SubNavMenu>
                                </SubNavMenu>
                            </MegaMenuNavList>
                            <MegaMenuNavList>
                                <Link>
                                    <span>Transport</span>
                                    <img src={RightIcon} alt="Icon" />
                                </Link>
                                <SubNavMenu>
                                </SubNavMenu>
                            </MegaMenuNavList>
                            <MegaMenuNavList>
                                <Link>
                                    <span>Inventory</span>
                                    <img src={RightIcon} alt="Icon" />
                                </Link>
                                <SubNavMenu>
                                </SubNavMenu>
                            </MegaMenuNavList>
                            <MegaMenuNavList>
                                <Link>
                                    <span>Library</span>
                                    <img src={RightIcon} alt="Icon" />
                                </Link>
                                <SubNavMenu>
                                    <SubMenuInner>
                                        <li>
                                            <Link>
                                                <span>Data</span>
                                            </Link>
                                        </li>
                                    </SubMenuInner>
                                </SubNavMenu>
                            </MegaMenuNavList>
                            <MegaMenuNavList>
                                <Link>
                                    <span>Security</span>
                                    <img src={RightIcon} alt="Icon" />
                                </Link>
                                <SubNavMenu>
                                </SubNavMenu>
                            </MegaMenuNavList>
                        </MegaMenuNav>
                    </MegaMenuNavigation>
                </MegaMenuCol>
                <MegaMenuVideo>
                    <img src={Video} alt="Video" />
                    <MegaMenuVideoText>
                        <Headings
                            description="A Practical Technique To Ensure That Your School Teachers Are Teaching As Per The Academic Plans"
                        />
                    </MegaMenuVideoText>
                </MegaMenuVideo>
            </MegaMenu>
        </>
    )
}

export default MegaMenuHeader;

