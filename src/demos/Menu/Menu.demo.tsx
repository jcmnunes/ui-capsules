/* eslint-disable no-alert, no-console */
import React from 'react';
import { Anchor, Flex, Icon, IconButton, Menu, MenuItem, Text } from '../../lib';
import Demo from '../../components/Demo/Demo';
import { MenuButton, MenuList } from '../../lib/Menu/Menu';
import { styled } from '../../lib/stitches.config';
import { GITHUB_URL } from './Menu.constants';

const Trigger = styled(IconButton, {
  '&[data-reach-menu-button][aria-expanded="true"]': {
    bg: '$neutral200',
  },
});

const code = `const Trigger = styled(IconButton, {
  '&[data-reach-menu-button][aria-expanded="true"]': {
    bg: '$neutral200',
  },
});

<Menu>
  <MenuButton as={Trigger} variant="ghostGray" icon="dots_h" />
  <MenuList>
    <MenuItem onSelect={() => {}}>Menu item #1</MenuItem>
    <MenuItem onSelect={() => {}}>Menu item #2</MenuItem>
    <MenuItem onSelect={() => {}}>Menu item #3</MenuItem>
    <MenuItem onSelect={() => {}}>
      <Flex align="center">
        <Icon icon="beaker" css={{ mr: '$1' }} />
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
            <Icon icon="beaker" css={{ mr: '$1' }} />
            Beaker
          </Flex>
        </MenuItem>
      </MenuList>
    </Menu>
  );

  return (
    <Demo codeURL={GITHUB_URL} component={Component} code={code}>
      <Flex direction="column">
        <Text size="2">No knobs available</Text>
        <Text variant="helper">
          Please, follow the <Anchor href="https://reach.tech/menu-button">Reach UI docs</Anchor> to
          learn how to use this component
        </Text>
      </Flex>
    </Demo>
  );
};

export default MenuDemo;
