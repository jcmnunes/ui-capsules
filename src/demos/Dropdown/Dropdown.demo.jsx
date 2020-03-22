/* eslint-disable no-alert */
import React, { useState } from 'react';
import { Dropdown, DropdownItem } from '../../lib/Dropdown/Dropdown';
import { Select } from '../../lib/Select/Select';
import { Button } from '../../lib/Button/Button';
import Demo, { StyledSelect } from '../../components/Demo/Demo';
import { GITHUB_URL, PLACEMENT_OPTS } from './Dropdown.constants';

const DropdownDemo = () => {
  const [placement, setPlacement] = useState(PLACEMENT_OPTS[0]);

  const Trigger = (
    <Button appearance="minimal" iconAfter="CHEV_DOWN">
      Open dropdown
    </Button>
  );

  const Component = (
    <Dropdown trigger={Trigger} placement={placement.value}>
      <DropdownItem
        text="Copy text"
        icon="COPY"
        handleAction={() => alert('Clicked on "Copy text"')}
      />
      <DropdownItem
        text="Edit profile"
        icon="USER"
        handleAction={() => alert('Clicked on "Edit profile"')}
      />
      <DropdownItem
        text="Settings"
        icon="SETTINGS"
        handleAction={() => alert('Clicked on "Settings"')}
      />
      <DropdownItem
        text="Log out"
        icon="LOGOUT"
        handleAction={() => alert('Clicked on "Log out"')}
      />
      <DropdownItem
        text="Do not close on action"
        icon="TRASH"
        handleAction={() => alert('Clicked on "Do not close on action"')}
        closeOnAction={false}
      />
    </Dropdown>
  );

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <>
        <StyledSelect>
          <pre>placement</pre>
          <Select value={placement} options={PLACEMENT_OPTS} onChange={opt => setPlacement(opt)} />
        </StyledSelect>
      </>
    </Demo>
  );
};

export default DropdownDemo;
