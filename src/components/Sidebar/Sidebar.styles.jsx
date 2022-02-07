import { NavLink } from 'react-router-dom';
import { styled } from '../../lib';

export const StyledSidebar = styled('nav', {
  width: 256,
  height: '100vh',
  padding: '48px 24px',
});

export const StyledSidebarLink = styled(NavLink, {
  fontSize: '$md',
  fontWeight: 500,
  height: 32,
  borderRadius: '$medium',
  background: '$neutral100',
  color: '$neutral700',
  cursor: 'pointer',
  padding: '4px 12px',
  position: 'relative',

  '&:hover': {
    background: '$neutral200',
  },

  '&.active': {
    background: '$neutral200',
    color: '$secondary700',

    '&::after': {
      content: '""',
      display: 'inline-block',
      height: 16,
      width: 3,
      borderRadius: '0 2px 2px 0',
      background: '$secondary500',
      position: 'absolute',
      left: 0,
      top: 8,
    },
  },
});

export const SidebarLink = props => <StyledSidebarLink activeClassName="active" {...props} />;

export const SidebarGroup = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: -12,
  paddingTop: 24,
});
