import React, { useState } from 'react';
import Demo, { Booleans, StyledCheckbox, StyledSelect } from '../common/Demo';
import Select from '../../lib/Select/Select';
import { SIZE_OPTS, GITHUB_URL } from './Input.constants';
import Input from '../../lib/Input/Input';

const InputDemo = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isBlock, setIsBlock] = useState(false);
  const [value, setValue] = useState('Hello world');
  const [placeholder, setPlaceholder] = useState('Placeholder');
  const [size, setSize] = useState(SIZE_OPTS[1]);

  const Component = (
    <Input
      value={value}
      size={size.value}
      placeholder={placeholder}
      isDisabled={isDisabled}
      isBlock={isBlock}
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
          <StyledCheckbox
            checked={isBlock}
            onChange={() => setIsBlock(!isBlock)}
            appearance="success"
          >
            <pre>isBlock</pre>
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
          <Select defaultValue={SIZE_OPTS[1]} options={SIZE_OPTS} onChange={opt => setSize(opt)} />
        </StyledSelect>
      </>
    </Demo>
  );
};

export default InputDemo;
