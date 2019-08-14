import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components/macro';
import Glyph from '../Glyph/Glyph';
import theme from '../theme';

const colors = {
  success: {
    background: theme.green500,
    border: theme.green600,
    text: '#FFF',
  },
  warning: {
    background: theme.yellow700,
    border: theme.yellow800,
    text: '#FFF',
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

const StyledMessage = styled.div`
  display: grid;
  grid-template-columns: 24px 1fr;
  grid-gap: 12px;
  justify-items: start;
  align-items: start;
  color: ${props => colors[props.appearance].text};
  background: ${props => colors[props.appearance].background};
  border: 1px solid ${props => colors[props.appearance].border};
  padding: 12px 16px;
  font-size: 16px;
  animation-name: ${shake};
  animation-fill-mode: both;
  animation-duration: ${props =>
    props.appearance === 'error' || props.appearance === 'warning' ? '500ms' : 0};
`;

export const Icon = styled.span`
  margin-top: 2px;
  width: 16px;
  height: 16px;
`;

export const MessageBody = styled.span`
  text-align: left;
  line-height: 22px;
`;

const Message = ({ appearance, children, ...other }) => (
  <StyledMessage appearance={appearance} {...other}>
    <Icon>
      <Glyph icon={appearance} />
    </Icon>
    <MessageBody>{children}</MessageBody>
  </StyledMessage>
);

Message.propTypes = {
  appearance: PropTypes.oneOf(['success', 'warning', 'error']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Message;
