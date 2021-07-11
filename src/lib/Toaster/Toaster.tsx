import { toast as rtToast, ToastContainerProps, ToastOptions } from 'react-toastify';
import React from 'react';
import { Text } from '../Text/Text';
import { Icon } from '../Icon/Icon';
import { IconType } from '../types';
import { StyledContainer, ToastWrapper } from './Toaster.styles';
import { Box } from '../Box/Box';
import { Flex } from '../Flex/Flex';

type ToastVariant = 'info' | 'success' | 'warning' | 'error';

const icons: Record<ToastVariant, { icon: string; color: string }> = {
  info: {
    icon: 'info_c',
    color: 'info.300',
  },

  success: {
    icon: 'check_c',
    color: 'success.400',
  },

  warning: {
    icon: 'exclamation_t',
    color: 'warning.300',
  },

  error: {
    icon: 'exclamation_c',
    color: 'error.300',
  },
};

const ToastContainer: React.FC<ToastContainerProps> = props => {
  return <StyledContainer position="bottom-right" autoClose={5000} limit={3} {...props} />;
};

interface ToastProps {
  variant: ToastVariant;
  title?: string;
  message?: string;
}

export const Toast: React.FC<ToastProps> = ({ variant, title, message }) => {
  return (
    <ToastWrapper>
      <Box position="absolute" top={2} left={0}>
        <Icon icon={icons[variant].icon as IconType} color={icons[variant].color} />
      </Box>

      <Flex flexDirection="column" ml={28}>
        {title && (
          <Text fontWeight={600} color="neutral.50">
            {title}
          </Text>
        )}

        {message && <Text color="neutral.50">{message}</Text>}
      </Flex>
    </ToastWrapper>
  );
};

interface ToastParams {
  title?: string;
  message?: string;
  options?: ToastOptions;
}

const toast = ({ title, message, options }: ToastParams) =>
  rtToast(<Toast title={title} message={message} variant="info" />, options);

const createToast = (variant: ToastVariant) => {
  return ({ title, message, options }: ToastParams) =>
    rtToast(<Toast title={title} message={message} variant={variant} />, options);
};

toast.info = createToast('info');
toast.success = createToast('success');
toast.warning = createToast('warning');
toast.error = createToast('error');

const Toaster = Object.assign(rtToast, toast);

export { ToastContainer, Toaster };
