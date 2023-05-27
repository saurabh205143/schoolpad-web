import React from 'react'
import { LogoContainer, SidebarContainer } from './Styles';
import Navigation from '../Navigation/Navigation';
import SchoolLogo from '../../images/school-logo.svg';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Navigation />
      <LogoContainer>
        <Link>
          <img src={SchoolLogo} alt="Logo" />
        </Link>
      </LogoContainer>
    </SidebarContainer>
  )
}

export default Sidebar;