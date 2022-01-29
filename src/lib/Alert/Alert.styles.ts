import { keyframes, styled } from '../stitches.config';
import { Box } from '../Box/Box';
import { IconType } from '../types';
import { Icon } from '../Icon/Icon';
import { darkTheme } from '../darkTheme';

export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

export const ICON_MAP: Record<AlertVariant, IconType> = {
  info: 'info_c',
  success: 'check_c',
  warning: 'exclamation_t',
  error: 'exclamation_c',
};

const shake = keyframes({
  '0%, 100%': { transform: 'translateX(0)' },
  '20%, 60%': { transform: 'translateX(-5px)' },
  '40%, 80%': { transform: 'translateX(5px)' },
});

export const AlertWrapper = styled(Box, {
  animationName: `${shake}`,
  animationFillMode: 'both',

  variants: {
    variant: {
      info: {
        animationDuration: 0,
      },
      success: {
        animationDuration: 0,
      },
      warning: {
        animationDuration: '500ms',
      },
      error: {
        animationDuration: '500ms',
      },
    },
  },
});

export const StyledAlert = styled(Box, {
  fontFamily: '$inter',
  position: 'relative',
  padding: 16,
  borderWidth: 1,
  borderStyle: 'solid',
  borderRadius: '$medium',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  fontSize: '$sm',
  color: '$neutral700',

  '&::before': {
    fontFamily: '"Font Awesome 5 Pro"',
    fontSize: '$md',
    fontWeight: 600,
    position: 'absolute',
    marginRight: 16,
    top: 18,
    left: 16,
  },

  variants: {
    variant: {
      info: {
        borderColor: '$info300',
        bg: '$info50',
        pl: '$8',
        color: '$info600',

        [`.${darkTheme} &`]: {
          color: '$neutral700',
          bg: '$neutral100',
        },
      },

      success: {
        color: '$success700',
        borderColor: '$success400',
        bg: '$success50',
        pl: '$8',

        [`.${darkTheme} &`]: {
          color: '$neutral700',
          bg: '$neutral100',
        },
      },

      warning: {
        color: '$neutral600',
        borderColor: '$warning500',
        bg: '$warning50',
        pl: '$8',

        [`.${darkTheme} &`]: {
          color: '$neutral700',
          bg: '$neutral100',
        },
      },

      error: {
        borderColor: '$error300',
        bg: '$error50',
        pl: '$8',
        color: '$error600',

        [`.${darkTheme} &`]: {
          color: '$neutral700',
          bg: '$neutral100',
        },
      },
    },
  },
});

export const AlertIcon = styled(Icon, {
  position: 'absolute',
  top: 18,
  left: 14,

  variants: {
    alertVariant: {
      info: {
        color: '$blue500',
      },

      success: {
        color: '$green500',
      },

      warning: {
        color: '$yellow600',
      },

      error: {
        color: '$red500',
      },
    },
  },
});
