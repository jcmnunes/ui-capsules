import React from 'react';
import { styled } from '../stitches.config';
import { Icon } from '../Icon/Icon';

export const StyledModalHeader = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '24px 64px 4px 24px',
  color: '$neutral700',
  fontSize: '$5',
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
      },

      warning: {
        background: '$warning100',
      },

      error: {
        background: '$error100',
      },
    },
  },
});

const SuccessIcon = () => {
  return <Icon icon="check_c" size={24} css={{ color: '$success700' }} />;
};

const WarningIcon = () => {
  return <Icon icon="exclamation_t" size={24} css={{ color: '$yellow700' }} />;
};

const ErrorIcon = () => {
  return <Icon icon="exclamation_c" size={24} css={{ color: '$error600' }} />;
};

interface ModalHeaderProps {
  variant?: 'success' | 'warning' | 'error';
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({ variant, children }) => {
  let Icon;
  if (variant === 'success') {
    Icon = SuccessIcon;
  } else if (variant === 'warning') {
    Icon = WarningIcon;
  } else if (variant === 'error') {
    Icon = ErrorIcon;
  }

  return (
    <StyledModalHeader>
      {Icon && (
        <IconContainer variant={variant}>
          <Icon />
        </IconContainer>
      )}

      {children}
    </StyledModalHeader>
  );
};
