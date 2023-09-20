import { styled } from 'styled-components';
import { DualSize } from '../types';

interface LabelProps {
  $disabled?: boolean;
  $size: DualSize;
}

export const Label = styled.label<LabelProps>(
  ({ theme }) => ({
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
    fontFamily: theme.fonts.inter,
    display: 'inline-flex',
    cursor: 'pointer',
    alignItems: 'center',
    position: 'relative',
    userSelect: 'none',
    color: theme.colors.neutral700,
  }),

  ({ $disabled, theme }) => {
    if ($disabled) {
      return {
        cursor: 'initial',
        color: theme.colors.neutral400,
      };
    }
  },

  ({ $size, theme }) => {
    switch ($size) {
      case 'medium':
        return {
          height: 16,
          paddingLeft: 22,
          fontSize: theme.fontSizes.md,
        };

      case 'large':
        return {
          height: 20,
          paddingLeft: 28,
          fontSize: theme.fontSizes.md,
        };

      default:
        return {};
    }
  },
);

interface CustomRadioProps {
  $disabled?: boolean;
  $size: DualSize;
}

export const CustomRadio = styled.span<CustomRadioProps>(
  ({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: theme.colors.bg,
    borderRadius: '50%',
    boxShadow: theme.shadows.border,

    '&:after': {
      content: '""',
      position: 'absolute',
      borderRadius: '50%',
      backgroundColor: 'white',
      display: 'none',
    },

    '&:hover': {
      backgroundColor: theme.colors.neutral100,
    },
  }),

  ({ $disabled, theme }) => {
    if ($disabled) {
      return {
        backgroundColor: theme.colors.neutral300,
        boxShadow: 'none',
        pointerEvents: 'none',
      };
    }
  },

  ({ $size }) => {
    switch ($size) {
      case 'medium':
        return {
          height: 16,
          width: 16,

          '&:after': {
            top: 5,
            left: 5,
            width: 6,
            height: 6,
          },
        };

      case 'large':
        return {
          height: 20,
          width: 20,

          '&:after': {
            top: 6,
            left: 6,
            width: 8,
            height: 8,
          },
        };

      default:
        return {};
    }
  },
);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const StyledRadioInput = styled.input(({ theme }) => ({
  position: 'absolute',
  opacity: 0,
  cursor: 'pointer',
  height: 0,
  width: 0,

  '&[data-focus-visible-added]:focus': {
    '& ~ .uic-custom-radio': {
      outline: 'none',
      boxShadow: theme.shadows.focus,
    },
  },

  '&:checked': {
    '~ .uic-custom-radio': {
      backgroundColor: theme.colors.primary500,
      boxShadow: theme.shadows.borderPrimary,

      '&:after': {
        display: 'block',
      },
    },

    '&:disabled': {
      '& ~ .uic-custom-radio': {
        opacity: 0.7,
      },
    },
  },
}));
