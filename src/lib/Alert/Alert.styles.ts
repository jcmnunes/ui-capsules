import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { variant } from 'styled-system';
import { Box } from '../Box/Box';
import { BorderProps, ColorProps, PaddingProps } from '../styledProps';
import { IconType } from '../types';
import { IconSolid, Props as IconSolidProps } from '../IconSolid/IconSolid';
import { Wrapper } from '../Wrapper/Wrapper';

export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

export const ICON_MAP: Record<AlertVariant, IconType> = {
  info: 'info_c',
  success: 'check_c',
  warning: 'exclamation_t',
  error: 'exclamation_c',
};

const shake = keyframes`
  0%,
  100% {
    transform: translateX(0);
  }
  20%,
  60% {
    transform: translateX(-5px);
  }
  40%,
  80% {
    transform: translateX(5px);
  }
`;

export const AlertWrapper = styled(Wrapper)<{ variant: AlertVariant }>(({ variant }) => ({
  animationName: shake,
  animationFillMode: 'both',
  animationDuration: variant === 'warning' || variant === 'error' ? '500ms' : '0',
}));

interface StyledAlertProps {
  variant: AlertVariant;
}

export const StyledAlert = styled(Box)<StyledAlertProps>(
  ({ theme }) => ({
    fontFamily: theme.fontFamily,
    position: 'relative',
    padding: 16,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: theme.radii.medium,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 14,
    color: theme.colors.neutral['700'],

    '&::before': {
      fontFamily: '"Font Awesome 5 Pro"',
      fontSize: 16,
      fontWeight: 600,
      position: 'absolute',
      marginRight: 16,
      top: 18,
      left: 16,
    },
  }),

  variant<ColorProps & BorderProps & PaddingProps, AlertVariant>({
    variants: {
      info: {
        borderColor: 'info.300',
        bg: 'info.50',
        pl: '48',
        color: 'info.600',
      },

      success: {
        borderColor: 'success.300',
        bg: 'success.50',
        pl: '48',
        color: 'success.600',
      },

      warning: {
        borderColor: 'warning.500',
        bg: 'warning.50',
        pl: '48',
        color: 'warning.900',
      },

      error: {
        borderColor: 'error.300',
        bg: 'error.50',
        pl: '48',
        color: 'error.600',
      },
    },
  }),
);

interface AlertIconProps extends IconSolidProps {
  variant: AlertVariant;
}

export const AlertIcon = styled(IconSolid)<AlertIconProps>(
  {
    position: 'absolute',
    top: 18,
    left: 14,
  },

  variant<ColorProps, AlertVariant>({
    variants: {
      info: {
        color: 'info.400',
      },

      success: {
        color: 'success.400',
      },

      warning: {
        color: 'warning.600',
      },

      error: {
        color: 'error.400',
      },
    },
  }),
);
