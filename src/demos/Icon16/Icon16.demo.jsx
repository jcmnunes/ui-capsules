import React, { useState } from 'react';
import Select from '../../lib/Select/Select';
import Demo, { StyledSelect } from '../../components/Demo/Demo';
import Icon20 from '../../lib/Icon16/Icon16';
import { useIconOpts } from './Icon16.hooks';
import { GITHUB_URL } from './Icon16.constants';

const Icon16Demo = () => {
  const iconOpts = useIconOpts();
  const [icon, setIcon] = useState(iconOpts[0]);
  const Component = <Icon20 icon={icon.value} />;

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <StyledSelect>
        <pre>icon</pre>
        <Select value={icon} options={iconOpts} onChange={opt => setIcon(opt)} />
      </StyledSelect>
    </Demo>
  );
};

export default Icon16Demo;
