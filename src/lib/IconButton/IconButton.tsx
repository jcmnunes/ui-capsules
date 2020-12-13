import React from 'react';
import { ButtonSize, ButtonVariant } from '../Button/Button.styles';
import { MarginProps } from '../styledProps';
import { StyledIconButton } from './IconButton.styles';
import { IconVariant, VariantColor } from '../types';
import { icons } from '../Icon/Icon.constants';

export interface Props extends React.ComponentPropsWithoutRef<'button'>, MarginProps {
  icon: keyof typeof icons;
  as?: 'button' | 'a';
  variant?: ButtonVariant;
  variantColor?: VariantColor;
  size?: ButtonSize;
  isLoading?: boolean;
  iconVariant?: IconVariant;
}

const anchorProps = {
  rel: 'noreferrer noopener',
};

export const IconButton: React.FC<Props> = ({
  icon,
  as = 'button',
  variant = 'solid',
  variantColor = 'primary',
  size = 'medium',
  iconVariant = 'solid',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  children,
  ...rest
}) => {
  return (
    <StyledIconButton
      as={as}
      variant={variant}
      variantColor={variantColor}
      size={size}
      leftIcon={icon}
      iconVariant={iconVariant}
      {...(as === 'a' ? anchorProps : {})}
      {...rest}
    />
  );
};

IconButton.displayName = 'IconButton';
IconButton.defaultProps = {
  variant: 'solid',
  as: 'button',
  variantColor: 'primary',
  size: 'medium',
  iconVariant: 'solid',
};
