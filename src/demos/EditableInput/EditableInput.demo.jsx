import React, { useState } from 'react';
import EditableInput from '../../lib/EditableInput/EditableInput';
import Demo, { Booleans, StyledCheckbox, StyledSelect } from '../../components/Demo/Demo';
import Select from '../../lib/Select/Select';
import { SIZE_OPTS, GITHUB_URL } from './EditableInput.constants';
import Input from '../../lib/Input/Input';

const EditableInputDemo = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [value, setValue] = useState('Hello world');
  const [size, setSize] = useState(SIZE_OPTS[1]);

  const Component = (
    <EditableInput
      value={value}
      size={size.value}
      isDisabled={isDisabled}
      action={newValue => alert(`New value ➜ ${newValue}`)} // eslint-disable-line no-alert
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
          <pre>size</pre>
          <Select value={size} options={SIZE_OPTS} onChange={opt => setSize(opt)} />
        </StyledSelect>
      </>
    </Demo>
  );
};

export default EditableInputDemo;
