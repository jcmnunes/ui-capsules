import React from 'react';
import {
  CloseButton,
  LogoLink,
  SectionHeader,
  SidebarGroup,
  SidebarHeader,
  SidebarLink,
  StyledSidebar,
} from './Sidebar.styles';
import Logo from '../Svgs/Logo';

interface Props {
  onClose(): void;
}

const Sidebar: React.FC<Props> = ({ onClose }) => (
  <StyledSidebar>
    <CloseButton icon="x" variant="ghostGray" size="small" onClick={onClose} aria-label="Close" />

    <SidebarHeader>
      <LogoLink to="/" aria-label="Go to Home">
        <Logo />
      </LogoLink>
    </SidebarHeader>

    <SidebarGroup>
      <SidebarLink to="/getting-started">Getting Started</SidebarLink>

      <SectionHeader>Components</SectionHeader>

      <SidebarLink to="/alert">Alert</SidebarLink>
      <SidebarLink to="/anchor">Anchor</SidebarLink>
      <SidebarLink to="/button">Button</SidebarLink>
      <SidebarLink to="/checkbox">Checkbox</SidebarLink>
      <SidebarLink to="/dialog">Dialog</SidebarLink>
      <SidebarLink to="/editable-input">Editable Input</SidebarLink>
      <SidebarLink to="/editor">Editor</SidebarLink>
      <SidebarLink to="/icon">Icon</SidebarLink>
      <SidebarLink to="/icon-button">IconButton</SidebarLink>
      <SidebarLink to="/illustrated-icon">IllustratedIcon</SidebarLink>
      <SidebarLink to="/input">Input</SidebarLink>
      <SidebarLink to="/menu">Menu</SidebarLink>
      <SidebarLink to="/modal">Modal</SidebarLink>
      <SidebarLink to="/radio">Radio</SidebarLink>
      <SidebarLink to="/radio-picker">RadioPicker</SidebarLink>
      <SidebarLink to="/select">Select</SidebarLink>
      <SidebarLink to="/skeleton">Skeleton</SidebarLink>
      <SidebarLink to="/spinner">Spinner</SidebarLink>
      <SidebarLink to="/splash">Splash</SidebarLink>
      <SidebarLink to="/switch">Switch</SidebarLink>
      <SidebarLink to="/table">Table</SidebarLink>
      <SidebarLink to="/text">Text</SidebarLink>
      <SidebarLink to="/truncated-text">TruncatedText</SidebarLink>
      <SidebarLink to="/toast">Toast</SidebarLink>
      <SidebarLink to="/tooltip">Tooltip</SidebarLink>

      <SectionHeader>Hooks</SectionHeader>
      <SidebarLink to="/use-uicaps-context">useUiCapsContext</SidebarLink>
    </SidebarGroup>
  </StyledSidebar>
);

export default Sidebar;
