import styled from '@emotion/styled';
import { BoxShadowProps, PositionProps, variant } from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';
import { Wrapper as WrapperBase } from '../Wrapper/Wrapper';
import {
  BorderProps,
  ColorProps,
  LayoutProps,
  PaddingProps,
  PropsWithPseudo,
  TypographyProps,
} from '../styledProps';
import { ElementSize, IconType } from '../types';
import { IconProps } from '../Icon/Icon';

export type InputVariant = 'error' | 'success';

type Pseudo = '&:focus';

// Hide spin box for Input type number
export const Wrapper = styled(WrapperBase)`
  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }

  width: 100%;
`;

export const InputWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
  position: 'relative',
});

interface IconWrapperProps {
  position: 'left' | 'right';
  size: ElementSize;
}

export const IconWrapper = styled.div<IconWrapperProps>(
  ({ theme }) => ({
    position: 'absolute',
    zIndex: 3,
    color: theme.colors.neutral['500'],
    pointerEvents: 'none',
  }),

  ({ position }) =>
    variant<PositionProps & LayoutProps, ElementSize>({
      prop: 'size',
      variants: {
        small: {
          top: 8,
          left: position === 'left' ? 6 : 'auto',
          right: position === 'left' ? 'auto' : 6,
        },
        medium: {
          top: 8,
          left: position === 'left' ? 8 : 'auto',
          right: position === 'left' ? 'auto' : 8,
        },
        large: {
          top: 10,
          left: position === 'left' ? 8 : 'auto',
          right: position === 'left' ? 'auto' : 8,
        },
      },
    }),
);

interface StyledInputProps {
  inputSize: ElementSize;
  variant?: InputVariant;
  leftIcon?: IconType;
  rightIcon?: IconType;
}

export const StyledInput = styled('input', { shouldForwardProp })<StyledInputProps>(
  ({ theme, variant }) => ({
    fontFamily: theme.fontFamily,
    background: theme.colors.bg,
    color: theme.colors.neutral['700'],
    borderRadius: theme.radii.medium,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: variant === 'error' ? theme.colors.error['500'] : theme.colors.neutral['400'],
    width: '100%',

    '&::placeholder': {
      color: theme.colors.neutral['400'],
    },

    '&:hover': {
      borderColor: variant === 'error' ? theme.colors.error['700'] : theme.colors.neutral['500'],
    },

    '&:focus': {
      outline: 'none',
      borderColor: variant === 'error' ? theme.colors.error['400'] : theme.colors.primary['400'],
      boxShadow: `0 0 0 3px ${
        variant === 'error' ? theme.colors.error['200'] : theme.colors.primary['200']
      }`,
    },

    '&:disabled': {
      color: theme.colors.neutral['400'],
      background: theme.colors.neutral['50'],
      borderColor: theme.colors.neutral['300'],
    },
  }),

  ({ theme }) =>
    variant<PropsWithPseudo<ColorProps & BoxShadowProps & BorderProps, Pseudo>, InputVariant>({
      variants: {
        success: {
          borderColor: 'success.600',

          '&:focus': {
            boxShadow: `0 0 0 3px ${theme.colors.success['100']}`,
            borderColor: theme.colors.success['600'],
          },
        },

        error: {
          borderColor: 'error.500',

          '&:focus': {
            boxShadow: `0 0 0 3px ${theme.colors.error['200']}`,
            borderColor: theme.colors.error['500'],
          },
        },
      },
    }),

  ({ leftIcon, rightIcon }) =>
    variant<LayoutProps & TypographyProps & PaddingProps, ElementSize>({
      prop: 'inputSize',
      variants: {
        small: {
          height: 32,
          fontSize: 'small',
          pr: rightIcon ? 26 : 8,
          pl: leftIcon ? 26 : 8,
        },

        medium: {
          height: 36,
          fontSize: 'body',
          pr: rightIcon ? 34 : 8,
          pl: leftIcon ? 34 : 8,
        },

        large: {
          height: 40,
          fontSize: 'body',
          pr: rightIcon ? 38 : 8,
          pl: leftIcon ? 38 : 8,
        },
      },
    }),
);

export const InputIcon = styled.div<IconProps>``;
