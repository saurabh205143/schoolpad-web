import React from 'react'
import { SLayout, SMain, Screen } from './Styles';
import Sidebar from '../Sidebar/Sidebar';
import MainHeader from '../MainHeader/MainHeader';

const Layout = ({ children,type }) => {
    return <SLayout>
        <MainHeader />
        <SMain>
            <Sidebar type={type} />
            <Screen>
                {children}
            </Screen>
        </SMain>
    </SLayout >

}

export default Layout;