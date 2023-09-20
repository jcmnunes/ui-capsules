import { styled } from 'styled-components';

interface LabelProps {
  $disabled?: boolean;
  $size?: 'medium' | 'large';
}

export const Label = styled.label<LabelProps>(
  ({ theme, $disabled }) => ({
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    userSelect: 'none',
    cursor: $disabled ? 'initial' : 'pointer',
    fontWeight: 500,
    color: $disabled ? theme.colors.neutral400 : theme.colors.neutral700,
  }),

  ({ $size, theme }) => {
    switch ($size) {
      case 'medium':
        return {
          height: 18,
          fontSize: theme.fontSizes.md,
          paddingLeft: 24,
          lineHeight: '18px',
        };
      case 'large':
        return {
          height: 24,
          fontSize: theme.fontSizes.md,
          paddingLeft: 35,
          lineHeight: '25px',
        };
      default:
        return {};
    }
  },
);

interface CustomCheckboxProps {
  $size?: 'medium' | 'large';
  $disabled?: boolean;
}

export const CustomCheckbox = styled.span<CustomCheckboxProps>(
  ({ theme }) => ({
    position: 'absolute',
    borderRadius: theme.radii.medium,
    top: 0,
    left: 0,
    backgroundColor: theme.colors.bg,
    borderWidth: 1,
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: theme.shadows.border,

    '&:hover': {
      backgroundColor: theme.colors.neutral50,
    },

    '&:after': {
      content: '""',
      position: 'absolute',
      display: 'none',
      border: 'solid white',
      transform: 'rotate(45deg)',
    },
  }),

  ({ $size }) => {
    switch ($size) {
      case 'medium':
        return {
          width: 18,
          height: 18,

          '&:after': {
            left: '6px',
            top: '3px',
            width: 6,
            height: 10,
            borderWidth: '0 2px 2px 0',
          },
        };
      case 'large':
        return {
          width: 24,
          height: 24,

          '&:after': {
            top: 4,
            left: 8,
            width: 8,
            height: 13,
            borderWidth: '0 3px 3px 0',
          },
        };
      default:
        return {};
    }
  },

  ({ $disabled, theme }) => {
    if ($disabled) {
      return {
        boxShadow: 'none',
        pointerEvents: 'none',
        backgroundColor: theme.colors.neutral300,
      };
    }
  },
);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const StyledInput = styled.input(({ theme }) => ({
  position: 'absolute',
  opacity: 0,
  cursor: 'pointer',
  height: 0,
  width: 0,

  '&[data-focus-visible-added]:focus': {
    '& ~ .uic-custom-checkbox': {
      outline: 'none',
      boxShadow: theme.shadows.focus,
    },
  },

  '&:checked': {
    '& ~ .uic-custom-checkbox': {
      backgroundColor: theme.colors.primary500,
      borderColor: theme.colors.primary500,
      boxShadow: theme.shadows.borderPrimary,

      '&:after': {
        display: 'block',
      },
    },

    '&:disabled': {
      '& ~ .uic-custom-checkbox': {
        opacity: 0.7,
      },
    },
  },
}));
