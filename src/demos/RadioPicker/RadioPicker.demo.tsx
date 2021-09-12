import React, { useState } from 'react';
import { Checkbox, Input, RadioPicker, Text } from '../../lib';
import Demo, { Booleans, Inputs } from '../../components/Demo/Demo';
import { GITHUB_URL } from './RadioPicker.constants';

const RadioPickerDemo = () => {
  const [checked, setChecked] = useState(false);
  const [label, setLabel] = useState('Lorem Ipsum');
  const [helpText, setHelpText] = useState('Praesent commodo cursus magna.');

  const Component = (
    <RadioPicker
      checked={checked}
      label={label}
      helpText={helpText}
      onChange={() => setChecked(!checked)}
    />
  );

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <Booleans>
        <Checkbox checked={checked} onChange={() => setChecked(!checked)}>
          <Text variant="label">checked</Text>
        </Checkbox>
      </Booleans>

      <Inputs>
        <div>
          <Input
            label="label"
            type="text"
            value={label}
            onChange={ev => setLabel(ev.target.value)}
          />
        </div>

        <div>
          <Input
            label="helpText"
            type="text"
            value={helpText}
            onChange={ev => setHelpText(ev.target.value)}
          />
        </div>
      </Inputs>
    </Demo>
  );
};

export default RadioPickerDemo;
