import styled from '@emotion/styled/macro';
import { Wrapper } from '../Wrapper/Wrapper';
import { PositionProps, variant } from 'styled-system';
import { LayoutProps, MarginProps, PaddingProps, TypographyProps } from '../styledProps';
import { ElementSize, IconType } from '../types';
import shouldForwardProp from '@styled-system/should-forward-prop';
import { Props as IconProps } from '../Icon/Icon';

export const InputWrapper = styled(Wrapper)({
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
  }),
  ({ position }) =>
    variant<PositionProps & LayoutProps, ElementSize>({
      prop: 'size',
      variants: {
        small: {
          top: 3,
          left: position === 'left' ? 6 : 'auto',
          right: position === 'left' ? 'auto' : 6,
        },
        medium: {
          top: 4,
          left: position === 'left' ? 8 : 'auto',
          right: position === 'left' ? 'auto' : 8,
        },
        large: {
          top: 12,
          left: position === 'left' ? 13 : 'auto',
          right: position === 'left' ? 'auto' : 13,
        },
      },
    }),
);

interface StyledInputProps {
  inputSize: ElementSize;
  error?: string;
  leftIcon?: IconType;
  rightIcon?: IconType;
}

export const StyledInput = styled('input', { shouldForwardProp })<StyledInputProps>(
  ({ theme, error }) => ({
    fontFamily: theme.fontFamily,
    background: theme.colors.bg,
    color: theme.colors.neutral['600'],
    borderRadius: theme.radii.medium,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: error ? theme.colors.error['500'] : theme.colors.neutral['200'],
    width: '100%',

    '&::placeholder': {
      color: theme.colors.neutral['300'],
    },

    '&:hover': {
      borderColor: error ? theme.colors.error['700'] : theme.colors.neutral['300'],
    },

    '&:focus': {
      outline: 'none',
      borderColor: error ? theme.colors.error['400'] : theme.colors.primary['400'],
      boxShadow: `0 0 0 3px ${error ? theme.colors.error['200'] : theme.colors.primary['200']}`,
    },

    '&:disabled': {
      color: theme.colors.neutral['200'],
      background: theme.colors.neutral['50'],
      cursor: 'not-allowed',
      borderColor: theme.colors.neutral['200'],
    },
  }),

  ({ leftIcon, rightIcon }) =>
    variant<LayoutProps & TypographyProps & PaddingProps, ElementSize>({
      prop: 'inputSize',
      variants: {
        small: {
          height: 24,
          fontSize: 'small',
          pr: rightIcon ? 26 : 4,
          pl: leftIcon ? 26 : 4,
        },

        medium: {
          height: 32,
          fontSize: 'body',
          pr: rightIcon ? 34 : 8,
          pl: leftIcon ? 34 : 8,
        },

        large: {
          height: 48,
          fontSize: 'h6',
          pr: rightIcon ? 46 : 12,
          pl: leftIcon ? 46 : 12,
        },
      },
    }),
);

interface ErrorProps {
  size: ElementSize;
}

export const Error = styled.div<ErrorProps>(
  ({ theme }) => ({
    color: theme.colors.error['600'],
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: '0 4px',
  }),
  variant<TypographyProps & MarginProps, ElementSize>({
    prop: 'size',
    variants: {
      small: {
        fontSize: 'small',
        my: 2,
      },
      medium: {
        fontSize: 'body',
        my: 2,
      },
      large: {
        fontSize: 'h6',
        my: 4,
      },
    },
  }),
);

export const InputIcon = styled.div<IconProps>``;