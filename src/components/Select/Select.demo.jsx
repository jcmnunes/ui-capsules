import React, { useState } from 'react';
import Select from '../../lib/Select/Select';
import Demo, { StyledSelect } from '../common/Demo';
import { GITHUB_URL, OPTIONS, SIZE_OPTS } from './Select.constants';

const SelectDemo = () => {
  const [size, setSize] = useState(SIZE_OPTS[1]);

  const Component = <Select defaultValue={OPTIONS[0]} options={OPTIONS} size={size.value} />;

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <>
        <StyledSelect>
          <pre>size</pre>
          <Select defaultValue={SIZE_OPTS[1]} options={SIZE_OPTS} onChange={opt => setSize(opt)} />
        </StyledSelect>
      </>
    </Demo>
  );
};

export default SelectDemo;
