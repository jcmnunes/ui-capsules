/* eslint-disable no-alert */
import React, { useState } from 'react';
import {
  Select,
  IllustratedIcon,
  Checkbox,
  IllustratedIconType,
  SelectOption,
  Text,
} from '../../lib';
import Demo, { Booleans, Inputs } from '../../components/Demo/Demo';
import { useIconOpts } from './IllustratedIcon.hooks';
import { GITHUB_URL } from './IllustratedIcon.constants';
import { colors } from '../../lib/colors';

const IllustratedIconDemo = () => {
  const iconOpts = useIconOpts();
  const [onClick, setOnClick] = useState(false);
  const [icon, setIcon] = useState(iconOpts[0]);
  const [primaryColor, setPrimaryColor] = useState(colors.gray300);
  const [secondaryColor, setSecondaryColor] = useState(colors.gray600);
  const [primaryColorHover, setPrimaryColorHover] = useState(colors.gray300);
  const [secondaryColorHover, setSecondaryColorHover] = useState(colors.gray700);

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
          <Text variant="label">onClick</Text>
        </Checkbox>

        <Text variant="helper">
          When passing an onClick handler, the icon is rendered as a button.
        </Text>
      </Booleans>

      <Inputs>
        <div>
          <Select
            label="icon"
            value={icon}
            options={iconOpts}
            onChange={opt => setIcon(opt as SelectOption<IllustratedIconType>)}
          />
        </div>

        <div>
          <Text variant="label">primaryColor</Text>

          <label htmlFor="primaryColor" style={{ display: 'block' }}>
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
          <Text variant="label">secondaryColor</Text>

          <label htmlFor="secondaryColor" style={{ display: 'block' }}>
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
          <Text variant="label">primaryColorHover</Text>

          <label htmlFor="primaryColorHover" style={{ display: 'block' }}>
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
          <Text variant="label">secondaryColorHover</Text>

          <label htmlFor="secondaryColorHover" style={{ display: 'block' }}>
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
