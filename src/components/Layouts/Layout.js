import React from 'react'
import { SLayout, SMain, Screen } from './Styles';
import Sidebar from '../Sidebar/Sidebar';
import MainHeader from '../MainHeader/MainHeader';

const Layout = ({ children }) => {
    return <SLayout>
        <MainHeader />
        <SMain>
            <Sidebar />
            <Screen>
                {children}
            </Screen>
        </SMain>
    </SLayout >

}

export default Layout;