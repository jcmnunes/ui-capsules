import React from 'react';
import { Spinner } from '../Spinner/Spinner';
import { MarginProps } from '../styledProps';
import { ButtonIcon, ButtonSize, ButtonText, ButtonVariant, StyledButton } from './Button.styles';
import { IconType, IconVariant, VariantColor } from '../types';
import { solidIcons } from '../Icon/Icon.constants';
import { Icon } from '../Icon/Icon';

const anchorProps = {
  target: '_blank',
  rel: 'noreferrer noopener',
};

export interface Props extends React.ComponentPropsWithRef<'button'>, MarginProps {
  variant?: ButtonVariant;
  variantColor?: VariantColor;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: keyof typeof solidIcons | string;
  rightIcon?: keyof typeof solidIcons | string;
  iconVariant?: IconVariant;
  as?: 'button' | 'a';
  href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      variant = 'solid',
      variantColor = 'primary',
      size = 'medium',
      as = 'button',
      type = 'button',
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
        type={type}
        {...(as === 'a' ? anchorProps : {})}
        {...rest}
      >
        {isLoading && <Spinner size={size} position="absolute" variantColor={variantColor} />}

        {leftIcon && (
          <ButtonIcon
            as={Icon}
            variant={iconVariant}
            icon={leftIcon as IconType}
            size={size === 'small' ? 18 : 20}
            isLeft={!!children}
            isLoading={isLoading}
            buttonSize={size}
          />
        )}

        <ButtonText isLoading={isLoading}>{children}</ButtonText>

        {rightIcon && (
          <ButtonIcon
            as={Icon}
            variant={iconVariant}
            icon={rightIcon as IconType}
            size={size === 'small' ? 18 : 20}
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
