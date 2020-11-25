import React, { useState } from 'react';
import Demo, { Booleans, Inputs } from '../../components/Demo/Demo';
import { Checkbox, IconVariant, Input, Select } from '../../lib';
import { GITHUB_URL } from './Button.constants';
import { useIconOpts } from '../Icon/Icon.hooks';
import { ElementSize, IconType, SelectOption } from '../../lib/types';
import { Button } from '../../lib/Button/Button';
import { ButtonVariant } from '../../lib/Button/Button.styles';
import { ThemeColors } from '../../lib/theme';
import {
  ICON_VARIANT_OPTS,
  SIZE_OPTS,
  VARIANT_COLOR_OPTS,
  VARIANT_OPTS,
} from '../common/selectOptions';

const ButtonDemo = () => {
  const iconOpts = [{ value: '', label: 'none' }, ...useIconOpts()];

  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [buttonChildren, setButtonChildren] = useState('Button Text');
  const [variant, variantSet] = useState(VARIANT_OPTS.find(opt => opt.value === 'solid')!);
  const [variantColor, variantColorSet] = useState(
    VARIANT_COLOR_OPTS.find(opt => opt.value === 'primary')!,
  );
  const [size, setSize] = useState(SIZE_OPTS[1]);
  const [leftIcon, leftIconSet] = useState(iconOpts[0]);
  const [rightIcon, rightIconSet] = useState(iconOpts[0]);
  const [iconVariant, setIconVariant] = useState(ICON_VARIANT_OPTS[0]);

  const Component = (
    <Button
      isLoading={isLoading}
      disabled={isDisabled}
      variant={variant.value}
      variantColor={variantColor.value}
      size={size.value}
      leftIcon={(leftIcon.value as IconType) || undefined}
      rightIcon={(rightIcon.value as IconType) || undefined}
      iconVariant={iconVariant.value}
    >
      {buttonChildren}
    </Button>
  );

  return (
    <Demo codeURL={GITHUB_URL} component={Component}>
      <Booleans>
        <Checkbox
          checked={isLoading}
          onChange={() => setIsLoading(!isLoading)}
          isDisabled={variant.value === 'link'}
        >
          <pre>isLoading</pre>
        </Checkbox>

        <Checkbox
          checked={isDisabled}
          onChange={() => setIsDisabled(!isDisabled)}
          isDisabled={variant.value === 'link'}
        >
          <pre>disabled</pre>
        </Checkbox>
      </Booleans>

      <Inputs>
        <div>
          <pre>children</pre>
          <Input
            type="text"
            value={buttonChildren}
            onChange={ev => setButtonChildren(ev.target.value)}
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
            onChange={opt => setSize(opt as SelectOption<ElementSize>)}
          />
        </div>

        <div>
          <pre>leftIcon</pre>
          <Select
            value={leftIcon}
            options={iconOpts}
            onChange={opt => leftIconSet(opt as SelectOption<IconType>)}
            isDisabled={variant.value === 'link'}
          />
        </div>

        <div>
          <pre>rightIcon</pre>
          <Select
            value={rightIcon}
            options={iconOpts}
            onChange={opt => rightIconSet(opt as SelectOption<IconType>)}
            isDisabled={variant.value === 'link'}
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

export default ButtonDemo;
