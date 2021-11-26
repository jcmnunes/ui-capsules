import React, { useState } from 'react';
import { Checkbox, DualSize, Input, Select, SelectOption, Switch, Text } from '../../lib';
import Demo, { Booleans, Inputs } from '../../components/Demo/Demo';
import { GITHUB_URL, SIZE_OPTS } from './Switch.constants';

const SwitchDemo = () => {
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [size, setSize] = useState(SIZE_OPTS[1]);
  const [children, setChildren] = useState('Hello world');

  const Component = (
    <Switch
      checked={checked}
      disabled={disabled}
      onChange={() => setChecked(!checked)}
      size={size.value}
    >
      {children}
    </Switch>
  );

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <Booleans>
        <Checkbox checked={checked} onChange={() => setChecked(!checked)}>
          <Text variant="label">checked</Text>
        </Checkbox>

        <Checkbox checked={disabled} onChange={() => setDisabled(!disabled)}>
          <Text variant="label">disabled</Text>
        </Checkbox>
      </Booleans>

      <Inputs>
        <div>
          <Input
            label="children"
            type="text"
            value={children}
            onChange={ev => setChildren(ev.target.value)}
          />
        </div>

        <div>
          <Select
            label="size"
            value={size}
            options={SIZE_OPTS}
            onChange={opt => setSize(opt as SelectOption<DualSize>)}
          />
        </div>
      </Inputs>
    </Demo>
  );
};

export default SwitchDemo;
