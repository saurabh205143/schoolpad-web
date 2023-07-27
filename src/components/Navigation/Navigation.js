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
            case 'manageStore':
                return 3;
            case 'manageCategories':
                return 4;
            case 'manageItems':
                return 5;  
            case 'manageVendors':
                return 6;           
            case 'inventory/purchaseList':
            case 'inventory/purchaseAdd':
                return 7;
            case 'receiveItems':
                return 8;             
            case '/inventory/issueItems':
                return 9;             
            case '/inventory/itemReports':
                return 10;           
            case '/inventory/issueReports':
                return 11;
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

        if (tabname === 'ManageStore') {
            active = url.includes('/manageStore');
        }

        if (tabname === 'ManageCategories') {
            active = url.includes('/manageCategories');
        }

        if (tabname === 'ManageItems') {
            active = url.includes('/manageItems');
        }

        if (tabname === 'ManageVendors') {
            active = url.includes('/manageVendors');
        }

        if (tabname === 'PurchaseOrderList') {
            active = url.includes('/inventory/purchaseList');
        }

        if (tabname === 'PurchaseOrderAdd') {
            active = url.includes('/inventory/purchaseAdd');
        }

        if (tabname === 'RequestPurchase') {
            active = url.includes('/inventory/requestPurchase');
        }

        if (tabname === 'ReceiveItems') {
            active = url.includes('/inventory/receiveItems');
        }

        if (tabname === 'IssueItems') {
            active = url.includes('/inventory/issueItems');
        }

        if (tabname === 'ItemReports') {
            active = url.includes('/inventory/itemReports');
        }

        if (tabname === 'IssueReports') {
            active = url.includes('/inventory/issueReports');
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
            </NavBarItem>
        </NavBar>
    )}

    else if(type === 'inventory'){
        return (
            <NavBar>
                <NavBarItem
                    onClick={() => setShowDrop(showDrop === 3 ? null : 3)}
                    className={getClassNames('nav-item', showDrop === 3)}
                >
                    <NavigationItems
                        url='/manageStore'
                        tabname="Manage Store"
                        inactiveIcon={InactiveIcon}
                        activeIcon={ActiveIcon}
                        containsDrop="false"
                    />
                    
                </NavBarItem> 
                <NavBarItem
                    onClick={() => setShowDrop(showDrop === 4 ? null : 4)}
                    className={getClassNames('nav-item', showDrop === 4)}
                >
                    <NavigationItems
                        url='/manageCategories'
                        tabname="Manage Categories"
                        inactiveIcon={InactiveIcon}
                        activeIcon={ActiveIcon}
                        containsDrop="false"
                    />
                    
                </NavBarItem>
                <NavBarItem
                    onClick={() => setShowDrop(showDrop === 5 ? null : 5)}
                    className={getClassNames('nav-item', showDrop === 5)}
                >
                    <NavigationItems
                        url='/manageItems'
                        tabname="Add Items"
                        inactiveIcon={InactiveIcon}
                        activeIcon={ActiveIcon}
                        containsDrop="false"
                    />
                </NavBarItem>
                <NavBarItem
                    onClick={() => setShowDrop(showDrop === 6 ? null : 6)}
                    className={getClassNames('nav-item', showDrop === 6)}
                >
                    <NavigationItems
                        url='/manageVendors'
                        tabname="Manage Vendor(s)"
                        inactiveIcon={InactiveIcon}
                        activeIcon={ActiveIcon}
                        containsDrop="false"
                    />
                </NavBarItem>
                <NavBarItem
                    onClick={() => setShowDrop(showDrop === 7 ? null : 7)}
                    className={getClassNames('nav-item', showDrop === 7)}
                >
                <NavigationItems
                    url=''
                    tabname="Purchase Order"
                    inactiveIcon={InactiveIcon}
                    activeIcon={ActiveIcon}
                    containsDrop="true"
                />
                {showDrop === 7 && (
                    <SidebarDropDown className='sidebar-drop'>
                        <SidebarDropList
                            className={getActiveClassNames('nav-item', 'PurchaseOrderList',)}>
                            <NavigationItems
                                url="/inventory/purchaseList"
                                tabname="List of Purchase Order"
                                drop="true"
                            />
                        </SidebarDropList>
                        <SidebarDropList
                            className={getActiveClassNames('nav-item', 'PurchaseOrderAdd',)}>
                            <NavigationItems
                                url="/inventory/purchaseAdd"
                                tabname="Add New Purchase Order"
                                drop="true"
                            />
                        </SidebarDropList>
                    </SidebarDropDown>
                )}
                </NavBarItem>
                <NavBarItem
                    onClick={() => setShowDrop(showDrop === 8 ? null : 8)}
                    className={getClassNames('nav-item', showDrop === 8)}
                >
                    <NavigationItems
                        url='/receiveItems'
                        tabname="Receive Items/GRN"
                        inactiveIcon={InactiveIcon}
                        activeIcon={ActiveIcon}
                        containsDrop="true"
                    />
                </NavBarItem>
                <NavBarItem
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
                                className={getActiveClassNames('nav-item', 'IssueItems',)}>
                                <NavigationItems
                                    url="/inventory/issueItems"
                                    tabname="Issue Item"
                                    drop="true"
                                    isActive={activeModule === '/inventory/issueItems'}
                                />
                            </SidebarDropList>
                        </SidebarDropDown>
                    )}
                </NavBarItem>
                <NavBarItem
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
                                className={getActiveClassNames('nav-item', 'ItemReports',)}>
                                <NavigationItems
                                    url="/inventory/itemReports"
                                    tabname="Item Report"
                                    drop="true"
                                    isActive={activeModule === '/inventory/itemReports'}
                                />
                            </SidebarDropList>
                        </SidebarDropDown>
                    )}
                </NavBarItem>
                <NavBarItem
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
                                className={getActiveClassNames('nav-item', 'IssueReports',)}>
                                <NavigationItems
                                    url="/inventory/itemReports"
                                    tabname="Issue Report"
                                    drop="true"
                                    isActive={activeModule === '/inventory/issueReports'}
                                />
                            </SidebarDropList>
                        </SidebarDropDown>
                    )}
                </NavBarItem>
            </NavBar>
        )}
}

export default Navigation;