import React from 'react';
import { Icon } from '../Icon/Icon';
import { darkTheme } from '../darkTheme';
import { IconType, Status } from '../types';
import { styled } from 'styled-components';

export const StyledModalHeader = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '24px 64px 4px 24px',
  color: theme.colors.neutral700,
  fontSize: theme.fontSizes['2xl'],
  fontWeight: 500,
  lineHeight: '32px',
}));

interface IconContainerProps {
  variant?: Status;
}

export const IconContainer = styled.div<IconContainerProps>(
  {
    width: 32,
    height: 32,
    borderRadius: 16,
    padding: 4,
    marginRight: 8,
  },

  ({ theme, variant }) => {
    switch (variant) {
      case 'success':
        return {
          background: theme.colors.success100,

          '.darkTheme &': {
            background: theme.colors.neutral100,
          },
        };
      case 'warning':
        return {
          background: theme.colors.warning100,

          '.darkTheme &': {
            background: theme.colors.neutral100,
          },
        };
      case 'error':
        return {
          background: theme.colors.error100,

          '.darkTheme &': {
            background: theme.colors.neutral100,
          },
        };
    }
  },
);

interface StyledIconProps {
  variant?: Status;
}

const StyledIcon = styled(Icon)<StyledIconProps>(({ theme, variant }) => {
  switch (variant) {
    case 'success':
      return {
        color: theme.colors.success700,

        '.darkTheme &': {
          color: theme.colors.success400,
        },
      };
    case 'warning':
      return {
        color: theme.colors.warning700,

        '.darkTheme &': {
          color: theme.colors.warning300,
        },
      };
    case 'error':
      return {
        color: theme.colors.error700,

        '.darkTheme &': {
          color: theme.colors.error400,
        },
      };
  }
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
