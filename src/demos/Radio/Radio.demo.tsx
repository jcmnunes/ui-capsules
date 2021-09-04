import React, { useState } from 'react';
import {
  Checkbox,
  ElementSize,
  Input,
  Radio,
  Select,
  SelectOption,
  Text,
  VariantColor,
} from '../../lib';
import Demo, { Booleans, Inputs } from '../../components/Demo/Demo';
import { GITHUB_URL } from './Radio.constants';
import { SIZE_OPTS, VARIANT_COLOR_OPTS } from '../common/selectOptions';

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
            onChange={opt => setSize(opt as SelectOption<ElementSize>)}
          />
        </div>

        <div>
          <Select
            label="variantColor"
            value={variantColor}
            options={VARIANT_COLOR_OPTS}
            onChange={opt => variantColorSet(opt as SelectOption<VariantColor>)}
          />
        </div>
      </Inputs>
    </Demo>
  );
};

export default RadioDemo;
