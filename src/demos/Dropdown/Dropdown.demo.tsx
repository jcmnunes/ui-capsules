/* eslint-disable no-alert */
import React, { useState } from 'react';
import { Dropdown, DropdownItem, Select, Button } from '../../lib';
import Demo, { Inputs } from '../../components/Demo/Demo';
import { GITHUB_URL, PLACEMENT_OPTS } from './Dropdown.constants';
import { SelectOption } from '../../lib/types';

const DropdownDemo = () => {
  const [placement, setPlacement] = useState(PLACEMENT_OPTS[0]);

  const Trigger = (
    <Button appearance="minimal" iconAfter="chev_down">
      Open dropdown
    </Button>
  );

  const Component = (
    <Dropdown trigger={Trigger} placement={placement.value}>
      <DropdownItem
        text="Copy text"
        icon="copy"
        handleAction={() => alert('Clicked on "Copy text"')}
      />
      <DropdownItem
        text="Edit profile"
        icon="user"
        handleAction={() => alert('Clicked on "Edit profile"')}
      />
      <DropdownItem
        text="Settings"
        icon="settings"
        handleAction={() => alert('Clicked on "Settings"')}
      />
      <DropdownItem
        text="Log out"
        icon="logout"
        handleAction={() => alert('Clicked on "Log out"')}
      />
      <DropdownItem
        text="Do not close on action"
        icon="trash"
        handleAction={() => alert('Clicked on "Do not close on action"')}
        closeOnAction={false}
      />
    </Dropdown>
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

export default DropdownDemo;
