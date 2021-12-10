/* eslint-disable no-alert */
import React, { useState } from 'react';
import {
  Select,
  IllustratedIcon,
  Checkbox,
  IllustratedIconType,
  SelectOption,
  Text,
  Input,
} from '../../lib';
import Demo, { Booleans, Inputs } from '../../components/Demo/Demo';
import { useIconOpts } from './IllustratedIcon.hooks';
import { GITHUB_URL } from './IllustratedIcon.constants';

const IllustratedIconDemo = () => {
  const iconOpts = useIconOpts();
  const [onClick, setOnClick] = useState(false);
  const [icon, setIcon] = useState(iconOpts[0]);
  const [primaryColor, setPrimaryColor] = useState('$neutral300');
  const [secondaryColor, setSecondaryColor] = useState('$neutral600');
  const [primaryColorHover, setPrimaryColorHover] = useState('$neutral400');
  const [secondaryColorHover, setSecondaryColorHover] = useState('$neutral700');

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
          <Input
            label="primaryColor"
            type="text"
            value={primaryColor}
            onChange={ev => setPrimaryColor(ev.target.value)}
          />
        </div>

        <div>
          <Input
            label="secondaryColor"
            type="text"
            value={secondaryColor}
            onChange={ev => setSecondaryColor(ev.target.value)}
          />
        </div>

        <div>
          <Input
            label="primaryColorHover"
            type="text"
            value={primaryColorHover}
            onChange={ev => setPrimaryColorHover(ev.target.value)}
          />
        </div>

        <div>
          <Input
            label="secondaryColorHover"
            type="text"
            value={secondaryColorHover}
            onChange={ev => setSecondaryColorHover(ev.target.value)}
          />
        </div>
      </Inputs>
    </Demo>
  );
};

export default IllustratedIconDemo;
