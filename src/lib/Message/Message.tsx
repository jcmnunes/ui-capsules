import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Icon } from '../Icon/Icon';
import { theme } from '../theme';

enum IconEnum {
  success = 'CHECK_C',
  warning = 'EXCLAMATION_T',
  error = 'EXCLAMATION_C',
}

const colors = {
  success: {
    background: theme.green500,
    border: theme.green600,
    text: '#FFF',
  },
  warning: {
    background: theme.yellow100,
    border: theme.yellow800,
    text: theme.yellow800,
  },
  error: {
    background: theme.red400,
    border: theme.red500,
    text: '#FFF',
  },
};

const shake = keyframes`
   0%,
  100% {
    transform: translateX(0);
  }
  20%,
  60% {
    transform: translateX(-5px);
  }
  40%,
  80% {
    transform: translateX(5px);
  }
`;

const StyledMessage = styled.div<{ appearance: 'success' | 'warning' | 'error' }>`
  display: grid;
  grid-template-columns: 24px 1fr;
  grid-gap: 12px;
  justify-items: start;
  align-items: start;
  color: ${({ appearance }) => colors[appearance].text};
  background: ${({ appearance }) => colors[appearance].background};
  border: 1px solid ${({ appearance }) => colors[appearance].border};
  padding: 12px 16px;
  font-size: 16px;
  animation-name: ${shake};
  animation-fill-mode: both;
  animation-duration: ${({ appearance }) =>
    appearance === 'error' || appearance === 'warning' ? '500ms' : 0};
`;

export const IconContainer = styled.span`
  margin-top: 2px;
  width: 24px;
  height: 24px;
`;

export const MessageBody = styled.span`
  text-align: left;
  line-height: 24px;
`;

interface Props {
  appearance: 'success' | 'warning' | 'error';
}

export const Message: React.FC<Props> = ({ appearance, children, ...other }) => (
  <StyledMessage appearance={appearance} {...other}>
    <IconContainer>
      <Icon icon={IconEnum[appearance]} />
    </IconContainer>
    <MessageBody>{children}</MessageBody>
  </StyledMessage>
);
Message.displayName = 'Message';
