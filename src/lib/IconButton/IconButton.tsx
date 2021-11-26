import React, { forwardRef } from 'react';
import { ButtonSize, ButtonVariant } from '../Button/Button.styles';
import { CSSProp, IconVariant } from '../types';
import { solidIcons } from '../Icon/Icon.constants';
import { Button } from '../Button/Button';

export interface IconButtonProps extends React.ComponentPropsWithoutRef<'button'>, CSSProp {
  icon: keyof typeof solidIcons;
  as?: 'button' | 'a';
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  iconVariant?: IconVariant;
  href?: string;
}

const anchorProps = {
  rel: 'noreferrer noopener',
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon,
      as = 'button',
      variant = 'primary',
      size = 'medium',
      iconVariant = 'solid',
      css,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      children,
      ...rest
    },
    ref,
  ) => {
    return (
      <Button
        ref={ref}
        as={as}
        variant={variant}
        size={size}
        leftIcon={icon}
        iconVariant={iconVariant}
        {...(as === 'a' ? anchorProps : {})}
        {...rest}
        isLoading={false}
        disabled={rest.disabled || rest.isLoading}
        css={{
          height: size === 'small' ? 24 : size === 'medium' ? 32 : 40,
          width: size === 'small' ? 24 : size === 'medium' ? 32 : 40,
          p: 0,
          ...css,
        }}
      />
    );
  },
);

IconButton.displayName = 'IconButton';
IconButton.defaultProps = {
  variant: 'primary',
  as: 'button',
  size: 'medium',
  iconVariant: 'solid',
};
