import React, { useState } from 'react';
import Demo, { Booleans, Inputs } from '../../components/Demo/Demo';
import { Select, Input, Checkbox } from '../../lib';
import { SIZE_OPTS, GITHUB_URL } from './Input.constants';
import { useIconOpts } from '../Icon/Icon.hooks';
import { ElementSize, IconType, SelectOption } from '../../lib/types';

const InputDemo = () => {
  const iconOpts = [{ value: '', label: 'none' }, ...useIconOpts()];

  const [isDisabled, setIsDisabled] = useState(false);
  const [value, setValue] = useState('Hello world');
  const [placeholder, setPlaceholder] = useState('Placeholder');
  const [size, setSize] = useState(SIZE_OPTS[1]);
  const [error, setError] = useState('');
  const [iconBefore, setIconBefore] = useState(iconOpts[0]);
  const [iconAfter, setIconAfter] = useState(iconOpts[0]);

  const Component = (
    <Input
      value={value}
      onChange={ev => setValue(ev.target.value)}
      inputSize={size.value}
      error={error}
      placeholder={placeholder}
      isDisabled={isDisabled}
      iconBefore={iconBefore.value as IconType}
      iconAfter={iconAfter.value as IconType}
    />
  );

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <Booleans>
        <Checkbox checked={isDisabled} onChange={() => setIsDisabled(!isDisabled)}>
          <pre>isDisabled</pre>
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
          <pre>inputSize</pre>
          <Select
            value={size}
            options={SIZE_OPTS}
            onChange={opt => setSize(opt as SelectOption<ElementSize>)}
          />
        </div>
        <div>
          <pre>iconBefore</pre>
          <Select
            value={iconBefore}
            options={iconOpts}
            onChange={opt => setIconBefore(opt as SelectOption<IconType>)}
          />
        </div>
        <div>
          <pre>iconAfter</pre>
          <Select
            value={iconAfter}
            options={iconOpts}
            onChange={opt => setIconAfter(opt as SelectOption<IconType>)}
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
      </Inputs>
    </Demo>
  );
};

export default InputDemo;
