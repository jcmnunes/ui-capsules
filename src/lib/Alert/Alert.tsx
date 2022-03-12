import React from 'react';
import { Text } from '../Text/Text';
import { Button } from '../Button/Button';
import { AlertIcon, AlertVariant, AlertWrapper, ICON_MAP, StyledAlert } from './Alert.styles';
import { CloseButton } from '../CloseButton/CloseButton';
import { Action } from '../types';
import { Flex } from '../Flex/Flex';
import { CSS } from '../stitches.config';

export interface Props {
  title?: string;
  message?: string;
  variant?: AlertVariant;
  onRequestClose?(): void;
  actions?: Action[];
  css?: CSS;
}

export const Alert: React.FC<Props> = ({
  variant = 'error',
  title,
  message,
  onRequestClose,
  actions,
  ...rest
}) => {
  return (
    <AlertWrapper variant={variant} {...rest}>
      <StyledAlert variant={variant}>
        <AlertIcon alertVariant={variant} icon={ICON_MAP[variant]} />

        <Flex direction="column" css={{ flex: 1 }}>
          {!!title && (
            <Text css={{ fontWeight: 600, color: 'inherit', mb: message ? '$1' : 0 }}>{title}</Text>
          )}

          {!!message && <Text css={{ color: 'inherit' }}>{message}</Text>}

          {actions && (
            <Flex css={{ mt: '$2' }}>
              {actions.map(({ text, onClick }) => (
                <Button
                  key={text}
                  variant="link"
                  onClick={onClick}
                  css={{ mr: '$4', color: 'inherit', '&:hover': { color: 'inherit' } }}
                >
                  {text}
                </Button>
              ))}
            </Flex>
          )}
        </Flex>

        {onRequestClose && (
          <CloseButton
            onClick={onRequestClose}
            css={{ ml: '$4', color: 'inherit', '&:hover': { color: 'inherit', bg: 'transparent' } }}
          />
        )}
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
};
