import { styled } from 'styled-components';

export type InputVariant = 'error' | 'success';

// Hide spin box for Input type number
export const Wrapper = styled.div({
  [`input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button`]: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    '-webkit-appearance': 'none',
    margin: 0,
  },

  'input[type="number"]': {
    '-moz-appearance': 'textfield',
  },

  width: '100%',
  isolation: 'isolate',
});

export const InputWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
  position: 'relative',
});

interface IconWrapperProps {
  $size: 'small' | 'medium' | 'large';
  $position: 'left' | 'right';
}

export const IconWrapper = styled.div<IconWrapperProps>(
  ({ theme }) => ({
    position: 'absolute',
    zIndex: 3,
    color: theme.colors.neutral400,
    pointerEvents: 'none',
  }),

  ({ $size, $position }) => {
    switch ($size) {
      case 'small':
        return {
          top: 8,
          left: $position === 'left' ? 6 : 'auto',
          right: $position === 'right' ? 6 : 'auto',
        };
      case 'medium':
        return {
          top: 8,
          left: $position === 'left' ? 8 : 'auto',
          right: $position === 'right' ? 8 : 'auto',
        };
      case 'large':
        return {
          top: 10,
          left: $position === 'left' ? 8 : 'auto',
          right: $position === 'right' ? 8 : 'auto',
        };
    }
  },
);

interface StyledInputProps {
  $variant?: InputVariant;
  $size: 'small' | 'medium' | 'large';
  $hasLeftIcon: boolean;
  $hasRightIcon: boolean;
}

export const StyledInput = styled.input<StyledInputProps>(
  ({ theme }) => ({
    fontFamily: theme.fonts.inter,
    background: theme.colors.bg,
    color: theme.colors.neutral700,
    borderRadius: theme.radii.medium,
    border: 'none',
    width: '100%',
    boxShadow: theme.shadows.border,
    '-webkit-appearance': 'none',
    appearance: 'none',

    '&::placeholder': {
      color: theme.colors.neutral400,
    },

    '&:hover': {
      boxShadow: theme.shadows.borderHover,
    },

    '&:focus': {
      outline: 'none',
      boxShadow: theme.shadows.focus,
    },

    '&:disabled': {
      color: theme.colors.neutral400,
      background: theme.colors.neutral100,
      borderColor: theme.colors.neutral300,
      pointerEvents: 'none',
    },
  }),

  ({ theme, $variant }) => {
    switch ($variant) {
      case 'success':
        return {
          boxShadow: theme.shadows.borderSuccess,

          '&:hover': {
            boxShadow: theme.shadows.borderSuccessHover,
          },

          '&:focus': {
            outline: 'none',
            boxShadow: theme.shadows.focusSuccess,
          },
        };

      case 'error':
        return {
          boxShadow: theme.shadows.borderError,

          '&:hover': {
            boxShadow: theme.shadows.borderErrorHover,
          },

          '&:focus': {
            outline: 'none',
            boxShadow: theme.shadows.focusError,
          },
        };

      default:
        return {};
    }
  },

  ({ theme, $size, $hasLeftIcon, $hasRightIcon }) => {
    switch ($size) {
      case 'small':
        return {
          height: 32,
          fontSize: theme.fontSizes.sm,
          paddingRight: $hasRightIcon ? 26 : 8,
          paddingLeft: $hasLeftIcon ? 26 : 8,
        };

      case 'medium':
        return {
          height: 36,
          fontSize: theme.fontSizes.md,
          paddingRight: $hasRightIcon ? 34 : 8,
          paddingLeft: $hasLeftIcon ? 34 : 8,
        };

      case 'large':
        return {
          height: 40,
          fontSize: theme.fontSizes.lg,
          paddingRight: $hasRightIcon ? 38 : 8,
          paddingLeft: $hasLeftIcon ? 38 : 8,
        };

      default:
        return {};
    }
  },
);

export const InputIcon = styled.div``;
