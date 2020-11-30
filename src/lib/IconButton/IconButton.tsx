import React from 'react';
import { ButtonSize, ButtonVariant } from '../Button/Button.styles';
import { MarginProps } from '../styledProps';
import { ThemeColors } from '../theme';
import { StyledIconButton } from './IconButton.styles';
import { IconVariant } from '../types';

export interface Props extends React.ComponentPropsWithoutRef<'button'>, MarginProps {
  icon: string;
  as?: 'button' | 'a';
  variant?: ButtonVariant;
  variantColor?: ThemeColors;
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
