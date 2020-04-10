import React, { useState } from 'react';
import { EditableInput, Select, Input } from '../../lib';
import Demo, { Booleans, StyledCheckbox, StyledSelect } from '../../components/Demo/Demo';
import { SIZE_OPTS, GITHUB_URL } from './EditableInput.constants';

const EditableInputDemo = () => {
  const [isEditable, setIsEditable] = useState(true);
  const [hasButtons, setHasButtons] = useState(false);
  const [value, setValue] = useState('Hello world');
  const [size, setSize] = useState(SIZE_OPTS[1]);

  const Component = (
    <EditableInput
      value={value}
      size={size.value}
      isEditable={isEditable}
      hasButtons={hasButtons}
      action={newValue => setValue(newValue)}
    />
  );

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <>
        <Booleans>
          <StyledCheckbox
            checked={isEditable}
            onChange={() => setIsEditable(!isEditable)}
            appearance="success"
          >
            <pre>isEditable</pre>
          </StyledCheckbox>
          <StyledCheckbox
            checked={hasButtons}
            onChange={() => setHasButtons(!hasButtons)}
            appearance="success"
          >
            <pre>hasButtons</pre>
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
