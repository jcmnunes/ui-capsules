import React, { useState } from 'react';
import { Select, Checkbox, Input } from '../../lib';
import Demo, { Booleans, Inputs } from '../../components/Demo/Demo';
import { GITHUB_URL, SIZE_OPTS, APPEARANCE_OPTS } from './Checkbox.constants';
import { Appearance, SelectOption, ElementSize } from '../../lib/types';

const CheckboxDemo = () => {
  const [checked, setChecked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [size, setSize] = useState(SIZE_OPTS[0]);
  const [children, setChildren] = useState('Hello world');
  const [appearance, setAppearance] = useState(APPEARANCE_OPTS[1]);

  const Component = (
    <Checkbox
      checked={checked}
      isDisabled={isDisabled}
      onChange={() => setChecked(!checked)}
      inputSize={size.value}
      appearance={appearance.value}
    >
      {children}
    </Checkbox>
  );

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <Booleans>
        <Checkbox checked={checked} onChange={() => setChecked(!checked)} appearance="success">
          <pre>checked</pre>
        </Checkbox>
        <Checkbox
          checked={isDisabled}
          onChange={() => setIsDisabled(!isDisabled)}
          appearance="success"
        >
          <pre>isDisabled</pre>
        </Checkbox>
      </Booleans>
      <Inputs>
        <div>
          <pre>children</pre>
          <Input type="text" value={children} onChange={ev => setChildren(ev.target.value)} />
        </div>
        <div>
          <pre>inputSize</pre>
          <Select
            value={size}
            options={SIZE_OPTS}
            onChange={opt => setSize(opt as SelectOption<ElementSize>)}
          />
        </div>
        <div>
          <pre>appearance</pre>
          <Select
            value={appearance}
            options={APPEARANCE_OPTS}
            onChange={opt => setAppearance(opt as SelectOption<Appearance>)}
          />
        </div>
      </Inputs>
    </Demo>
  );
};

export default CheckboxDemo;
