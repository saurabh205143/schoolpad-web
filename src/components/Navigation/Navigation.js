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
            
            case '/manageStore':
                return 3;
            case '/inventory/manageCategories':
                return 4;
            case '/inventory/manageItems':
                return 5;  
            case '/inventory/manageVendors':
                return 6;           
            case '/inventory/purchaseOrders':
                return 7;             
            case '/inventory/receiveItems':
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
            active = url.includes('/inventory/manageCategories');
        }

        if (tabname === 'ManageItems') {
            active = url.includes('/inventory/manageItems');
        }

        if (tabname === 'ManageVendors') {
            active = url.includes('/inventory/manageVendors');
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
                                    isActive={activeModule === '/inventory/manageCategories'}
                                />
                            </SidebarDropList>
                        </SidebarDropDown>
                    )}
                </NavBarItem>
                <NavBarItem
                    onClick={() => setShowDrop(showDrop === 5 ? null : 5)}
                    className={getClassNames('nav-item', showDrop === 5)}
                >
                    <NavigationItems
                        url=''
                        tabname="Add Items"
                        inactiveIcon={InactiveIcon}
                        activeIcon={ActiveIcon}
                        containsDrop="true"
                    />
                    {showDrop === 5 && (
                        <SidebarDropDown className='sidebar-drop'>
                            <SidebarDropList
                                className={getActiveClassNames('nav-item', 'ManageItems',)}>
                                <NavigationItems
                                    url="/inventory/manageItems"
                                    tabname="Add Items"
                                    drop="true"
                                    isActive={activeModule === '/inventory/manageItems'}
                                />
                            </SidebarDropList>
                        </SidebarDropDown>
                    )}
                </NavBarItem>
                <NavBarItem
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
                                    isActive={activeModule === '/inventory/manageVendors'}
                                />
                            </SidebarDropList>
                        </SidebarDropDown>
                    )}
                </NavBarItem>
                <NavBarItem
                    onClick={() => setShowDrop(showDrop === 7 ? null : 7)}
                    className={getClassNames('nav-item', showDrop === 7)}
                >
                    <NavigationItems
                        url=''
                        tabname="Purchase Order(s)"
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
                                    tabname="List of Purchase Order(s)"
                                    drop="true"
                                    isActive={activeModule === '/inventory/purchaseList'}
                                />
                            </SidebarDropList>
                            <SidebarDropList
                                className={getActiveClassNames('nav-item', 'PurchaseOrderAdd',)}>
                                <NavigationItems
                                    url="/inventory/purchaseAdd"
                                    tabname="Add New Purchase Order"
                                    drop="true"
                                    isActive={activeModule === '/inventory/purchaseAdd'}
                                />
                            </SidebarDropList>
                            <SidebarDropList
                                className={getActiveClassNames('nav-item', 'RequestPurchase',)}>
                                <NavigationItems
                                    url="/inventory/requestPurchase"
                                    tabname="Request Purchase"
                                    drop="true"
                                    isActive={activeModule === '/inventory/requestPurchase'}
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
                        url=''
                        tabname="Receive Items/GRN"
                        inactiveIcon={InactiveIcon}
                        activeIcon={ActiveIcon}
                        containsDrop="true"
                    />
                    {showDrop === 8 && (
                        <SidebarDropDown className='sidebar-drop'>
                            <SidebarDropList
                                className={getActiveClassNames('nav-item', 'ReceiveItems',)}>
                                <NavigationItems
                                    url="/inventory/receiveItems"
                                    tabname="Receive Items"
                                    drop="true"
                                    isActive={activeModule === '/inventory/receiveItems'}
                                />
                            </SidebarDropList>
                        </SidebarDropDown>
                    )}
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