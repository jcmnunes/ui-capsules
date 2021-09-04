import styled from '@emotion/styled';
import { ElementSize, VariantColor } from '../types';
import { PositionProps, variant } from 'styled-system';
import { LayoutProps, PaddingProps, PropsWithPseudo, TypographyProps } from '../styledProps';

interface LabelProps {
  size: ElementSize;
  disabled?: boolean;
}

export const Label = styled.label<LabelProps>(
  ({ disabled, theme }) => ({
    display: 'inline-flex',
    cursor: disabled ? 'not-allowed' : 'pointer',
    alignItems: 'center',
    position: 'relative',
    userSelect: 'none',
    color: disabled ? theme.colors.neutral['400'] : 'inherit',
  }),

  variant<LayoutProps & TypographyProps & PaddingProps, ElementSize>({
    prop: 'size',
    variants: {
      small: {
        height: 16,
        pl: 22,
        fontSize: 'body',
      },
      medium: {
        height: 20,
        pl: 28,
        fontSize: 'body',
      },
      large: {
        height: 25,
        pl: 35,
        fontSize: 'h6',
      },
    },
  }),
);

interface CustomRadioProps {
  size: ElementSize;
  disabled?: boolean;
}

export const CustomRadio = styled.span<CustomRadioProps>(
  ({ disabled, theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: disabled ? theme.colors.neutral['50'] : theme.colors.bg,
    borderRadius: '50%',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: disabled ? theme.colors.neutral['100'] : theme.colors.neutral['400'],

    '&:after': {
      content: '""',
      position: 'absolute',
      borderRadius: '50%',
      backgroundColor: 'white',
      display: 'none',
    },

    '&:hover': {
      backgroundColor: theme.colors.neutral['50'],
    },
  }),

  variant<PropsWithPseudo<LayoutProps & PositionProps, '&:after'>, ElementSize>({
    prop: 'size',
    variants: {
      small: {
        height: 16,
        width: 16,

        '&:after': {
          top: 4,
          left: 4,
          width: 6,
          height: 6,
        },
      },

      medium: {
        height: 20,
        width: 20,

        '&:after': {
          top: 5,
          left: 5,
          width: 8,
          height: 8,
        },
      },

      large: {
        height: 25,
        width: 25,

        '&:after': {
          top: 7,
          left: 7,
          width: 9,
          height: 9,
        },
      },
    },
  }),
);

interface StyledInputProps {
  variantColor: VariantColor;
}

export const StyledInput = styled.input<StyledInputProps>`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:focus {
    & ~ .uic-custom-radio {
      outline: none;
      box-shadow: ${({ theme }) => `0 0 0 3px ${theme.colors.primary['200']}`};
    }
  }

  &:checked {
    ~ .uic-custom-radio {
      background-color: ${({ theme, variantColor }) =>
        theme.colors[variantColor as keyof typeof theme.colors]['500']};
      border-color: ${({ theme, variantColor }) =>
        theme.colors[variantColor as keyof typeof theme.colors]['500']};

      &:after {
        display: block;
      }
    }

    &:disabled {
      & ~ .uic-custom-radio {
        opacity: 0.7;
      }
    }
  }
`;
