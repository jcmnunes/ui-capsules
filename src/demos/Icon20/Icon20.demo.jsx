import React, { useState } from 'react';
import Select from '../../lib/Select/Select';
import Demo, { StyledSelect } from '../../components/Demo/Demo';
import Icon20 from '../../lib/Icon20/Icon20';
import { GITHUB_URL, ICON_OPTS } from './Icon20.constants';

const Icon20Demo = () => {
  const [icon, setIcon] = useState(ICON_OPTS[0]);

  const Component = <Icon20 icon={icon.value} />;

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <>
        <StyledSelect>
          <pre>icon</pre>
          <Select value={icon} options={ICON_OPTS} onChange={opt => setIcon(opt)} />
        </StyledSelect>
      </>
    </Demo>
  );
};

export default Icon20Demo;
