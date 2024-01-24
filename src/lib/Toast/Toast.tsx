import { cssTransition, toast as rtToast, ToastContainerProps, ToastOptions } from 'react-toastify';
import React from 'react';
import { useTheme } from 'styled-components';
import { Text } from '../Text/Text';
import { Icon } from '../Icon/Icon';
import { ColorKey, IconType } from '../types';
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
    color: 'blue300',
  },

  success: {
    icon: 'check_c',
    color: 'green400',
  },

  warning: {
    icon: 'exclamation_t',
    color: 'yellow300',
  },

  error: {
    icon: 'exclamation_c',
    color: 'red300',
  },
};

const Toaster: React.FC<ToastContainerProps> = props => {
  return (
    <StyledContainer
      position="bottom-right"
      transition={slide}
      autoClose={5000}
      limit={3}
      newestOnTop
      hideProgressBar
      {...props}
    />
  );
};

interface Props {
  variant: ToastVariant;
  title?: string;
  message?: string;
}

export const Toast: React.FC<Props> = ({ variant, title, message }) => {
  const theme = useTheme();

  return (
    <ToastWrapper>
      <Box style={{ position: 'absolute', top: 1, left: 0 }}>
        <Icon
          icon={icons[variant].icon as IconType}
          style={{ color: theme.colors[icons[variant].color as ColorKey] }}
        />
      </Box>

      <Flex direction="column" style={{ marginLeft: 28 }}>
        {title && <Text style={{ fontWeight: 600, color: 'white' }}>{title}</Text>}

        {message && <Text style={{ color: 'white' }}>{message}</Text>}
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

export { Toaster, toast };
