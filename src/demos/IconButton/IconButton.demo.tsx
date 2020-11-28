/* eslint-disable no-alert */
import React, { useState } from 'react';
import Demo, { Booleans, Inputs } from '../../components/Demo/Demo';
import { Checkbox, IconButton, IconType, IconVariant, Select } from '../../lib';
import { GITHUB_URL } from './IconButton.constants';
import { SelectOption } from '../../lib/types';
import { ButtonSize, ButtonVariant } from '../../lib/Button/Button.styles';
import { ThemeColors } from '../../lib/theme';
import { useIconOpts } from '../Icon/Icon.hooks';
import {
  ICON_VARIANT_OPTS,
  SIZE_OPTS,
  VARIANT_COLOR_OPTS,
  VARIANT_OPTS,
} from '../common/selectOptions';

const IconButtonDemo = () => {
  const iconOpts = useIconOpts();
  const [icon, setIcon] = useState(iconOpts[0]);
  const [variant, variantSet] = useState(VARIANT_OPTS[0]);
  const [variantColor, variantColorSet] = useState(VARIANT_COLOR_OPTS[0]);
  const [size, setSize] = useState(SIZE_OPTS[1]);
  const [isLoading, setIsLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [iconVariant, setIconVariant] = useState(ICON_VARIANT_OPTS[0]);

  const Component = (
    <IconButton
      icon={icon.value}
      variant={variant.value}
      variantColor={variantColor.value}
      size={size.value}
      isLoading={isLoading}
      iconVariant={iconVariant.value}
      disabled={disabled}
    />
  );

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <Booleans>
        <Checkbox checked={isLoading} onChange={() => setIsLoading(!isLoading)}>
          <pre>isLoading</pre>
        </Checkbox>

        <Checkbox checked={disabled} onChange={() => setDisabled(!disabled)}>
          <pre>isDisabled</pre>
        </Checkbox>
      </Booleans>

      <Inputs>
        <div>
          <pre>icon</pre>
          <Select
            value={icon}
            options={iconOpts}
            onChange={opt => setIcon(opt as SelectOption<IconType>)}
          />
        </div>

        <div>
          <pre>variant</pre>
          <Select
            value={variant}
            options={VARIANT_OPTS}
            onChange={opt => variantSet(opt as SelectOption<ButtonVariant>)}
          />
        </div>

        <div>
          <pre>variantColor</pre>
          <Select
            value={variantColor}
            options={VARIANT_COLOR_OPTS}
            onChange={opt => variantColorSet(opt as SelectOption<ThemeColors>)}
          />
        </div>

        <div>
          <pre>size</pre>
          <Select
            value={size}
            options={SIZE_OPTS}
            onChange={opt => setSize(opt as SelectOption<ButtonSize>)}
          />
        </div>

        <div>
          <pre>iconVariant</pre>
          <Select
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
