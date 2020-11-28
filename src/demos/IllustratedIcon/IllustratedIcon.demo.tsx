/* eslint-disable no-alert */
import React, { useState } from 'react';
import { Select, IllustratedIcon, theme, Checkbox } from '../../lib';
import Demo, { Booleans, Inputs } from '../../components/Demo/Demo';
import { useIconOpts } from './IllustratedIcon.hooks';
import { GITHUB_URL } from './IllustratedIcon.constants';
import { IllustratedIconType, SelectOption } from '../../lib/types';

const IllustratedIconDemo = () => {
  const iconOpts = useIconOpts();
  const [onClick, setOnClick] = useState(false);
  const [icon, setIcon] = useState(iconOpts[0]);
  const [primaryColor, setPrimaryColor] = useState(theme.neutral200);
  const [secondaryColor, setSecondaryColor] = useState(theme.neutral600);
  const [primaryColorHover, setPrimaryColorHover] = useState(theme.neutral300);
  const [secondaryColorHover, setSecondaryColorHover] = useState(theme.neutral700);

  const Component = (
    <IllustratedIcon
      icon={icon.value}
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
      primaryColorHover={primaryColorHover}
      secondaryColorHover={secondaryColorHover}
      onClick={onClick ? () => alert('You clicked the (icon) button 😎✌️') : undefined}
    />
  );

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <Booleans>
        <Checkbox checked={onClick} onChange={() => setOnClick(!onClick)}>
          <pre>onClick</pre>
        </Checkbox>
      </Booleans>

      <Inputs>
        <div>
          <pre>icon</pre>
          <Select
            value={icon}
            options={iconOpts}
            onChange={opt => setIcon(opt as SelectOption<IllustratedIconType>)}
          />
        </div>

        <div>
          <pre>primaryColor</pre>
          <label htmlFor="primaryColor">
            <input
              id="primaryColor"
              type="color"
              value={primaryColor}
              onChange={ev => setPrimaryColor(ev.target.value)}
            />{' '}
            {primaryColor.toUpperCase()}
          </label>
        </div>

        <div>
          <pre>secondaryColor</pre>
          <label htmlFor="secondaryColor">
            <input
              id="secondaryColor"
              type="color"
              value={secondaryColor}
              onChange={ev => setSecondaryColor(ev.target.value)}
            />{' '}
            {secondaryColor.toUpperCase()}
          </label>
        </div>

        <div>
          <pre>primaryColorHover</pre>
          <label htmlFor="primaryColorHover">
            <input
              id="primaryColorHover"
              type="color"
              value={primaryColorHover}
              onChange={ev => setPrimaryColorHover(ev.target.value)}
            />{' '}
            {primaryColorHover.toUpperCase()}
          </label>
        </div>

        <div>
          <pre>secondaryColorHover</pre>
          <label htmlFor="secondaryColorHover">
            <input
              id="secondaryColorHover"
              type="color"
              value={secondaryColorHover}
              onChange={ev => setSecondaryColorHover(ev.target.value)}
            />{' '}
            {secondaryColorHover.toUpperCase()}
          </label>
        </div>
      </Inputs>
    </Demo>
  );
};

export default IllustratedIconDemo;
