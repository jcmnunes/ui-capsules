import React, { useState } from 'react';
import Select from '../../lib/Select/Select';
import Demo, { StyledSelect } from '../../components/Demo/Demo';
import { GITHUB_URL, OPTIONS, SIZE_OPTS } from './Select.constants';

const SelectDemo = () => {
  const [size, setSize] = useState(SIZE_OPTS[0]);
  const [option, setOption] = useState(OPTIONS[0]);

  const Component = (
    <Select value={option} options={OPTIONS} onChange={opt => setOption(opt)} size={size.value} />
  );

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <>
        <StyledSelect>
          <pre>size</pre>
          <Select value={size} options={SIZE_OPTS} onChange={opt => setSize(opt)} />
        </StyledSelect>
      </>
    </Demo>
  );
};

export default SelectDemo;
