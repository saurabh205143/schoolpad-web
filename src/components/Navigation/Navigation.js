import React, { useState } from 'react'
import { NavBar, NavBarItem, SidebarDropDown, SidebarDropList } from './components/navSidebarStyles';
import classNames from 'classnames';
import NavigationItems from './components/NavigationItems';

// Assets
import InactiveIcon from '../../images/inactive-icon.svg';
import ActiveIcon from '../../images/activeIcon.svg';


const getActiveModule = (url) => {
    let parts = url.split('/');
    return parts[3];
};
const activeModule = getActiveModule(window.location.href);

const Navigation = (props) => {

    const getActiveMenuIndex = (url) => {
        let parts = url.split('/');
        switch (parts[3]) {
            case 'transport/transportRoute':
            case 'transport/transportVehicle':
            case 'transport/transportstop':
            case 'transport/transportZone':
            case 'transport/transportAttendance':
            case 'transport/transportReport':
                return 1;
            case 'studentmapping':
                return 2;
            default:
                return 1;
        }
    };

    const getActiveClassNames = (defaultClass, tabname) => {
        let active = false;
        let url = window.location.pathname;

        if (tabname === 'TransportRoute') {
            active = url.includes('/transport/transportRoute');
        }

        if (tabname === 'TransportVehicle') {
            active = url.includes('/transport/transportVehicle');
        }

        if (tabname === 'TransportZone') {
            active = url.includes('/transport/transportZone');
        }

        if (tabname === 'TransportAttendance') {
            active = url.includes('/transport/transportAttendance');
        }

        if (tabname === 'TransportReport') {
            active = url.includes('/transport/transportReport');
        }

        if (tabname === 'Transportstop') {
            active = url.includes('/transport/transportstop');
        }

        if (tabname === 'StudentMapping') {
            active = url.includes('/studentmapping');
        }
        return classNames(defaultClass, { active: active });
    };

    const [showDrop, setShowDrop] = useState(
        getActiveMenuIndex(window.location.href),
    );
    const getClassNames = (defaultClass, active) => {
        return classNames(defaultClass, { active: active });
    };



    return (
        <NavBar>
            <NavBarItem
                onClick={() => setShowDrop(showDrop === 1 ? null : 1)}
                className={getClassNames('nav-item', showDrop === 1)}
            >
                <NavigationItems
                    url=''
                    tabname="Setup"
                    inactiveIcon={InactiveIcon}
                    activeIcon={ActiveIcon}
                    containsDrop="true"
                />
                {showDrop === 1 && (
                    <SidebarDropDown className='sidebar-drop'>
                        <SidebarDropList
                            className={getActiveClassNames('nav-item', 'TransportRoute',)}>
                            <NavigationItems
                                url="/transport/transportRoute"
                                tabname="Transport Route"
                                drop="true"
                            />
                        </SidebarDropList>
                        <SidebarDropList
                            className={getActiveClassNames('nav-item', 'TransportVehicle',)}>
                            <NavigationItems
                                url="/transport/transportVehicle"
                                tabname="Transport Vehicle"
                                drop="true"
                                isActive={activeModule === '/transport/transportVehicle'}
                            />
                        </SidebarDropList>
                        {/* <SidebarDropList
                            className={getActiveClassNames('nav-item', 'TransportZone',)}>
                            <NavigationItems
                                url="/transport/transportZone"
                                tabname="Transport Zone Master"
                                drop="true"
                                isActive={activeModule === '/transport/transportZone'}
                            />
                        </SidebarDropList> */}
                        {/* <SidebarDropList
                            className={getActiveClassNames('nav-item', 'TransportAttendance',)}>
                            <NavigationItems
                                url="/transport/transportAttendance"
                                tabname="Transport Attendance "
                                drop="true"
                                isActive={activeModule === '/transport/transportAttendance'}
                            />
                        </SidebarDropList> */}
                        {/* <SidebarDropList
                            className={getActiveClassNames('nav-item', 'TransportReport',)}>
                            <NavigationItems
                                url="/transport/transportReport"
                                tabname="Transport Report"
                                drop="true"
                                isActive={activeModule === '/transport/transportReport'}
                            />
                        </SidebarDropList> */}
                        <SidebarDropList
                            className={getActiveClassNames('nav-item', 'Transportstop',)}>
                            <NavigationItems
                                url="/transport/transportstop"
                                tabname="Transport Stop"
                                drop="true"
                                isActive={activeModule === '/transport/transportstop'}
                            />
                        </SidebarDropList>
                    </SidebarDropDown>
                )}

            </NavBarItem>
            <NavBarItem
                onClick={() => setShowDrop(showDrop === 2 ? null : 2)}
                className={getClassNames('nav-item', showDrop === 2)}
            >
                <NavigationItems
                    url='/studentmapping'
                    tabname="Student Mapping & Fees"
                    inactiveIcon={InactiveIcon}
                    activeIcon={ActiveIcon}
                    containsDrop="false"
                />
                {/* {showDrop === 2 && (
                    <SidebarDropDown className='sidebar-drop'>
                        <SidebarDropList>
                            <NavigationItems
                                isActive={activeModule === 'transportRoute'}
                                url="/transport/transportRoute"
                                tabname="Transport Route"
                            />
                        </SidebarDropList>
                        <SidebarDropList>
                            <NavigationItems
                                isActive={activeModule === 'transportvehicle'}
                                url="/transport/transportvehicle"
                                tabname="Transport Vehicle"
                            />
                        </SidebarDropList>
                    </SidebarDropDown>
                )} */}

            </NavBarItem>

        </NavBar>
    )
}

export default Navigation;