import React, { useState } from 'react';
import { Checkbox, Input, Radio, Select } from '../../lib';
import Demo, { Booleans, Inputs } from '../../components/Demo/Demo';
import { GITHUB_URL } from './Radio.constants';
import { ElementSize, SelectOption } from '../../lib/types';
import { SIZE_OPTS, VARIANT_COLOR_OPTS } from '../common/selectOptions';
import { ThemeColors } from '../../lib/theme';

const RadioDemo = () => {
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [size, setSize] = useState(SIZE_OPTS[0]);
  const [children, setChildren] = useState('Hello world');
  const [variantColor, variantColorSet] = useState(
    VARIANT_COLOR_OPTS.find(opt => opt.value === 'primary')!,
  );

  const Component = (
    <Radio
      checked={checked}
      disabled={disabled}
      onChange={() => setChecked(!checked)}
      size={size.value}
      variantColor={variantColor.value}
    >
      {children}
    </Radio>
  );

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <Booleans>
        <Checkbox checked={checked} onChange={() => setChecked(!checked)}>
          <pre>checked</pre>
        </Checkbox>

        <Checkbox checked={disabled} onChange={() => setDisabled(!disabled)}>
          <pre>disabled</pre>
        </Checkbox>
      </Booleans>

      <Inputs>
        <div>
          <pre>children</pre>
          <Input type="text" value={children} onChange={ev => setChildren(ev.target.value)} />
        </div>

        <div>
          <pre>size</pre>
          <Select
            value={size}
            options={SIZE_OPTS}
            onChange={opt => setSize(opt as SelectOption<ElementSize>)}
          />
        </div>

        <div>
          <pre>variantColor</pre>
          <Select
            value={variantColor}
            options={VARIANT_COLOR_OPTS}
            onChange={opt => variantColorSet(opt as SelectOption<ThemeColors>)}
          />
        </div>
      </Inputs>
    </Demo>
  );
};

export default RadioDemo;
