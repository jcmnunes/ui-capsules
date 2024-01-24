import React from 'react';
import { Text } from '../Text/Text';
import { Button } from '../Button/Button';
import { AlertIcon, AlertVariant, AlertWrapper, ICON_MAP, StyledAlert } from './Alert.styles';
import { CloseButton } from '../CloseButton/CloseButton';
import { Action } from '../types';
import { Flex } from '../Flex/Flex';

export interface Props extends React.ComponentPropsWithoutRef<'div'> {
  title?: string;
  message?: string;
  variant?: AlertVariant;
  onRequestClose?(): void;
  actions?: Action[];
}

export const Alert = ({
  variant = 'error',
  title,
  message,
  onRequestClose,
  actions,
  ...rest
}: Props) => {
  return (
    <AlertWrapper $variant={variant} {...rest}>
      <StyledAlert $variant={variant}>
        <AlertIcon $alertVariant={variant} icon={ICON_MAP[variant]} />

        <Flex direction="column" flex={1}>
          {!!title && (
            <Text
              style={{
                marginBottom: message ? 4 : 0,
                fontWeight: 600,
                color: 'inherit',
              }}
            >
              {title}
            </Text>
          )}

          {!!message && <Text style={{ color: 'inherit' }}>{message}</Text>}

          {actions && (
            <Flex style={{ marginTop: 8 }}>
              {actions.map(({ text, onClick }) => (
                <Button
                  key={text}
                  variant="link"
                  onClick={onClick}
                  style={{
                    marginRight: 16,
                    color: 'inherit',
                  }}
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
            style={{
              marginLeft: 16,
              color: 'inherit',
            }}
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
