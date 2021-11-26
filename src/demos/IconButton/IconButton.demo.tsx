/* eslint-disable no-alert */
import React, { useState } from 'react';
import Demo, { Booleans, Inputs } from '../../components/Demo/Demo';
import { Checkbox, IconButton, IconType, IconVariant, Select, SelectOption, Text } from '../../lib';
import { GITHUB_URL } from './IconButton.constants';
import { ButtonSize, ButtonVariant } from '../../lib/Button/Button.styles';
import { useIconOpts } from '../Icon/Icon.hooks';
import { BTN_VARIANT_OPTS, ICON_VARIANT_OPTS, SIZE_OPTS } from '../common/selectOptions';

const IconButtonDemo = () => {
  const iconOpts = useIconOpts();
  const [icon, setIcon] = useState(iconOpts[0]);
  const [variant, variantSet] = useState(BTN_VARIANT_OPTS[0]);
  const [size, setSize] = useState(SIZE_OPTS[1]);
  const [disabled, setDisabled] = useState(false);
  const [iconVariant, setIconVariant] = useState(ICON_VARIANT_OPTS[0]);

  const Component = (
    <IconButton
      icon={icon.value}
      variant={variant.value}
      size={size.value}
      iconVariant={iconVariant.value}
      disabled={disabled}
    />
  );

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <Booleans>
        <Checkbox checked={disabled} onChange={() => setDisabled(!disabled)}>
          <Text variant="label">disabled</Text>
        </Checkbox>
      </Booleans>

      <Inputs>
        <div>
          <Select
            label="icon"
            value={icon}
            options={iconOpts}
            onChange={opt => setIcon(opt as SelectOption<IconType>)}
          />
        </div>

        <div>
          <Select
            label="variant"
            value={variant}
            options={BTN_VARIANT_OPTS}
            onChange={opt => variantSet(opt as SelectOption<ButtonVariant>)}
          />
        </div>

        <div>
          <Select
            label="size"
            value={size}
            options={SIZE_OPTS}
            onChange={opt => setSize(opt as SelectOption<ButtonSize>)}
          />
        </div>

        <div>
          <Select
            label="iconVariant"
            value={iconVariant}
            options={ICON_VARIANT_OPTS}
            onChange={opt => setIconVariant(opt as SelectOption<IconVariant>)}
          />
        </div>
      </Inputs>
    </Demo>
  );
};

export default IconButtonDemo;
