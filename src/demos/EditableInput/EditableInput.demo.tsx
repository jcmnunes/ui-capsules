import React, { useState } from 'react';
import { EditableInput, Select, Input, Checkbox, ElementSize, SelectOption, Text } from '../../lib';
import Demo, { Booleans, Inputs } from '../../components/Demo/Demo';
import { SIZE_OPTS, GITHUB_URL } from './EditableInput.constants';

const EditableInputDemo = () => {
  const [isReadonly, setIsReadonly] = useState(false);
  const [hasButtons, setHasButtons] = useState(false);
  const [value, setValue] = useState('Hello world');
  const [size, setSize] = useState(SIZE_OPTS[1]);

  const Component = (
    <EditableInput
      value={value}
      size={size.value}
      isReadonly={isReadonly}
      hasButtons={hasButtons}
      action={newValue => setValue(newValue)}
    />
  );

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <Booleans>
        <Checkbox checked={isReadonly} onChange={() => setIsReadonly(!isReadonly)}>
          <Text variant="label">isReadonly</Text>
        </Checkbox>

        <Checkbox checked={hasButtons} onChange={() => setHasButtons(!hasButtons)}>
          <Text variant="label">hasButtons</Text>
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
          <Select
            label="size"
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
