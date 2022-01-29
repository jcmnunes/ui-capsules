import React, { useState } from 'react';
import {
  Checkbox,
  ElementSize,
  IconType,
  IconVariant,
  Input,
  Select,
  SelectOption,
} from '../../lib';
import Demo, { Booleans, Inputs } from '../../components/Demo/Demo';
import { GITHUB_URL, INPUT_VARIANT_OPTS } from './Input.constants';
import { useIconOpts } from '../Icon/Icon.hooks';
import { ICON_VARIANT_OPTS, SIZE_OPTS } from '../common/selectOptions';
import { Text } from '../../lib';
import { InputVariant } from '../../lib/Input/Input.styles';

const InputDemo = () => {
  const iconOpts = [{ value: undefined, label: 'none' }, ...useIconOpts()];

  const [disabled, setDisabled] = useState(false);
  const [value, setValue] = useState('Hello world');
  const [placeholder, setPlaceholder] = useState('Placeholder');
  const [size, setSize] = useState(SIZE_OPTS[1]);
  const [label, setLabel] = useState('Label');
  const [helpText, setHelpText] = useState('');
  const [leftIcon, setLeftIcon] = useState(iconOpts[0]);
  const [rightIcon, setRightIcon] = useState(iconOpts[0]);
  const [variant, setVariant] = useState(INPUT_VARIANT_OPTS[0]);
  const [iconVariant, setIconVariant] = useState(ICON_VARIANT_OPTS[0]);

  const Component = (
    <Input
      label={label}
      value={value}
      onChange={ev => setValue(ev.target.value)}
      size={size.value}
      variant={variant.value}
      helpText={helpText}
      placeholder={placeholder}
      disabled={disabled}
      leftIcon={leftIcon.value as IconType}
      rightIcon={rightIcon.value as IconType}
      iconVariant={iconVariant.value}
    />
  );

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <Booleans>
        <Checkbox checked={disabled} onChange={() => setDisabled(!disabled)}>
          <Text variant="label">disabled</Text>
        </Checkbox>
      </Booleans>

      <Inputs>
        <div>
          <Input
            label="value"
            type="text"
            value={value}
            onChange={ev => setValue(ev.target.value)}
          />
        </div>

        <div>
          <Input
            label="placeholder"
            type="text"
            value={placeholder}
            onChange={ev => setPlaceholder(ev.target.value)}
          />
        </div>

        <div>
          <Select
            label="variant"
            value={variant}
            options={INPUT_VARIANT_OPTS}
            onChange={opt => setVariant(opt as SelectOption<InputVariant>)}
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
            label="leftIcon"
            value={leftIcon}
            options={iconOpts}
            onChange={opt => setLeftIcon(opt as SelectOption<IconType>)}
          />
        </div>

        <div>
          <Select
            label="rightIcon"
            value={rightIcon}
            options={iconOpts}
            onChange={opt => setRightIcon(opt as SelectOption<IconType>)}
          />
        </div>

        <div>
          <Input
            label="label"
            value={label}
            type="text"
            placeholder="Enter the label"
            onChange={ev => setLabel(ev.target.value)}
          />
        </div>

        <div>
          <Input
            label="helpText"
            value={helpText}
            placeholder="Enter some help text"
            onChange={ev => setHelpText(ev.target.value)}
            type="text"
          />
        </div>

        <div>
          <Select
            label="iconVariant"
            value={iconVariant}
            options={ICON_VARIANT_OPTS}
            onChange={opt => setIconVariant(opt as SelectOption<IconVariant>)}
          />
        </div>
      </Inputs>
    </Demo>
  );
};

export default InputDemo;
