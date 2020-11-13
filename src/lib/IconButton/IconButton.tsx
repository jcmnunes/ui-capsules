import React from 'react';
import { ButtonSize, ButtonVariant } from '../Button/Button.styles';
import { MarginProps } from '../styledProps';
import { ThemeColors } from '../theme';
import { StyledIconButton } from './IconButton.styles';

interface Props extends React.ComponentPropsWithoutRef<'button'>, MarginProps {
  icon: string;
  variant?: ButtonVariant;
  variantColor?: ThemeColors;
  size?: ButtonSize;
  isLoading?: boolean;
}

/**
 * IconButton composes the Button component. It renders only an icon.
 */
export const IconButton: React.FC<Props> = ({
  icon,
  variant = 'solid',
  variantColor = 'primary',
  size = 'medium',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  children,
  ...rest
}) => {
  return (
    <StyledIconButton
      variant={variant}
      variantColor={variantColor}
      size={size}
      leftIcon={icon}
      {...rest}
    />
  );
};
