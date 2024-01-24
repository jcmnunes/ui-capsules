/* eslint-disable no-alert, no-console */
import React from 'react';
import { styled } from 'styled-components';
import { Anchor, Flex, Icon, IconButton, Menu, MenuItem, Text } from '../../lib';
import Demo from '../../components/Demo/Demo';
import { MenuButton, MenuList } from '../../lib';
import { GITHUB_URL } from './Menu.constants';

const Trigger = styled(IconButton)(({ theme }) => ({
  '&[data-reach-menu-button][aria-expanded="true"]': {
    background: theme.colors.neutral200,
  },
}));

const code = `const Trigger = styled(IconButton)(({ theme }) => ({
  '&[data-reach-menu-button][aria-expanded="true"]': {
    background: theme.colors.neutral200,
  },
}));

<Menu>
  <MenuButton as={Trigger} variant="ghostGray" icon="dots_h" />
  <MenuList>
    <MenuItem onSelect={() => {}}>Menu item #1</MenuItem>
    <MenuItem onSelect={() => {}}>Menu item #2</MenuItem>
    <MenuItem onSelect={() => {}}>Menu item #3</MenuItem>
    <MenuItem onSelect={() => {}}>
      <Flex align="center">
        <Icon icon="beaker" css={{ marginRight: 4 }} />
        Beaker
      </Flex>
    </MenuItem>
  </MenuList>
</Menu>
`;

const MenuDemo = () => {
  const Component = (
    <Menu>
      <MenuButton as={Trigger} variant="ghostGray" icon="dots_h" />
      <MenuList>
        <MenuItem onSelect={() => {}}>Menu item #1</MenuItem>
        <MenuItem onSelect={() => {}}>Menu item #2</MenuItem>
        <MenuItem onSelect={() => {}}>Menu item #3</MenuItem>
        <MenuItem onSelect={() => {}}>
          <Flex align="center">
            <Icon icon="beaker" css={{ marginRight: 4 }} />
            Beaker
          </Flex>
        </MenuItem>
      </MenuList>
    </Menu>
  );

  return (
    <Demo codeURL={GITHUB_URL} component={Component} code={code}>
      <Flex direction="column">
        <Text>No knobs available</Text>

        <Text variant="helper">
          Please, follow the{' '}
          <Anchor href="https://reach.tech/menu-button" css={{ fontSize: '12px' }}>
            Reach UI docs
          </Anchor>{' '}
          to learn how to use this component
        </Text>
      </Flex>
    </Demo>
  );
};

export default MenuDemo;
