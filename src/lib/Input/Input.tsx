import React from 'react';
import { ElementSize, IconType, IconVariant } from '../types';
import { Icon } from '../Icon/Icon';
import { IconWrapper, InputWrapper, StyledInput, Error, InputIcon } from './Input.styles';

export interface Props extends Omit<React.ComponentPropsWithoutRef<'input'>, 'size'> {
  size?: ElementSize;
  disabled?: boolean;
  error?: string;
  leftIcon?: IconType;
  rightIcon?: IconType;
  iconVariant?: IconVariant;
}

export const Input = React.forwardRef<HTMLInputElement, Props>(
  (
    { size = 'medium', error, disabled = false, leftIcon, rightIcon, iconVariant, ...rest },
    ref,
  ) => (
    <InputWrapper {...rest}>
      {leftIcon && (
        <IconWrapper size={size} position="left">
          <InputIcon
            as={Icon}
            variant={iconVariant}
            icon={leftIcon}
            size={size === 'small' ? 18 : 20}
          />
        </IconWrapper>
      )}

      <StyledInput
        ref={ref}
        inputSize={size}
        error={error}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        disabled={disabled}
        {...rest}
      />

      {rightIcon && (
        <IconWrapper size={size} position="right">
          <InputIcon
            as={Icon}
            variant={iconVariant}
            icon={rightIcon}
            size={size === 'small' ? 18 : 20}
          />
        </IconWrapper>
      )}

      {error && <Error size={size}>{error}</Error>}
    </InputWrapper>
  ),
);

Input.displayName = 'Input';
Input.defaultProps = {
  size: 'medium',
  disabled: false,
  error: '',
  leftIcon: undefined,
  rightIcon: undefined,
  iconVariant: 'solid',
};
