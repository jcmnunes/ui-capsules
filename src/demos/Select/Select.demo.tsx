import React, { useState } from 'react';
import { DualSize, Input, Select, SelectOption } from '../../lib';
import Demo, { Inputs } from '../../components/Demo/Demo';
import { GITHUB_URL, OPTIONS, SIZE_OPTS } from './Select.constants';

const SelectDemo = () => {
  const [size, setSize] = useState(SIZE_OPTS[0]);
  const [option, setOption] = useState<SelectOption<string>>();
  const [label, setLabel] = useState('Label');

  const Component = (
    <Select
      label={label}
      value={option}
      options={OPTIONS}
      onChange={opt => setOption(opt as SelectOption<string>)}
      size={size.value}
      isClearable
    />
  );

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <Inputs>
        <div>
          <Input
            label="label"
            value={label}
            type="text"
            onChange={ev => setLabel(ev.target.value)}
          />
        </div>

        <div>
          <Select
            label="size"
            value={size}
            options={SIZE_OPTS}
            onChange={opt => setSize(opt as SelectOption<DualSize>)}
          />
        </div>
      </Inputs>
    </Demo>
  );
};

export default SelectDemo;
