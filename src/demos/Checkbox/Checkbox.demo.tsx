import React, { useState } from 'react';
import { Checkbox, DualSize, Input, Select, SelectOption, Text } from '../../lib';
import Demo, { Booleans, Inputs } from '../../components/Demo/Demo';
import { GITHUB_URL, SIZE_OPTS } from './Checkbox.constants';

const CheckboxDemo = () => {
  const [checked, setChecked] = useState(false);
  const [disabled, disabledSet] = useState(false);
  const [size, setSize] = useState(SIZE_OPTS[0]);
  const [children, setChildren] = useState('Hello world');

  const Component = (
    <Checkbox
      checked={checked}
      disabled={disabled}
      onChange={() => setChecked(!checked)}
      size={size.value}
    >
      {children}
    </Checkbox>
  );

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <Booleans>
        <Checkbox checked={checked} onChange={() => setChecked(!checked)}>
          <Text variant="label">checked</Text>
        </Checkbox>

        <Checkbox checked={disabled} onChange={() => disabledSet(!disabled)}>
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

export default CheckboxDemo;
