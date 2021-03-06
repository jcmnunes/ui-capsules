import styled from '@emotion/styled';
import { BoxShadowProps, margin, variant } from 'styled-system';
import { IconProps } from '../Icon/Icon';
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

const LINK_COLOR_MAP: Record<string, string[]> = {
  info: ['info.500', 'info.700'],
  success: ['success.600', 'success.800'],
  warning: ['warning.900', 'warning.900'],
  error: ['error.600', 'error.700'],
};

export type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'link';
export type ButtonSize = 'small' | 'medium' | 'large';

export type Pseudo =
  | '&:hover'
  | '&:focus'
  | '&:active'
  | '&:disabled'
  | '&[data-focus-visible-added]:focus';

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

    '&[data-focus-visible-added]:focus': {
      ...theme.shadows.focus,
    },
  }),
  ({ variantColor }) =>
    variant<
      PropsWithPseudo<
        ColorProps & BorderProps & TypographyProps & BoxShadowProps & { outline?: string },
        Pseudo
      >,
      ButtonVariant
    >({
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
          color: LINK_COLOR_MAP[variantColor as string]
            ? LINK_COLOR_MAP[variantColor as string][0]
            : `${variantColor}.500`,
          borderRadius: 'none',
          lineHeight: 'body',

          '&:hover': {
            color: LINK_COLOR_MAP[variantColor as string]
              ? LINK_COLOR_MAP[variantColor as string][1]
              : `${variantColor}.700`,
          },

          '&[data-focus-visible-added]:focus': {
            boxShadow: 'none',
            outline: '2px auto #4098d7',
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
          lineHeight: variantProp === 'link' ? 'body' : '12px',
          px: variantProp === 'link' ? '2' : '4',
        },

        medium: {
          height: variantProp === 'link' ? 'auto' : 32,
          fontSize: 'body',
          lineHeight: variantProp === 'link' ? 'body' : '14px',
          px: variantProp === 'link' ? '2' : '8',
        },

        large: {
          height: variantProp === 'link' ? 'auto' : 40,
          fontSize: 'body',
          lineHeight: variantProp === 'link' ? 'body' : '14px',
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
