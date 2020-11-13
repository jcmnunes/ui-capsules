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
      <SidebarLink to="/getting-started">Getting Started</SidebarLink>
      <GroupHeading>Components</GroupHeading>
      <SidebarLink to="/anchor">Anchor ✅</SidebarLink>
      <SidebarLink to="/button">Button ✅</SidebarLink>
      <SidebarLink to="/checkbox">Checkbox ✅</SidebarLink>
      <SidebarLink to="/dialog">Dialog</SidebarLink>
      <SidebarLink to="/dropdown">Dropdown</SidebarLink>
      <SidebarLink to="/editable-input">Editable Input</SidebarLink>
      <SidebarLink to="/icon">Icon</SidebarLink>
      <SidebarLink to="/illustrated-icon">IllustratedIcon</SidebarLink>
      <SidebarLink to="/icon-button">IconButton</SidebarLink>
      <SidebarLink to="/input">Input</SidebarLink>
      <SidebarLink to="/loading-mask">LoadingMask</SidebarLink>
      <SidebarLink to="/message">Message</SidebarLink>
      <SidebarLink to="/modal">Modal</SidebarLink>
      <SidebarLink to="/page-spinner">PageSpinner</SidebarLink>
      <SidebarLink to="/radio">Radio</SidebarLink>
      <SidebarLink to="/select">Select</SidebarLink>
      <SidebarLink to="/spinner">Spinner</SidebarLink>
      <SidebarLink to="/switch">Switch</SidebarLink>
      <SidebarLink to="/table">Table</SidebarLink>
      <SidebarLink to="/toaster">Toaster</SidebarLink>
      <SidebarLink to="/tooltip">Tooltip ✅</SidebarLink>
    </SidebarGroup>
  </StyledSidebar>
);

export default Sidebar;
