import { styled } from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'error' | 'ghostGray' | 'ghost' | 'link';
export type ButtonSize = 'small' | 'medium' | 'large';

interface StyledButtonProps {
  $variant: ButtonVariant;
  $size: ButtonSize;
  $hasLeftIcon: boolean;
  $hasRightIcon: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>(
  ({ theme }) => ({
    fontFamily: theme.fonts.inter,
    borderRadius: theme.radii.medium,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
    pointerEvents: 'initial',
    padding: '0 12px',
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
    border: 'none',

    '&[data-focus-visible-added]:focus': {
      boxShadow: theme.shadows.focus,
      zIndex: 1,
    },

    '&:disabled': {
      opacity: 0.5,
      pointerEvents: 'none',
    },
  }),

  ({ theme, $size, $hasLeftIcon, $hasRightIcon }) => {
    switch ($size) {
      case 'small':
        return {
          height: 24,
          fontSize: theme.fontSizes.sm,
          lineHeight: '24px',
          paddingLeft: theme.space[4],
          paddingRight: theme.space[4],
        };
      case 'medium':
        return {
          height: 36,
          fontSize: theme.fontSizes.md,
          lineHeight: '36px',
          paddingLeft: theme.space[16],
          paddingRight: theme.space[16],
        };
      case 'large':
        return {
          height: 48,
          fontSize: theme.fontSizes.md,
          lineHeight: '48px',
          paddingLeft: $hasLeftIcon ? 20 : theme.space[24],
          paddingRight: $hasRightIcon ? 20 : theme.space[24],
        };
    }
  },

  ({ theme, $variant }) => {
    switch ($variant) {
      case 'primary':
        return {
          background: theme.colors.primary500,
          borderColor: theme.colors.primary500,
          color: theme.colors.white,

          '.darkTheme &': {
            background: theme.colors.primary400,
            borderColor: theme.colors.primary400,
          },

          '&:hover': {
            background: theme.colors.primary600,
            borderColor: theme.colors.primary600,

            '.darkTheme &': {
              background: theme.colors.primary500,
              borderColor: theme.colors.primary500,
            },
          },

          '&:active': {
            background: theme.colors.primary700,
            borderColor: theme.colors.primary700,

            '.darkTheme &': {
              background: theme.colors.primary400,
              borderColor: theme.colors.primary400,
            },
          },
        };
      case 'secondary':
        return {
          background: theme.colors.bg,
          border: 'none',
          color: theme.colors.neutral600,
          boxShadow: theme.shadows.border,

          '&[data-focus-visible-added]:focus': {
            boxShadow: theme.shadows.focus,
            zIndex: 1,
          },

          '&:hover': {
            background: theme.colors.neutral100,
          },

          '&:active': {
            background: theme.colors.neutral200,
          },

          '&:disabled': {
            boxShadow: theme.shadows.borderDisabled,
          },
        };
      case 'error':
        return {
          background: theme.colors.error500,
          borderColor: theme.colors.error500,
          color: theme.colors.white,

          '.darkTheme &': {
            background: theme.colors.error400,
            borderColor: theme.colors.error400,
          },

          '&[data-focus-visible-added]:focus': {
            boxShadow: theme.shadows.focusError,
            zIndex: 1,
          },

          '&:hover': {
            background: theme.colors.error600,
            borderColor: theme.colors.error600,

            '.darkTheme &': {
              background: theme.colors.error500,
              borderColor: theme.colors.error500,
            },
          },

          '&:active': {
            background: theme.colors.error700,
            borderColor: theme.colors.error700,

            '.darkTheme &': {
              background: theme.colors.error400,
              borderColor: theme.colors.error400,
            },
          },
        };
      case 'ghost':
        return {
          background: 'transparent',
          color: theme.colors.primary500,
          border: 'none',

          '&:focus': {
            background: 'transparent',
          },

          '&:hover': {
            background: theme.colors.primary100,
            color: theme.colors.primary600,
          },

          '&:active': {
            background: theme.colors.primary200,
            color: theme.colors.primary600,
          },
        };
      case 'ghostGray':
        return {
          background: 'transparent',
          color: theme.colors.neutral600,
          border: 'none',

          '&:focus': {
            background: 'transparent',
          },

          '&:hover': {
            background: theme.colors.neutral200,
          },

          '&:active': {
            background: theme.colors.neutral300,
          },
        };
      case 'link':
        return {
          padding: '0 2px',
          color: theme.colors.primary500,
          borderRadius: 0,
          height: 'auto',
          border: 'none',
          lineHeight: '21px',

          '&:hover': {
            color: theme.colors.primary600,
          },
        };
      default:
        return {};
    }
  },
);
