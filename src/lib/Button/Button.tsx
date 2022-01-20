import React from 'react';
import { Spinner } from '../Spinner/Spinner';
import { ButtonSize, ButtonVariant, StyledButton } from './Button.styles';
import { CSSProp, IconType, IconVariant } from '../types';
import { solidIcons } from '../Icon/Icon.constants';
import { Icon } from '../Icon/Icon';

const anchorProps = {
  target: '_blank',
  rel: 'noreferrer noopener',
};

export interface Props extends React.ComponentPropsWithRef<'button'>, CSSProp {
  variant?: ButtonVariant;
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
      variant = 'primary',
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
        size={size}
        disabled={disabled || isLoading}
        as={as}
        ref={ref}
        type={type}
        hasLeftIcon={!!leftIcon}
        hasRightIcon={!!rightIcon}
        {...(as === 'a' ? anchorProps : {})}
        {...rest}
      >
        {isLoading && (
          <Spinner
            variant="dark"
            css={{ position: 'absolute' }}
            dotColor={variant === 'primary' || variant === 'error' ? '#fff' : undefined}
          />
        )}

        {leftIcon && (
          <Icon
            variant={iconVariant}
            icon={leftIcon as IconType}
            size={size === 'small' ? 18 : 20}
            css={{
              opacity: isLoading ? 0 : 1,
              height: size === 'small' ? 18 : 20,
              mr: children ? '$1' : 0,
              display: 'flex',
            }}
          />
        )}

        <span style={{ opacity: isLoading ? 0 : 1 }}>{children}</span>

        {rightIcon && (
          <Icon
            variant={iconVariant}
            icon={rightIcon as IconType}
            size={size === 'small' ? 18 : 20}
            css={{
              opacity: isLoading ? 0 : 1,
              height: size === 'small' ? 18 : 20,
              ml: '$1',
              display: 'flex',
            }}
          />
        )}
      </StyledButton>
    );
  },
);

Button.displayName = 'Button';

Button.defaultProps = {
  variant: 'primary',
  isLoading: false,
  disabled: false,
  leftIcon: undefined,
  rightIcon: undefined,
  iconVariant: 'solid',
  size: 'medium',
};
