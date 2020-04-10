import React, { useState } from 'react';
import { Spinner, Select } from '../../lib';
import Demo, { StyledSelect } from '../../components/Demo/Demo';
import { GITHUB_URL, SIZE_OPTS, APPEARANCE_OPTS } from './Spinner.constants';

const SpinnerDemo = () => {
  const [size, setSize] = useState(SIZE_OPTS[1]);
  const [appearance, setAppearance] = useState(APPEARANCE_OPTS[1]);

  const Component = <Spinner size={size.value} appearance={appearance.value} />;

  return (
    <Demo codeURL={GITHUB_URL} component={Component} isDark={appearance.value === 'light'}>
      <>
        <StyledSelect>
          <pre>size</pre>
          <Select value={size} options={SIZE_OPTS} onChange={opt => setSize(opt)} />
        </StyledSelect>
        <StyledSelect>
          <pre>appearance</pre>
          <Select
            value={appearance}
            options={APPEARANCE_OPTS}
            onChange={opt => setAppearance(opt)}
          />
        </StyledSelect>
      </>
    </Demo>
  );
};

export default SpinnerDemo;
