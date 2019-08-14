import React, { useState } from 'react';
import Spinner from '../../lib/Spinner/Spinner';
import Select from '../../lib/Select/Select';
import Demo, { StyledSelect } from '../../components/common/Demo';
import { GITHUB_URL, SIZE_OPTS, APPEARANCE_OPTS } from './Spinner.constants';

const SpinnerDemo = () => {
  const [size, setSize] = useState(SIZE_OPTS[1]);
  const [appearance, setAppearance] = useState(APPEARANCE_OPTS[1]);

  const Component = <Spinner size={size.value} appearance={appearance.value} />;

  return (
    <Demo
      codeURL={GITHUB_URL}
      component={Component}
      isDark={appearance.value !== 'secondary' && appearance.value !== 'dropdown'}
    >
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
