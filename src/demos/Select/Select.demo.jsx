import React, { useState } from 'react';
import Select from '../../lib/Select/Select';
import Demo, { StyledSelect } from '../../components/common/Demo';
import { GITHUB_URL, OPTIONS, SIZE_OPTS } from './Select.constants';

const SelectDemo = () => {
  const [size, setSize] = useState(SIZE_OPTS[0]);

  const Component = <Select defaultValue={OPTIONS[0]} options={OPTIONS} size={size.value} />;

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
