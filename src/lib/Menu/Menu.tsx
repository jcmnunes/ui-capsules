import React from 'react';
import {
  MenuList as RMenuList,
  MenuItem as RMenuItem,
  MenuButton as RMenuButton,
} from '@reach/menu-button';
import { darkTheme } from '../darkTheme';
import { styled } from '../stitches.config';

export { Menu, MenuPopover, MenuItems, MenuLink } from '@reach/menu-button';

export const MenuButton = ({ children = null, ...rest }) => {
  return <RMenuButton {...rest}>{children}</RMenuButton>;
};

export const MenuList = styled(RMenuList, {
  boxShadow: '$500',
  border: '1px solid $neutral200',
  borderRadius: '$medium',
  minWidth: 240,
  background: '$bg',

  [`.${darkTheme} &`]: {
    background: '$neutral50',
  },
});

export const MenuItem = styled(RMenuItem, {
  fontFamily: '$inter',
  fontSize: '$md',
  fontWeight: 500,
  color: '$neutral700',
  padding: '6px 12px',
  background: '$bg',

  [`.${darkTheme} &`]: {
    background: '$neutral50',
  },

  '&[data-reach-menu-item][data-selected]': {
    color: '$neutral700',
    background: '$neutral200',
  },
});
