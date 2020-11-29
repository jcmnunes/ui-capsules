import React, { FC } from 'react';
import { ElementSize, IconType, IconVariant } from '../types';
import { Icon } from '../Icon/Icon';
import { IconWrapper, InputWrapper, StyledInput, Error, InputIcon } from './Input.styles';
import { IconSolid } from '../IconSolid/IconSolid';

export interface Props extends Omit<React.ComponentPropsWithoutRef<'input'>, 'size'> {
  size?: ElementSize;
  disabled?: boolean;
  error?: string;
  leftIcon?: IconType;
  rightIcon?: IconType;
  iconVariant?: IconVariant;
}

export const Input: FC<Props> = ({
  size = 'medium',
  error,
  disabled = false,
  leftIcon,
  rightIcon,
  iconVariant,
  ...rest
}) => (
  <InputWrapper {...rest}>
    {leftIcon && (
      <IconWrapper size={size} position="left">
        <InputIcon
          as={iconVariant === 'solid' ? IconSolid : Icon}
          icon={leftIcon}
          size={size === 'small' ? '18px' : '24px'}
        />
      </IconWrapper>
    )}

    <StyledInput
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
          as={iconVariant === 'solid' ? IconSolid : Icon}
          icon={rightIcon}
          size={size === 'small' ? '18px' : '24px'}
        />
      </IconWrapper>
    )}

    {error && <Error size={size}>{error}</Error>}
  </InputWrapper>
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
