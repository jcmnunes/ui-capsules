import React, { useState } from 'react';
import { Select } from '../../lib/Select/Select';
import Demo, { StyledSelect } from '../../components/Demo/Demo';
import { Iconis } from '../../lib/Iconis/Iconis';
import { useIconOpts } from './Iconis.hooks';
import { GITHUB_URL } from './Iconis.constants';
import { theme } from '../../lib/theme';

const IconisDemo = () => {
  const iconOpts = useIconOpts();
  const [icon, setIcon] = useState(iconOpts[0]);
  const [primaryColor, setPrimaryColor] = useState(theme.neutral200);
  const [secondaryColor, setSecondaryColor] = useState(theme.neutral600);

  const Component = (
    <Iconis icon={icon.value} primaryColor={primaryColor} secondaryColor={secondaryColor} />
  );

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <StyledSelect>
        <pre>icon</pre>
        <Select value={icon} options={iconOpts} onChange={opt => setIcon(opt)} />
      </StyledSelect>
      <StyledSelect>
        <pre>primaryColor</pre>
        <label htmlFor="background">
          <input
            id="background"
            type="color"
            value={primaryColor}
            onChange={ev => setPrimaryColor(ev.target.value)}
          />{' '}
          {primaryColor.toUpperCase()}
        </label>
      </StyledSelect>
      <StyledSelect>
        <pre>secondaryColor</pre>
        <label htmlFor="background">
          <input
            id="background"
            type="color"
            value={secondaryColor}
            onChange={ev => setSecondaryColor(ev.target.value)}
          />{' '}
          {secondaryColor.toUpperCase()}
        </label>
      </StyledSelect>
    </Demo>
  );
};

export default IconisDemo;
