import { toast } from 'react-toastify';
import React from 'react';
import { Text } from '../Text/Text';
import { Icon } from '../Icon/Icon';
import { IconType } from '../types';
import { StyledContainer, ToastWrapper } from './Toaster.styles';
import { Box } from '../Box/Box';
import { Flex } from '../Flex/Flex';
import { ToastOptions } from 'react-toastify/dist/types';

type ToastType = 'info' | 'success' | 'warning' | 'error';

const icons: Record<ToastType, { icon: string; color: string }> = {
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

interface ToastProps {
  type: ToastType;
  title?: string;
  message?: string;
}

export const Toast: React.FC<ToastProps> = ({ type, title, message }) => {
  return (
    <ToastWrapper>
      <Box position="absolute" top={2} left={0}>
        <Icon icon={icons[type].icon as IconType} color={icons[type].color} />
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

export const ToastContainer = () => {
  return <StyledContainer limit={3} position="bottom-right" hideProgressBar />;
};

interface ToastParams {
  title?: string;
  message?: string;
  options?: ToastOptions;
}

export const Toaster = {
  info({ title, message, options }: ToastParams) {
    toast(<Toast type="info" title={title} message={message} />, options);
  },

  success({ title, message, options }: ToastParams) {
    toast(<Toast type="success" title={title} message={message} />, options);
  },

  warning({ title, message, options }: ToastParams) {
    toast(<Toast type="warning" title={title} message={message} />, options);
  },

  error({ title, message, options }: ToastParams) {
    toast(<Toast type="error" title={title} message={message} />, options);
  },
};
