import { NavLink } from 'react-router-dom';
import { styled } from '../../lib';

export const StyledSidebar = styled('nav', {
  width: 256,
  height: '100vh',
  padding: '48px 24px',
});

export const StyledSidebarLink = styled(NavLink, {
  fontSize: '$sm',
  fontWeight: 500,
  height: 32,
  borderRadius: '$medium',
  background: '$neutral100',
  color: '$neutral700',
  cursor: 'pointer',
  padding: '4px 12px',

  '&:hover': {
    background: '$neutral200',
  },

  '&.active': {
    background: '$neutral200',
    color: '$secondary700',
  },
});

export const SidebarLink = props => <StyledSidebarLink activeClassName="active" {...props} />;

export const SidebarGroup = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: -12,
  paddingTop: 24,
});
