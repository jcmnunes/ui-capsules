import styled from '@emotion/styled';
import { margin, variant } from 'styled-system';
import { Props as IconProps } from '../Icon/Icon';
import {
  BorderProps,
  ColorProps,
  LayoutProps,
  MarginProps,
  PaddingProps,
  PropsWithPseudo,
  TypographyProps,
} from '../styledProps';
import { VariantColor } from '../types';

const LINK_COLOR_MAP: Record<string, string> = {
  info: 'info.500',
  success: 'success.600',
  warning: 'warning.900',
  error: 'error.600',
};

export type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'link';
export type ButtonSize = 'small' | 'medium' | 'large';

export type Pseudo = '&:hover' | '&:focus' | '&:active' | '&:disabled';

export interface StyledButtonProps extends MarginProps {
  variant: ButtonVariant;
  size: ButtonSize;
  variantColor: VariantColor;
  disabled?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>(
  ({ theme, disabled, variant: variantProp }) => ({
    fontFamily: theme.fontFamily,
    borderRadius: theme.radii.medium,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: disabled ? 0.5 : 1,
    pointerEvents: disabled ? 'none' : 'initial',
    padding: variantProp === 'link' ? '0 2px' : '0 12px',
    position: 'relative',
    fontWeight: 500,
    display: 'inline-flex',
    appearance: 'none',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    outline: 'none',
    borderWidth: '1px',
    borderStyle: 'solid',
    verticalAlign: 'middle',
    width: 'auto',

    '&:focus': {
      ...theme.shadows.focus,
    },
  }),
  ({ variantColor }) =>
    variant<PropsWithPseudo<ColorProps & BorderProps & TypographyProps, Pseudo>, ButtonVariant>({
      variants: {
        solid: {
          bg: `${variantColor}.500`,
          borderColor: `${variantColor}.500`,
          color: 'bg',

          '&:focus': {
            bg: `${variantColor}.500`,
            borderColor: `${variantColor}.500`,
          },

          '&:hover': {
            bg: `${variantColor}.600`,
            borderColor: `${variantColor}.600`,
          },

          '&:active': {
            bg: `${variantColor}.700`,
            borderColor: `${variantColor}.700`,
          },
        },

        outline: {
          bg: 'transparent',
          borderColor: `${variantColor}.500`,
          color: `${variantColor}.500`,

          '&:focus': {
            bg: 'transparent',
          },

          '&:hover': {
            bg: `${variantColor}.50`,
          },

          '&:active': {
            bg: `${variantColor}.100`,
          },

          '&:disabled': {
            bg: `${variantColor}.50`,
            borderColor: `${variantColor}.300`,
          },
        },

        ghost: {
          bg: 'transparent',
          border: 'none',
          color: `${variantColor}.500`,

          '&:focus': {
            bg: 'transparent',
          },

          '&:hover': {
            bg: variantColor === 'neutral' ? `${variantColor}.100` : `${variantColor}.50`,
          },

          '&:active': {
            bg: variantColor === 'neutral' ? `${variantColor}.200` : `${variantColor}.100`,
          },

          '&:disabled': {
            bg: `${variantColor}.50`,
          },
        },

        link: {
          bg: 'transparent',
          border: 'none',
          color: LINK_COLOR_MAP[variantColor as string] || `${variantColor}.500`,
          borderRadius: 'none',

          '&:hover': {
            textDecorationLine: 'underline',
          },
        },
      },
    }),

  ({ variant: variantProp }) =>
    variant<LayoutProps & TypographyProps & PaddingProps, ButtonSize>({
      prop: 'size',
      variants: {
        small: {
          height: variantProp === 'link' ? 'auto' : 24,
          fontSize: 'small',
          px: variantProp === 'link' ? '2' : '4',
        },

        medium: {
          height: variantProp === 'link' ? 'auto' : 32,
          fontSize: 'body',
          px: variantProp === 'link' ? '2' : '8',
        },

        large: {
          height: variantProp === 'link' ? 'auto' : 40,
          fontSize: 'body',
          px: variantProp === 'link' ? '2' : '12',
        },
      },
    }),
  margin,
);

interface ButtonTextProps {
  isLoading?: boolean;
}

export const ButtonText = styled.span<ButtonTextProps>(({ isLoading }) => ({
  opacity: isLoading ? 0 : 1,
}));

interface ButtonIconProps extends IconProps {
  isLeft?: boolean;
  isRight?: boolean;
  isLoading?: boolean;
  buttonSize: ButtonSize;
}

export const ButtonIcon = styled.div<ButtonIconProps>(
  ({ isLoading }) => ({
    margin: 0,
    opacity: isLoading ? 0 : 1,
  }),

  ({ isLeft, isRight }) =>
    variant<MarginProps, ButtonSize>({
      prop: 'buttonSize',
      variants: {
        small: {
          mr: isLeft ? '2' : '0',
          ml: isRight ? '2' : '0',
        },
        medium: {
          mr: isLeft ? '4' : '0',
          ml: isRight ? '4' : '0',
        },
        large: {
          mr: isLeft ? '8' : '0',
          ml: isRight ? '8' : '0',
        },
      },
    }),
);
