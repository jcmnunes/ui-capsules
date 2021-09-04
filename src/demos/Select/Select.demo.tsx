import React, { useState } from 'react';
import { Select, DualSize, SelectOption } from '../../lib';
import Demo, { Inputs } from '../../components/Demo/Demo';
import { GITHUB_URL, OPTIONS, SIZE_OPTS } from './Select.constants';

const SelectDemo = () => {
  const [size, setSize] = useState(SIZE_OPTS[0]);
  const [option, setOption] = useState<SelectOption<string>>();

  const Component = (
    <Select
      value={option}
      options={OPTIONS}
      onChange={opt => setOption(opt as SelectOption<string>)}
      size={size.value}
    />
  );

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <Inputs>
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
