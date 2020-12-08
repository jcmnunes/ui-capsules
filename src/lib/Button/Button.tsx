import React from 'react';
import { Spinner } from '../Spinner/Spinner';
import { MarginProps } from '../styledProps';
import { ButtonIcon, ButtonSize, ButtonText, ButtonVariant, StyledButton } from './Button.styles';
import { ThemeColors } from '../theme';
import { IconType, IconVariant } from '../types';
import { icons } from '../Icon/Icon.constants';
import { IconSolid } from '../IconSolid/IconSolid';
import { Icon } from '../Icon/Icon';

const anchorProps = {
  target: '_blank',
  rel: 'noreferrer noopener',
};

export interface Props extends React.ComponentPropsWithoutRef<'button'>, MarginProps {
  variant?: ButtonVariant;
  variantColor?: ThemeColors;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: keyof typeof icons | string;
  rightIcon?: keyof typeof icons | string;
  iconVariant?: IconVariant;
  children?: string;
  as?: 'button' | 'a';
}

export const Button = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      variant = 'solid',
      variantColor = 'primary',
      size = 'medium',
      as = 'button',
      leftIcon,
      rightIcon,
      iconVariant = 'solid',
      children,
      disabled,
      isLoading,
      ...rest
    },
    ref,
  ) => {
    return (
      <StyledButton
        variant={variant}
        variantColor={variantColor}
        size={size}
        disabled={disabled || isLoading}
        as={as}
        ref={ref}
        {...(as === 'a' ? anchorProps : {})}
        {...rest}
      >
        {isLoading && <Spinner size={size} position="absolute" variantColor={variantColor} />}

        {leftIcon && (
          <ButtonIcon
            as={iconVariant === 'solid' ? IconSolid : Icon}
            icon={leftIcon as IconType}
            size={size === 'small' ? '18px' : '20px'}
            isLeft={!!children}
            isLoading={isLoading}
            buttonSize={size}
          />
        )}

        <ButtonText isLoading={isLoading}>{children}</ButtonText>

        {rightIcon && (
          <ButtonIcon
            as={iconVariant === 'solid' ? IconSolid : Icon}
            icon={rightIcon as IconType}
            size={size === 'small' ? '18px' : '20px'}
            isRight={!!children}
            isLoading={isLoading}
            buttonSize={size}
          />
        )}
      </StyledButton>
    );
  },
);

Button.displayName = 'Button';

Button.defaultProps = {
  variant: 'solid',
  variantColor: 'primary',
  isLoading: false,
  disabled: false,
  leftIcon: undefined,
  rightIcon: undefined,
  iconVariant: 'solid',
  size: 'medium',
};
