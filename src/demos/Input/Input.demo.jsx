import React, { useState } from 'react';
import Demo, { Booleans, StyledCheckbox, StyledSelect } from '../../components/Demo/Demo';
import { Select, Input } from '../../lib';
import { SIZE_OPTS, GITHUB_URL } from './Input.constants';
import { useIconOpts } from '../Icon/Icon.hooks';

const InputDemo = () => {
  const iconOpts = [{ value: undefined, label: 'none' }, ...useIconOpts()];

  const [isDisabled, setIsDisabled] = useState(false);
  const [value, setValue] = useState('Hello world');
  const [placeholder, setPlaceholder] = useState('Placeholder');
  const [size, setSize] = useState(SIZE_OPTS[1]);
  const [error, setError] = useState(undefined);
  const [iconBefore, setIconBefore] = useState(iconOpts[0]);
  const [iconAfter, setIconAfter] = useState(iconOpts[0]);

  const Component = (
    <Input
      value={value}
      onChange={ev => setValue(ev.target.value)}
      size={size.value}
      error={error}
      placeholder={placeholder}
      isDisabled={isDisabled}
      iconBefore={iconBefore.value}
      iconAfter={iconAfter.value}
    />
  );

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <>
        <Booleans>
          <StyledCheckbox
            checked={isDisabled}
            onChange={() => setIsDisabled(!isDisabled)}
            appearance="success"
          >
            <pre>isDisabled</pre>
          </StyledCheckbox>
        </Booleans>
        <StyledSelect>
          <pre>value</pre>
          <Input type="text" value={value} onChange={ev => setValue(ev.target.value)} />
        </StyledSelect>
        <StyledSelect>
          <pre>placeholder</pre>
          <Input type="text" value={placeholder} onChange={ev => setPlaceholder(ev.target.value)} />
        </StyledSelect>
        <StyledSelect>
          <pre>size</pre>
          <Select value={size} options={SIZE_OPTS} onChange={opt => setSize(opt)} />
        </StyledSelect>
        <StyledSelect>
          <pre>iconBefore</pre>
          <Select value={iconBefore} options={iconOpts} onChange={opt => setIconBefore(opt)} />
        </StyledSelect>
        <StyledSelect>
          <pre>iconAfter</pre>
          <Select value={iconAfter} options={iconOpts} onChange={opt => setIconAfter(opt)} />
        </StyledSelect>
        <StyledSelect>
          <pre>error</pre>
          <Input
            type="text"
            placeholder="Enter some error text"
            value={error}
            onChange={ev => setError(ev.target.value)}
          />
        </StyledSelect>
      </>
    </Demo>
  );
};

export default InputDemo;
