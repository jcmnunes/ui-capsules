import React, { FC } from 'react';
import { ElementSize } from '../types';
import { CustomCheckbox, Label, StyledInput } from './Checkbox.styles';
import { ThemeColors } from '../theme';
import { Wrapper, WrapperProps } from '../Wrapper/Wrapper';

interface Props extends WrapperProps {
  checked: boolean;
  isDisabled?: boolean;
  variantColor?: ThemeColors;
  size?: ElementSize;
}

export const Checkbox: FC<Props> = ({
  checked,
  variantColor = 'primary',
  size = 'small',
  isDisabled = false,
  children,
  onChange,
  ...rest
}) => (
  <Wrapper {...rest}>
    <Label size={size} onClick={e => e.stopPropagation()} disabled={isDisabled}>
      {children && <span>{children}</span>}

      <StyledInput
        type="checkbox"
        checked={checked}
        onChange={onChange}
        variantColor={variantColor}
        disabled={isDisabled}
      />

      <CustomCheckbox size={size} disabled={isDisabled} />
    </Label>
  </Wrapper>
);

Checkbox.displayName = 'Checkbox';
Checkbox.defaultProps = {
  variantColor: 'primary',
  size: 'small',
  isDisabled: false,
};
