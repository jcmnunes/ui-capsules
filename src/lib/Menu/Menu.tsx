import React from 'react';
import { styled } from 'styled-components';
import {
  MenuList as RMenuList,
  MenuItem as RMenuItem,
  MenuButton as RMenuButton,
} from '@reach/menu-button';

export { Menu, MenuPopover, MenuItems, MenuLink } from '@reach/menu-button';

export const MenuButton = ({ children = null, ...rest }) => {
  return <RMenuButton {...rest}>{children}</RMenuButton>;
};

export const MenuList = styled(RMenuList)(({ theme }) => ({
  boxShadow: theme.shadows['500'],
  border: `1px solid ${theme.colors.neutral200}`,
  borderRadius: theme.radii.medium,
  minWidth: 240,
  background: theme.colors.bg,

  '.darkTheme &': {
    background: theme.colors.neutral50,
  },
}));

export const MenuItem = styled(RMenuItem)(({ theme }) => ({
  fontFamily: theme.fonts.inter,
  fontSize: theme.fontSizes.md,
  fontWeight: 500,
  color: theme.colors.neutral700,
  padding: '6px 12px',
  background: theme.colors.bg,

  '.darkTheme &': {
    background: theme.colors.neutral50,
  },

  '&[data-reach-menu-item][data-selected]': {
    color: theme.colors.neutral700,
    background: theme.colors.neutral200,
  },
}));
