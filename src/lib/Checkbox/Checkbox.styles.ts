import styled from '@emotion/styled';
import { ElementSize } from '../types';
import { ThemeColors } from '../theme';
import { PositionProps, variant } from 'styled-system';
import {
  BorderProps,
  ColorProps,
  LayoutProps,
  PaddingProps,
  PropsWithPseudo,
  TypographyProps,
} from '../styledProps';

interface LabelProps {
  size: ElementSize;
  disabled: boolean;
}

export const Label = styled.label<LabelProps>(
  ({ theme, disabled }) => ({
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    userSelect: 'none',
    color: disabled ? theme.colors.neutral['300'] : 'inherit',
    cursor: disabled ? 'not-allowed' : 'pointer',
  }),

  variant<LayoutProps & TypographyProps & PaddingProps & ColorProps, ElementSize>({
    prop: 'size',
    variants: {
      small: {
        height: 16,
        fontSize: 'body',
        pl: 22,
        pt: 1,
        lineHeight: '16px',
      },
      medium: {
        height: 20,
        fontSize: 'h6',
        pl: 28,
        pt: 2,
        lineHeight: '20px',
      },
      large: {
        height: 25,
        fontSize: 'h5',
        pl: 35,
        pt: 2,
        lineHeight: '25px',
      },
    },
  }),
);

interface StyledInputProps {
  variantColor: ThemeColors;
}

interface CustomCheckboxProps {
  size: 'small' | 'medium' | 'large';
  disabled: boolean;
}

type Pseudo = '&:after';

export const CustomCheckbox = styled.span<CustomCheckboxProps>(
  ({ disabled, theme }) => ({
    position: 'absolute',
    borderRadius: theme.radii.medium,
    top: 0,
    left: 0,
    backgroundColor: disabled ? theme.colors.neutral['50'] : theme.colors.bg,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: disabled ? theme.colors.neutral['100'] : theme.colors.neutral['300'],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '&:hover': {
      backgroundColor: theme.colors.neutral['50'],
    },

    '&:after': {
      content: '""',
      position: 'absolute',
      display: 'none',
      border: 'solid white',
      transform: 'rotate(45deg)',
    },
  }),

  variant<PropsWithPseudo<LayoutProps & PositionProps & BorderProps, Pseudo>, ElementSize>({
    prop: 'size',
    variants: {
      small: {
        width: 16,
        height: 16,

        '&:after': {
          left: '5px',
          top: '2px',
          width: 5,
          height: 9,
          borderWidth: '0 2px 2px 0',
        },
      },
      medium: {
        width: 20,
        height: 20,

        '&:after': {
          top: '2px',
          left: '6px',
          width: 7,
          height: 12,
          borderWidth: '0 3px 3px 0',
        },
      },
      large: {
        width: 24,
        height: 24,

        '&:after': {
          top: '3px',
          left: '7px',
          width: 8,
          height: 13,
          borderWidth: '0 3px 3px 0',
        },
      },
    },
  }),
);

export const StyledInput = styled.input<StyledInputProps>`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:focus {
    & ~ .uic-custom-checkbox {
      outline: none;
      box-shadow: ${({ theme }) => `0 0 0 3px ${theme.colors.primary['200']}`};
    }
  }

  &:checked {
    & ~ .uic-custom-checkbox {
      background-color: ${({ theme, variantColor }) =>
        theme.colors[variantColor as keyof typeof theme.colors]['400']};
      border-color: ${({ theme, variantColor }) =>
        theme.colors[variantColor as keyof typeof theme.colors]['400']};

      &:after {
        display: block;
      }
    }

    &:disabled {
      & ~ .uic-custom-checkbox {
        opacity: 0.5;
      }
    }
  }
`;
