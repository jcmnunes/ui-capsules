import React from 'react';
import { styled } from '../stitches.config';
import { Icon } from '../Icon/Icon';
import { darkTheme } from '../darkTheme';
import { IconType, Status } from '../types';

export const StyledModalHeader = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '24px 64px 4px 24px',
  color: '$neutral700',
  fontSize: '$2xl',
  fontWeight: 500,
  lineHeight: '32px',
});

export const IconContainer = styled('div', {
  width: 32,
  height: 32,
  borderRadius: 16,
  padding: 4,
  marginRight: 8,

  variants: {
    variant: {
      success: {
        background: '$success100',

        [`.${darkTheme} &`]: {
          background: '$neutral100',
        },
      },

      warning: {
        background: '$warning100',

        [`.${darkTheme} &`]: {
          background: '$neutral100',
        },
      },

      error: {
        background: '$error100',

        [`.${darkTheme} &`]: {
          background: '$neutral100',
        },
      },
    },
  },
});

const StyledIcon = styled(Icon, {
  variants: {
    variant: {
      success: {
        color: '$success700',

        [`.${darkTheme} &`]: {
          color: '$success400',
        },
      },

      warning: {
        color: '$warning700',

        [`.${darkTheme} &`]: {
          color: '$warning300',
        },
      },

      error: {
        color: '$error700',

        [`.${darkTheme} &`]: {
          color: '$error400',
        },
      },
    },
  },
});

interface ModalHeaderProps {
  variant?: Status;
}

const iconMap: Record<Status, IconType> = {
  success: 'check_c',
  warning: 'exclamation_t',
  error: 'exclamation_c',
};

export const ModalHeader: React.FC<ModalHeaderProps> = ({ variant, children }) => {
  const icon = variant ? iconMap[variant] : null;

  return (
    <StyledModalHeader>
      {icon && (
        <IconContainer variant={variant}>
          <StyledIcon icon={icon} variant={variant} size={24} />
        </IconContainer>
      )}

      {children}
    </StyledModalHeader>
  );
};
