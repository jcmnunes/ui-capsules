import { cssTransition, toast as rtToast, ToastContainerProps, ToastOptions } from 'react-toastify';
import React from 'react';
import { Text } from '../Text/Text';
import { Icon } from '../Icon/Icon';
import { IconType } from '../types';
import { StyledContainer, ToastWrapper } from './Toast.styles';
import { Box } from '../Box/Box';
import { Flex } from '../Flex/Flex';

type ToastVariant = 'info' | 'success' | 'warning' | 'error';

const slide = cssTransition({
  enter: 'slide-top',
  exit: 'slide-bottom',
});

const icons: Record<ToastVariant, { icon: string; color: string }> = {
  info: {
    icon: 'info_c',
    color: '$blue300',
  },

  success: {
    icon: 'check_c',
    color: '$green400',
  },

  warning: {
    icon: 'exclamation_t',
    color: '$yellow300',
  },

  error: {
    icon: 'exclamation_c',
    color: '$red300',
  },
};

const ToastContainer: React.FC<ToastContainerProps> = props => {
  return (
    <StyledContainer
      position="bottom-right"
      transition={slide}
      autoClose={5000}
      limit={3}
      {...props}
    />
  );
};

interface ToastProps {
  variant: ToastVariant;
  title?: string;
  message?: string;
}

export const Toast: React.FC<ToastProps> = ({ variant, title, message }) => {
  return (
    <ToastWrapper>
      <Box css={{ position: 'absolute', top: 2, left: 0 }}>
        <Icon icon={icons[variant].icon as IconType} css={{ color: icons[variant].color }} />
      </Box>

      <Flex direction="column" css={{ ml: '28px' }}>
        {title && (
          <Text size="sm" css={{ fontWeight: 600, color: '$white' }}>
            {title}
          </Text>
        )}

        {message && (
          <Text size="sm" css={{ color: '$white' }}>
            {message}
          </Text>
        )}
      </Flex>
    </ToastWrapper>
  );
};

interface ToastParams {
  title?: string;
  message?: string;
  options?: ToastOptions;
}

const _toast = ({ title, message, options }: ToastParams) =>
  rtToast(<Toast title={title} message={message} variant="info" />, options);

const createToast = (variant: ToastVariant) => {
  return ({ title, message, options }: ToastParams) =>
    rtToast(<Toast title={title} message={message} variant={variant} />, options);
};

_toast.info = createToast('info');
_toast.success = createToast('success');
_toast.warning = createToast('warning');
_toast.error = createToast('error');

const toast = Object.assign(rtToast, _toast);

export { ToastContainer, toast };
