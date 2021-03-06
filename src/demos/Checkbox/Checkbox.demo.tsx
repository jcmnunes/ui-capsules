import React, { useState } from 'react';
import { Checkbox, ElementSize, Input, Select, SelectOption, VariantColor } from '../../lib';
import Demo, { Booleans, Inputs } from '../../components/Demo/Demo';
import { GITHUB_URL, SIZE_OPTS } from './Checkbox.constants';
import { VARIANT_COLOR_OPTS } from '../common/selectOptions';

const CheckboxDemo = () => {
  const [checked, setChecked] = useState(false);
  const [disabled, disabledSet] = useState(false);
  const [size, setSize] = useState(SIZE_OPTS[0]);
  const [children, setChildren] = useState('Hello world');
  const [variantColor, variantColorSet] = useState(
    VARIANT_COLOR_OPTS.find(opt => opt.value === 'primary')!,
  );

  const Component = (
    <Checkbox
      checked={checked}
      isDisabled={disabled}
      onChange={() => setChecked(!checked)}
      size={size.value}
      variantColor={variantColor.value}
    >
      {children}
    </Checkbox>
  );

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <Booleans>
        <Checkbox checked={checked} onChange={() => setChecked(!checked)}>
          <pre>checked</pre>
        </Checkbox>

        <Checkbox checked={disabled} onChange={() => disabledSet(!disabled)}>
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
            onChange={opt => variantColorSet(opt as SelectOption<VariantColor>)}
          />
        </div>
      </Inputs>
    </Demo>
  );
};

export default CheckboxDemo;
