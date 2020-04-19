import React, { useState } from 'react';
import { EditableInput, Select, Input, Checkbox } from '../../lib';
import Demo, { Booleans, Inputs } from '../../components/Demo/Demo';
import { SIZE_OPTS, GITHUB_URL } from './EditableInput.constants';
import { ElementSize, SelectOption } from '../../lib/types';

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
      <Booleans>
        <Checkbox
          checked={isEditable}
          onChange={() => setIsEditable(!isEditable)}
          appearance="success"
        >
          <pre>isEditable</pre>
        </Checkbox>
        <Checkbox
          checked={hasButtons}
          onChange={() => setHasButtons(!hasButtons)}
          appearance="success"
        >
          <pre>hasButtons</pre>
        </Checkbox>
      </Booleans>
      <Inputs>
        <div>
          <pre>value</pre>
          <Input type="text" value={value} onChange={ev => setValue(ev.target.value)} />
        </div>
        <div>
          <pre>size</pre>
          <Select
            value={size}
            options={SIZE_OPTS}
            onChange={opt => setSize(opt as SelectOption<ElementSize>)}
          />
        </div>
      </Inputs>
    </Demo>
  );
};

export default EditableInputDemo;
