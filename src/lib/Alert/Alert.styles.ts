import { css, keyframes, styled } from 'styled-components';
import { Box } from '../Box/Box';
import { IconType } from '../types';
import { Icon } from '../Icon/Icon';

export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

export const ICON_MAP: Record<AlertVariant, IconType> = {
  info: 'info_c',
  success: 'check_c',
  warning: 'exclamation_t',
  error: 'exclamation_c',
};

const shake = keyframes`
  0%, 100% { transform: translateX(0) }
  20%, 60% { transform: translateX(-5px) }
  40%, 80% { transform: translateX(5px) }
`;

export const AlertWrapper = styled(Box)<{ $variant: AlertVariant }>(
  {},

  css`
    animation: ${shake};
  `,

  {
    animationFillMode: 'both',
  },

  ({ $variant }) => {
    switch ($variant) {
      case 'success':
        return {
          animationDuration: '0',
        };
      case 'error':
        return {
          animationDuration: '500ms',
        };
      case 'warning':
        return {
          animationDuration: '500ms',
        };
      case 'info':
        return {
          animationDuration: '0',
        };
      default:
        throw new Error(`Unknown variant: ${$variant}`);
    }
  },
);

export const StyledAlert = styled(Box)<{ $variant: AlertVariant }>(
  ({ theme }) => ({
    fontFamily: theme.fonts.inter,
    position: 'relative',
    padding: 16,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: theme.radii.medium,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: theme.fontSizes.md,
    color: theme.colors.neutral700,

    '&::before': {
      fontFamily: '"Font Awesome 5 Pro"',
      fontSize: theme.fontSizes.md,
      fontWeight: 600,
      position: 'absolute',
      marginRight: 16,
      top: 18,
      left: 16,
    },
  }),

  ({ theme, $variant }) => {
    switch ($variant) {
      case 'success':
        return {
          color: theme.colors.success700,
          borderColor: theme.colors.success400,
          background: theme.colors.success50,
          paddingLeft: theme.space[48],

          '.darkTheme &': {
            color: theme.colors.neutral700,
            background: theme.colors.neutral100,
          },
        };
      case 'error':
        return {
          borderColor: theme.colors.error300,
          background: theme.colors.error50,
          paddingLeft: theme.space[48],
          color: theme.colors.error600,

          '.darkTheme &': {
            color: theme.colors.neutral700,
            background: theme.colors.neutral100,
          },
        };
      case 'warning':
        return {
          color: theme.colors.neutral600,
          borderColor: theme.colors.warning500,
          background: theme.colors.warning50,
          paddingLeft: theme.space[48],

          '.darkTheme &': {
            color: theme.colors.neutral700,
            background: theme.colors.neutral100,
          },
        };
      case 'info':
        return {
          borderColor: theme.colors.info300,
          background: theme.colors.info50,
          paddingLeft: theme.space[48],
          color: theme.colors.info600,

          '.darkTheme &': {
            color: theme.colors.neutral700,
            background: theme.colors.neutral100,
          },
        };
      default:
        throw new Error(`Unknown variant: ${$variant}`);
    }
  },
);

export const AlertIcon = styled(Icon)<{ $alertVariant: AlertVariant }>(
  {
    position: 'absolute',
    top: 18,
    left: 14,
  },

  ({ theme, $alertVariant }) => {
    switch ($alertVariant) {
      case 'success':
        return {
          color: theme.colors.success500,
        };
      case 'error':
        return {
          color: theme.colors.error500,
        };
      case 'warning':
        return {
          color: theme.colors.warning500,
        };
      case 'info':
        return {
          color: theme.colors.info500,
        };
      default:
        return {};
    }
  },
);
