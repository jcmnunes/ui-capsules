import React from 'react';
import { WrapperProps } from '../Wrapper/Wrapper';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { Button } from '../Button/Button';
import { AlertIcon, AlertVariant, AlertWrapper, ICON_MAP, StyledAlert } from './Alert.styles';
import { CloseButton } from '../CloseButton/CloseButton';
import { Action } from '../types';

export interface Props extends WrapperProps {
  title?: string;
  message?: string;
  variant?: AlertVariant;
  onRequestClose?(): void;
  actions?: Action[];
  extraAction?: Action;
}

export const Alert: React.FC<Props> = ({
  variant = 'error',
  title,
  message,
  onRequestClose,
  actions,
  extraAction,
  ...rest
}) => {
  return (
    <AlertWrapper variant={variant} {...rest}>
      <StyledAlert variant={variant}>
        <AlertIcon alertVariant={variant} icon={ICON_MAP[variant]} />

        <Box display="flex" flexDirection="column" flex={1}>
          {!!title && (
            <Text fontWeight={600} color="inherit" mb={message ? '4' : '0'}>
              {title}
            </Text>
          )}

          {!!message && <Text color="inherit">{message}</Text>}

          {actions && (
            <Box display="flex" mt="8">
              {actions.map(({ text, onClick }) => (
                <Button key={text} variant="link" variantColor={variant} onClick={onClick} mr="16">
                  {text}
                </Button>
              ))}
            </Box>
          )}
        </Box>

        {extraAction && (
          <Button key={extraAction.text} variant="link" onClick={extraAction.onClick} ml="16">
            {`${extraAction.text} →`}
          </Button>
        )}

        {onRequestClose && <CloseButton onClick={onRequestClose} ml="16" />}
      </StyledAlert>
    </AlertWrapper>
  );
};

Alert.displayName = 'Alert';

Alert.defaultProps = {
  title: undefined,
  message: undefined,
  variant: 'error',
  onRequestClose: undefined,
  actions: undefined,
  extraAction: undefined,
};
