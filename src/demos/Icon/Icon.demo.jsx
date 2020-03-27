import React, { useState } from 'react';
import { Select } from '../../lib/Select/Select';
import Demo, { StyledSelect } from '../../components/Demo/Demo';
import { Icon } from '../../lib/Icon/Icon';
import { useIconOpts } from './Icon.hooks';
import { GITHUB_URL } from './Icon.constants';

const IconDemo = () => {
  const iconOpts = useIconOpts();
  const [icon, setIcon] = useState(iconOpts[0]);
  const Component = <Icon icon={icon.value} />;

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <StyledSelect>
        <pre>icon</pre>
        <Select value={icon} options={iconOpts} onChange={opt => setIcon(opt)} />
      </StyledSelect>
    </Demo>
  );
};

export default IconDemo;
