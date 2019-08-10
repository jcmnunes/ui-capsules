/* eslint-disable no-alert */
import React, { useState } from 'react';
import Dropdown, { DropdownItem } from '../../lib/Dropdown/Dropdown';
import Select from '../../lib/Select/Select';
import Button from '../../lib/Button/Button';
import Demo, { StyledSelect } from '../../components/common/Demo';
import { GITHUB_URL, PLACEMENT_OPTS } from './Dropdown.constants';

const DropdownDemo = () => {
  const [placement, setPlacement] = useState(PLACEMENT_OPTS[0]);

  const Trigger = (
    <Button appearance="dropdown" iconAfter="CHEVRON_DOWN">
      Open dropdown
    </Button>
  );

  const Component = (
    <Dropdown trigger={Trigger} placement={placement.value}>
      <DropdownItem iconBefore="CODE" handleAction={() => alert('Clicked on "Show code"')}>
        Show code
      </DropdownItem>
      <DropdownItem iconBefore="BELL" handleAction={() => alert('Clicked on "Notify"')}>
        Notify
      </DropdownItem>
      <DropdownItem iconBefore="GITHUB" handleAction={() => alert('Clicked on "View on Github"')}>
        View on Github
      </DropdownItem>
      <DropdownItem
        iconBefore="CLOSE"
        handleAction={() => alert('Clicked on "Do not close on action"')}
        closeOnAction={false}
      >
        Do not close on action
      </DropdownItem>
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
