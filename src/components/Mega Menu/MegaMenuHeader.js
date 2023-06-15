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
    height: 490px;
    padding: 40px 0px;
    background: #F4F5F7;
    float: left;
    margin: 0;
`;

export const MegaMenuNav = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0 0 0 48px;
`;

export const MegaMenuNavList = styled.li`
    display: flex;
    flex-direction: column;
    list-style: none;
    height: 40px;
    align-item: centre;
    padding:0px 20px;
        >a{
            display: flex;
            align-item: centre;
            justify-content: space-between;
            text-decoration: none;
            >span{
                font-style: normal;
                font-weight: ${({ theme }) => theme.fontWeightRegular};
                font-size: ${({ theme }) => theme.mediumFont};
                color:${({ theme }) => theme.darkColor};
            }
            >.inactive-icons{
                display:none;
            }
            >.active-icons{
                display:flex;
            }           
        }
`;

export const SubNavMenu = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    >li {
        list-style:none;
        height:40px;
        display:flex;
        align-items:center;
        padding:0px 10px;
        position:relative;
    }

    >a{
        display: flex;
        align-item: centre;
        justify-content: space-between;
        text-decoration: none;
        >span{
            font-style: normal;
            font-weight: ${({ theme }) => theme.fontWeightRegular};
            font-size: ${({ theme }) => theme.mediumFont};
            color:${({ theme }) => theme.darkColor};
        }
        >.inactive-icons{
            display:none;
        }
        >.active-icons{
            display:flex;
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
                                    <img src={RightIcon} alt="Icon"/>
                                </Link>
                                <SubNavMenu>
                                </SubNavMenu>
                            </MegaMenuNavList>
                            <MegaMenuNavList>
                                <Link>
                                    <span>HR & Payroll</span>
                                    <img src={RightIcon} alt="Icon"/>
                                </Link>
                                <SubNavMenu>
                                </SubNavMenu>
                            </MegaMenuNavList>
                            <MegaMenuNavList>
                                <Link>
                                    <span>Student Data</span>
                                    <img src={RightIcon} alt="Icon"/>
                                </Link>
                                <SubNavMenu>
                                </SubNavMenu>
                            </MegaMenuNavList>
                            <MegaMenuNavList>
                                <Link>
                                    <span>Fees</span>
                                    <img src={RightIcon} alt="Icon"/>
                                </Link>
                                <SubNavMenu>
                                </SubNavMenu>
                            </MegaMenuNavList>
                            <MegaMenuNavList>
                                <Link>
                                    <span>Timetable & Attendance</span>
                                    <img src={RightIcon} alt="Icon"/>
                                </Link>
                                <SubNavMenu>
                                </SubNavMenu>
                            </MegaMenuNavList>
                            <MegaMenuNavList>
                                <Link>
                                    <span>Examination</span>
                                    <img src={RightIcon} alt="Icon"/>
                                </Link>
                                <SubNavMenu>
                                </SubNavMenu>
                            </MegaMenuNavList>
                            <MegaMenuNavList>
                                <Link>
                                    <span>Communication</span>
                                    <img src={RightIcon} alt="Icon"/>
                                </Link>
                                <SubNavMenu>
                                </SubNavMenu>
                            </MegaMenuNavList>
                            <MegaMenuNavList>
                                <Link>
                                    <span>Transport</span>
                                    <img src={RightIcon} alt="Icon"/>
                                </Link>
                                <SubNavMenu>
                                </SubNavMenu>
                            </MegaMenuNavList>
                            <MegaMenuNavList>
                                <Link>
                                    <span>Inventory</span>
                                    <img src={RightIcon} alt="Icon"/>
                                </Link>
                                <SubNavMenu>
                                </SubNavMenu>
                            </MegaMenuNavList>
                            <MegaMenuNavList>
                                <Link>
                                    <span>Library</span>
                                    <img src={RightIcon} alt="Icon"/>
                                </Link>
                                <SubNavMenu>
                                </SubNavMenu>
                            </MegaMenuNavList>
                            <MegaMenuNavList>
                                <Link>
                                    <span>Security</span>
                                    <img src={RightIcon} alt="Icon"/>
                                </Link>
                                <SubNavMenu>
                                </SubNavMenu>
                            </MegaMenuNavList>
                        </MegaMenuNav>
                    </MegaMenuNavigation>
                </MegaMenuCol>
                <MegaMenuVideo>
                    <img src={Video} alt="Video"/>
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

