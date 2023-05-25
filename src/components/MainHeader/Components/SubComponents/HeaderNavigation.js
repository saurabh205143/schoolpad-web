import React, { useState } from 'react'
import { LinkTitle, NavBar, NavBarItem } from './navigationStyles';
import NavigationItems from './NavigationItems';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const AllRoutes = [
    {
        tabname: "Setup",
        link: "/setup",
    },
    {
        tabname: "HR & Payroll",
        link: "/hrpayrol",
    },
    {
        tabname: "Student Data",
        link: "/studentdata",
    },
    {
        tabname: "Timetable & Attendance",
        link: "/timetableattendance",
    },
    {
        tabname: "Examination",
        link: "/examination",
    },
    {
        tabname: "Fees",
        link: "/fee",
    },
    {
        tabname: "Transport",
        link: "/transport",
    },
    {
        tabname: "Communication",
        link: "/communication",
    },
];


const HeaderNavigation = (props) => {
    const { match } = props;
    const checkActiveRoute = (path) => (path === match?.url ? "active" : "");
    return (
        <NavBar>
            {AllRoutes.map((route) => {
                return (
                    <NavBarItem className={`nav-item ${checkActiveRoute(route.link)}`}>
                        <NavLink
                            to={route.link}
                            className="dropdown-item"
                            activeClassName="active"
                        >
                            <LinkTitle>{route.tabname}</LinkTitle>

                        </NavLink>

                    </NavBarItem>
                );
            })}
            <NavBarItem >
                <DropdownButton id="dropdown-basic-button" title="More" className='more-drop'>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
            </NavBarItem>
        </NavBar>
    )
}

export default HeaderNavigation;