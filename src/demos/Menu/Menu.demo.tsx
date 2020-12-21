/* eslint-disable no-alert, no-console */
import React, { useState } from 'react';
import { Button, Icon, Menu, MenuItem, Select, SelectOption, Switch } from '../../lib';
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
      <MenuItem text="Hello World" onClick={() => console.log('Hello there 1')} leftIcon="search" />

      <MenuItem
        text="Hello World 2"
        onClick={() => console.log('Hello there 2')}
        leftIcon="beaker"
        rightIcon="info_c"
      />

      <MenuItem
        text="Hello World 3"
        helperText="Helper text"
        leftAddon={<Icon icon="annotation" size={18} color="red.500" />}
        rightAddon={<Switch checked onChange={() => {}} size="small" />}
        onClick={() => console.log('Hello there 3')}
        closeOnAction={false}
      />

      <MenuItem
        text="Hello World 3"
        onClick={() => console.log('Hello there 4')}
        isLoading
        closeOnAction={false}
      />
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
            onChange={opt => setPlacement(opt as SelectOption<'bottom-start' | 'bottom-end'>)}
          />
        </div>
      </Inputs>
    </Demo>
  );
};

export default MenuDemo;
