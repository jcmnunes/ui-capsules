import React from 'react';
import { Link } from 'react-router-dom';
import { GroupHeading, SidebarGroup, SidebarLink, StyledSidebar } from './Sidebar.styles';
import Logo from '../Svgs/Logo';

const Sidebar = () => (
  <StyledSidebar>
    <Link to="/">
      <Logo />
    </Link>
    <SidebarGroup>
      <GroupHeading>Components</GroupHeading>
      <SidebarLink to="/button">Button</SidebarLink>
      <SidebarLink to="/icon20">Icon20</SidebarLink>
      <SidebarLink to="/checkbox">Checkbox</SidebarLink>
      <SidebarLink to="/select">Select</SidebarLink>
      <SidebarLink to="/input">Input</SidebarLink>
      <SidebarLink to="/toaster">Toaster</SidebarLink>
      <SidebarLink to="/dropdown">Dropdown</SidebarLink>
      <SidebarLink to="/loading-mask">LoadingMask</SidebarLink>
      <SidebarLink to="/spinner">Spinner</SidebarLink>
      <SidebarLink to="/message">Message</SidebarLink>
    </SidebarGroup>
  </StyledSidebar>
);

export default Sidebar;
