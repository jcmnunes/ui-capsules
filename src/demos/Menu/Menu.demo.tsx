/* eslint-disable no-alert, no-console */
import React, { useState } from 'react';
import { Button, Menu, MenuItem, Icon, Select, Switch, SelectOption } from '../../lib';
import Demo, { Inputs } from '../../components/Demo/Demo';
import { GITHUB_URL, PLACEMENT_OPTS } from './Menu.constants';

const MenuDemo = () => {
  const [placement, setPlacement] = useState(PLACEMENT_OPTS[0]);

  const Trigger = (
    <Button variant="ghost" variantColor="neutral" rightIcon="chev_down">
      Open Menu
    </Button>
  );

  const Component = (
    <Menu trigger={Trigger} placement={placement.value}>
      <MenuItem
        text="Hello World"
        onClick={() => console.log('Hello there 1')}
        leftAddon={<Icon icon="search" size="18px" />}
      />

      <MenuItem
        text="Hello World 2"
        helperText="Helper text"
        leftAddon={<Icon icon="annotation" size="18px" color="red.500" />}
        rightAddon={<Switch checked onChange={() => {}} size="small" />}
        onClick={() => console.log('Hello there 2')}
        closeOnAction={false}
      />

      <MenuItem text="Hello World 3" onClick={() => console.log('Hello there 3')} isLoading />
    </Menu>
  );

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <Inputs>
        <div>
          <pre>placement</pre>
          <Select
            value={placement}
            options={PLACEMENT_OPTS}
            onChange={opt => setPlacement(opt as SelectOption<'left' | 'right'>)}
          />
        </div>
      </Inputs>
    </Demo>
  );
};

export default MenuDemo;
