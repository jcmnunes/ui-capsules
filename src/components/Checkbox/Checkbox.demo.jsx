import React, { useState } from 'react';
import Select from '../../lib/Select/Select';
import Checkbox from '../../lib/Checkbox/Checkbox';
import Input from '../../lib/Input/Input';
import Demo, { Booleans, StyledCheckbox, StyledSelect } from '../common/Demo';
import { GITHUB_URL, SIZE_OPTS, APPEARANCE_OPTS } from './Checkbox.constants';

const CheckboxDemo = () => {
  const [checked, setChecked] = useState(false);
  const [size, setSize] = useState(SIZE_OPTS[0]);
  const [children, setChildren] = useState('Hello world');
  const [appearance, setAppearance] = useState(APPEARANCE_OPTS[2]);

  const Component = (
    <Checkbox checked={checked} size={size.value} appearance={appearance.value}>
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
        </Booleans>
        <StyledSelect>
          <pre>children</pre>
          <Input
            isBlock
            type="text"
            value={children}
            onChange={ev => setChildren(ev.target.value)}
          />
        </StyledSelect>
        <StyledSelect>
          <pre>size</pre>
          <Select defaultValue={SIZE_OPTS[0]} options={SIZE_OPTS} onChange={opt => setSize(opt)} />
        </StyledSelect>
        <StyledSelect>
          <pre>appearance</pre>
          <Select
            defaultValue={APPEARANCE_OPTS[2]}
            options={APPEARANCE_OPTS}
            onChange={opt => setAppearance(opt)}
          />
        </StyledSelect>
      </>
    </Demo>
  );
};

export default CheckboxDemo;
