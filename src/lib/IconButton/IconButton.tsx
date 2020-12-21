import React, { forwardRef } from 'react';
import { ButtonSize, ButtonVariant } from '../Button/Button.styles';
import { MarginProps } from '../styledProps';
import { StyledIconButton } from './IconButton.styles';
import { IconVariant, VariantColor } from '../types';
import { solidIcons } from '../Icon/Icon.constants';

export interface IconButtonProps extends React.ComponentPropsWithoutRef<'button'>, MarginProps {
  icon: keyof typeof solidIcons;
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

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon,
      as = 'button',
      variant = 'solid',
      variantColor = 'primary',
      size = 'medium',
      iconVariant = 'solid',
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      children,
      ...rest
    },
    ref,
  ) => {
    return (
      <StyledIconButton
        ref={ref}
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
  },
);

IconButton.displayName = 'IconButton';
IconButton.defaultProps = {
  variant: 'solid',
  as: 'button',
  variantColor: 'primary',
  size: 'medium',
  iconVariant: 'solid',
};
