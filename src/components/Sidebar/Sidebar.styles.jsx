import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IconButton, Text } from '../../lib';
import { styled } from 'styled-components';

export const StyledSidebar = styled.nav({
  width: 256,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'hidden',
});

export const SidebarHeader = styled.div(({ theme }) => ({
  padding: '48px 24px 24px',
  background: theme.colors.neutral100,
  zIndex: 1,
}));

export const SidebarGroup = styled.div({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  marginLeft: -12,
  paddingTop: 24,
  padding: '0 24px 48px',
  overflowY: 'auto',
});

export const LogoLink = styled(Link)(({ theme }) => ({
  display: 'block',
  padding: 12,
  marginLeft: -12,

  '&[data-focus-visible-added]:focus': {
    boxShadow: `inset 0px 0px 0px 1px ${theme.colors.pink600}`,
  },
}));

export const StyledSidebarLink = styled(NavLink)(({ theme }) => ({
  fontSize: theme.fontSizes.md,
  fontWeight: 500,
  height: 32,
  borderRadius: theme.radii.medium,
  background: theme.colors.neutral100,
  color: theme.colors.neutral700,
  cursor: 'pointer',
  padding: '4px 12px',
  position: 'relative',

  '&:hover': {
    background: theme.colors.neutral200,
  },

  '&[data-focus-visible-added]:focus': {
    boxShadow: `inset 0px 0px 0px 1px ${theme.colors.pink600}`,
  },

  '&.active': {
    background: theme.colors.neutral200,
    color: theme.colors.secondary700,

    '&::after': {
      content: '""',
      display: 'inline-block',
      height: 16,
      width: 3,
      borderRadius: '0 2px 2px 0',
      background: theme.colors.secondary500,
      position: 'absolute',
      left: 0,
      top: 8,
    },
  },
}));

export const SidebarLink = props => <StyledSidebarLink activeClassName="active" {...props} />;

export const CloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: 12,
  right: 12,
  zIndex: 2,

  [theme.media.md]: {
    display: 'none',
  },
}));

export const SectionHeader = styled(Text).attrs({ as: 'p', variant: 'smallCaps' })({
  margin: '16px 0 4px 12px',
});
