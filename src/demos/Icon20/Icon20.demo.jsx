import React, { useState, useMemo } from 'react';
import Select from '../../lib/Select/Select';
import Demo, { StyledSelect } from '../../components/Demo/Demo';
import Icon20 from '../../lib/Icon20/Icon20';
import { GITHUB_URL } from './Icon20.constants';
import { ICONS } from '../../lib/Icon20/Icon20.constants';

const Icon20Demo = () => {
  const iconOpts = useMemo(
    () => Object.keys(ICONS).map(icon => ({ value: icon, label: icon })),
    [],
  );
  const [icon, setIcon] = useState(iconOpts[0]);
  const Component = <Icon20 icon={icon.value} />;

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <>
        <StyledSelect>
          <pre>icon</pre>
          <Select value={icon} options={iconOpts} onChange={opt => setIcon(opt)} />
        </StyledSelect>
      </>
    </Demo>
  );
};

export default Icon20Demo;
