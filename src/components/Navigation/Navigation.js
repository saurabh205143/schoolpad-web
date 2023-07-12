import React, { useState } from 'react'
import { NavBar, NavBarItem, NavBarItems, NavBars, SidebarDropDown, SidebarDropList } from './components/navSidebarStyles';
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

const Navigation = ({type}) => {

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
            case '/inventory/manageStore':
                return 3;
            case '/inventory/manageCategories':
                return 4;
            case '/inventory/addItems':
                return 5;  
            case '/inventory/manageVendors':
                return 6;           
            case '/inventory/addPo':
                return 7;             
            case '/inventory/receiveItems':
                return 8;             
            case '/inventory/issueItem':
                return 9;             
            case '/inventory/itemReport':
                return 10;           
            case '/inventory/issueReport':
                return 11;

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

        if (tabname === 'ManageStore') {
            active = url.includes('/inventory/manageStore');
        }
        return classNames(defaultClass, { active: active });
    };

    const [showDrop, setShowDrop] = useState(
        getActiveMenuIndex(window.location.href),
    );
    const getClassNames = (defaultClass, active) => {
        return classNames(defaultClass, { active: active });
    };


    if(type === 'transport'){
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
    )}

    else if (type === 'inventory'){
        return (
            <NavBars>
            <NavBarItems
                onClick={() => setShowDrop(showDrop === 3 ? null : 3)}
                className={getClassNames('nav-item', showDrop === 3)}
            >
                <NavigationItems
                    url=''
                    tabname="Manage Store"
                    inactiveIcon={InactiveIcon}
                    activeIcon={ActiveIcon}
                    containsDrop="true"
                />
                {showDrop === 3 && (
                    <SidebarDropDown className='sidebar-drop'>
                        <SidebarDropList
                            className={getActiveClassNames('nav-item', 'ManageStore',)}>
                            <NavigationItems
                                url="/inventory/manageStore"
                                tabname="Manage Store"
                                drop="true"
                            />
                        </SidebarDropList>
                    </SidebarDropDown>
                )}
            </NavBarItems>
            <NavBarItems
                onClick={() => setShowDrop(showDrop === 4 ? null : 4)}
                className={getClassNames('nav-item', showDrop === 4)}
            >
                <NavigationItems
                    url=''
                    tabname="Manage Categories"
                    inactiveIcon={InactiveIcon}
                    activeIcon={ActiveIcon}
                    containsDrop="true"
                />
                {showDrop === 4 && (
                    <SidebarDropDown className='sidebar-drop'>
                        <SidebarDropList
                            className={getActiveClassNames('nav-item', 'ManageCategories',)}>
                            <NavigationItems
                                url="/inventory/manageCategories"
                                tabname="Manage Categories"
                                drop="true"
                            />
                        </SidebarDropList>
                    </SidebarDropDown>
                )}
            </NavBarItems>
            <NavBarItems
                onClick={() => setShowDrop(showDrop === 5 ? null : 5)}
                className={getClassNames('nav-item', showDrop === 5)}
            >
                <NavigationItems
                    url=''
                    tabname="Add Item(s)"
                    inactiveIcon={InactiveIcon}
                    activeIcon={ActiveIcon}
                    containsDrop="true"
                />
                {showDrop === 5 && (
                    <SidebarDropDown className='sidebar-drop'>
                        <SidebarDropList
                            className={getActiveClassNames('nav-item', 'AddItems',)}>
                            <NavigationItems
                                url="/inventory/addItems"
                                tabname="Add Item(s)"
                                drop="true"
                            />
                        </SidebarDropList>
                    </SidebarDropDown>
                )}
            </NavBarItems>
            <NavBarItems
                onClick={() => setShowDrop(showDrop === 6 ? null : 6)}
                className={getClassNames('nav-item', showDrop === 6)}
            >
                <NavigationItems
                    url=''
                    tabname="Manage Vendor(s)"
                    inactiveIcon={InactiveIcon}
                    activeIcon={ActiveIcon}
                    containsDrop="true"
                />
                {showDrop === 6 && (
                    <SidebarDropDown className='sidebar-drop'>
                        <SidebarDropList
                            className={getActiveClassNames('nav-item', 'ManageVendors',)}>
                            <NavigationItems
                                url="/inventory/manageVendors"
                                tabname="Manage Vendor(s)"
                                drop="true"
                            />
                        </SidebarDropList>
                    </SidebarDropDown>
                )}
            </NavBarItems>
            <NavBarItems
                onClick={() => setShowDrop(showDrop === 7 ? null : 7)}
                className={getClassNames('nav-item', showDrop === 7)}
            >
                <NavigationItems
                    url=''
                    tabname="Add PO"
                    inactiveIcon={InactiveIcon}
                    activeIcon={ActiveIcon}
                    containsDrop="true"
                />
                {showDrop === 7 && (
                    <SidebarDropDown className='sidebar-drop'>
                        <SidebarDropList
                            className={getActiveClassNames('nav-item', 'AddPO',)}>
                            <NavigationItems
                                url="/inventory/addPo"
                                tabname="Add PO"
                                drop="true"
                            />
                        </SidebarDropList>
                    </SidebarDropDown>
                )}
            </NavBarItems>
            <NavBarItems
                onClick={() => setShowDrop(showDrop === 8 ? null : 8)}
                className={getClassNames('nav-item', showDrop === 8)}
            >
                <NavigationItems
                    url=''
                    tabname="Receive Items/GRN"
                    inactiveIcon={InactiveIcon}
                    activeIcon={ActiveIcon}
                    containsDrop="true"
                />
                {showDrop === 8 && (
                    <SidebarDropDown className='sidebar-drop'>
                        <SidebarDropList
                            className={getActiveClassNames('nav-item', 'ReceiveItems/GRN',)}>
                            <NavigationItems
                                url="/inventory/receiveItems"
                                tabname="Receive Items/GRN"
                                drop="true"
                            />
                        </SidebarDropList>
                    </SidebarDropDown>
                )}
            </NavBarItems>
            <NavBarItems
                onClick={() => setShowDrop(showDrop === 9 ? null : 9)}
                className={getClassNames('nav-item', showDrop === 9)}
            >
                <NavigationItems
                    url=''
                    tabname="Issue Item"
                    inactiveIcon={InactiveIcon}
                    activeIcon={ActiveIcon}
                    containsDrop="true"
                />
                {showDrop === 9 && (
                    <SidebarDropDown className='sidebar-drop'>
                        <SidebarDropList
                            className={getActiveClassNames('nav-item', 'IssueItem',)}>
                            <NavigationItems
                                url="/inventory/issueItem"
                                tabname="Issue Item"
                                drop="true"
                            />
                        </SidebarDropList>
                    </SidebarDropDown>
                )}
            </NavBarItems>
            <NavBarItems
                onClick={() => setShowDrop(showDrop === 10 ? null : 10)}
                className={getClassNames('nav-item', showDrop === 10)}
            >
                <NavigationItems
                    url=''
                    tabname="Item Report"
                    inactiveIcon={InactiveIcon}
                    activeIcon={ActiveIcon}
                    containsDrop="true"
                />
                {showDrop === 10 && (
                    <SidebarDropDown className='sidebar-drop'>
                        <SidebarDropList
                            className={getActiveClassNames('nav-item', 'ItemReport',)}>
                            <NavigationItems
                                url="/inventory/itemReport"
                                tabname="Item Report"
                                drop="true"
                            />
                        </SidebarDropList>
                    </SidebarDropDown>
                )}
            </NavBarItems>
            <NavBarItems
                onClick={() => setShowDrop(showDrop === 11 ? null : 11)}
                className={getClassNames('nav-item', showDrop === 11)}
            >
                <NavigationItems
                    url=''
                    tabname="Issue Report"
                    inactiveIcon={InactiveIcon}
                    activeIcon={ActiveIcon}
                    containsDrop="true"
                />
                {showDrop === 11 && (
                    <SidebarDropDown className='sidebar-drop'>
                        <SidebarDropList
                            className={getActiveClassNames('nav-item', 'Issue Report',)}>
                            <NavigationItems
                                url="/inventory/issueReport"
                                tabname="Issue Report"
                                drop="true"
                            />
                        </SidebarDropList>
                    </SidebarDropDown>
                )}
            </NavBarItems>
        </NavBars>
        )}


}

export default Navigation;