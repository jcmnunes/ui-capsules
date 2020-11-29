import React, { useState } from 'react';
import Demo, { Booleans, Inputs } from '../../components/Demo/Demo';
import { Checkbox, IconVariant, Input, Select } from '../../lib';
import { GITHUB_URL } from './Input.constants';
import { useIconOpts } from '../Icon/Icon.hooks';
import { ElementSize, IconType, SelectOption } from '../../lib/types';
import { ICON_VARIANT_OPTS, SIZE_OPTS } from '../common/selectOptions';

const InputDemo = () => {
  const iconOpts = [{ value: undefined, label: 'none' }, ...useIconOpts()];

  const [disabled, setDisabled] = useState(false);
  const [value, setValue] = useState('Hello world');
  const [placeholder, setPlaceholder] = useState('Placeholder');
  const [size, setSize] = useState(SIZE_OPTS[1]);
  const [error, setError] = useState('');
  const [leftIcon, setLeftIcon] = useState(iconOpts[0]);
  const [rightIcon, setRightIcon] = useState(iconOpts[0]);
  const [iconVariant, setIconVariant] = useState(ICON_VARIANT_OPTS[0]);

  const Component = (
    <Input
      value={value}
      onChange={ev => setValue(ev.target.value)}
      size={size.value}
      error={error}
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
          <pre>disabled</pre>
        </Checkbox>
      </Booleans>

      <Inputs>
        <div>
          <pre>value</pre>
          <Input type="text" value={value} onChange={ev => setValue(ev.target.value)} />
        </div>

        <div>
          <pre>placeholder</pre>
          <Input type="text" value={placeholder} onChange={ev => setPlaceholder(ev.target.value)} />
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
          <pre>leftIcon</pre>
          <Select
            value={leftIcon}
            options={iconOpts}
            onChange={opt => setLeftIcon(opt as SelectOption<IconType>)}
          />
        </div>

        <div>
          <pre>rightIcon</pre>
          <Select
            value={rightIcon}
            options={iconOpts}
            onChange={opt => setRightIcon(opt as SelectOption<IconType>)}
          />
        </div>

        <div>
          <pre>error</pre>
          <Input
            type="text"
            placeholder="Enter some error text"
            value={error}
            onChange={ev => setError(ev.target.value)}
          />
        </div>

        <div>
          <pre>iconVariant</pre>
          <Select
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
