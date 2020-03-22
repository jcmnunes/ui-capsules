import React, { useState } from 'react';
import { Select } from '../../lib/Select/Select';
import { Checkbox } from '../../lib/Checkbox/Checkbox';
import { Input } from '../../lib/Input/Input';
import Demo, { Booleans, StyledCheckbox, StyledSelect } from '../../components/Demo/Demo';
import { GITHUB_URL, SIZE_OPTS, APPEARANCE_OPTS } from './Checkbox.constants';

const CheckboxDemo = () => {
  const [checked, setChecked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [size, setSize] = useState(SIZE_OPTS[0]);
  const [children, setChildren] = useState('Hello world');
  const [appearance, setAppearance] = useState(APPEARANCE_OPTS[2]);

  const Component = (
    <Checkbox
      checked={checked}
      isDisabled={isDisabled}
      onChange={() => setChecked(!checked)}
      size={size.value}
      appearance={appearance.value}
    >
      {children}
    </Checkbox>
  );

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <>
        <Booleans>
          <StyledCheckbox
            checked={checked}
            onChange={() => setChecked(!checked)}
            appearance="success"
          >
            <pre>checked</pre>
          </StyledCheckbox>
          <StyledCheckbox
            checked={isDisabled}
            onChange={() => setIsDisabled(!isDisabled)}
            appearance="success"
          >
            <pre>isDisabled</pre>
          </StyledCheckbox>
        </Booleans>
        <StyledSelect>
          <pre>children</pre>
          <Input type="text" value={children} onChange={ev => setChildren(ev.target.value)} />
        </StyledSelect>
        <StyledSelect>
          <pre>size</pre>
          <Select value={size} options={SIZE_OPTS} onChange={opt => setSize(opt)} />
        </StyledSelect>
        <StyledSelect>
          <pre>appearance</pre>
          <Select
            value={appearance}
            options={APPEARANCE_OPTS}
            onChange={opt => setAppearance(opt)}
          />
        </StyledSelect>
      </>
    </Demo>
  );
};

export default CheckboxDemo;
