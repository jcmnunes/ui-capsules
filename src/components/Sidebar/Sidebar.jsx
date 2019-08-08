import React from 'react';
import { Link } from 'react-router-dom';
import { GroupHeading, SidebarGroup, SidebarLink, StyledSidebar } from './Sidebar.styles';
import logo from '../../img/logo.svg';

const Sidebar = () => (
  <StyledSidebar>
    <Link to="/">
      <img src={logo} width="200px" alt="logo" />
    </Link>
    <SidebarGroup>
      <GroupHeading>Components</GroupHeading>
      <SidebarLink to="/button">Button</SidebarLink>
      <SidebarLink to="/icon20">Icon20</SidebarLink>
      <SidebarLink to="/checkbox">Checkbox</SidebarLink>
    </SidebarGroup>
  </StyledSidebar>
);

export default Sidebar;
