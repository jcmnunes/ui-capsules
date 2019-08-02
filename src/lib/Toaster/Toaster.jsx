import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ToastProvider, withToastManager } from 'react-toast-notifications';
import theme from '../theme';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

const transitionStates = {
  entering: { transform: 'translate3d(120%, 0, 0)' },
  entered: { transform: 'translate3d(0,0,0)' },
  exiting: { transform: 'scale(0.66)', opacity: 0 },
  exited: { transform: 'scale(0.66)', opacity: 0 },
};

const colors = {
  info: {
    border: `1px solid ${theme.blue800}`,
    'background-color': theme.blue100,
    color: theme.blue800,
  },
  success: {
    border: `1px solid ${theme.green600}`,
    'background-color': theme.green500,
    color: '#fff',
  },
  warning: {
    border: `1px solid ${theme.yellow800}`,
    'background-color': theme.yellow100,
    color: theme.yellow800,
  },
  error: {
    border: `1px solid ${theme.red800}`,
    'background-color': theme.red100,
    color: theme.red800,
  },
};

const titleColors = {
  info: {
    color: theme.blue800,
  },
  success: {
    color: '#fff',
  },
  warning: {
    color: theme.yellow800,
  },
  error: {
    color: theme.red800,
  },
};

const StyledToast = styled.div`
  border-radius: 4px;
  margin-bottom: 8px;
  min-width: 288px;
  max-width: 568px;
  padding: 14px;
  pointer-events: initial;
  transition-property: transform;
  transition-duration: ${props => props.transitionDuration}ms;
  transition-timing-function: cubic-bezier(0.2, 0, 0, 1);
  transform-origin: bottom;
  z-index: 2;
  transition: transform ${props => props.transitionDuration}ms cubic-bezier(0.2, 0, 0, 1),
    opacity ${props => props.transitionDuration}ms;
  ${props => ({ ...colors[props.appearance] })};
  ${props => ({ ...transitionStates[props.transitionState] })};
`;

const IconClose = styled(Icon).attrs({
  icon: Icon.CLOSE,
})`
  .primary {
    fill: ${props => props.theme.neutral600};
    transition: fill 0.2s ease;
  }

  &:hover {
    .primary {
      fill: ${props => props.theme.neutral800};
    }
  }
`;

const StyledButton = styled(Button)`
  position: absolute;
  top: 4px;
  right: 4px;
`;

const Title = styled.h4`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 4px;
  ${props => ({ ...titleColors[props.appearance] })};
`;

const Message = styled.p`
  font-size: 16px;
`;

export const Toast = ({ appearance, children, transitionDuration, transitionState, onDismiss }) => {
  const title = typeof children === 'string' ? null : children.title;
  const message = typeof children === 'string' ? children : children.message;
  return (
    <StyledToast
      appearance={appearance}
      transitionDuration={transitionDuration}
      transitionState={transitionState}
    >
      {title && <Title>{title}</Title>}
      {message && <Message>{message}</Message>}
      <StyledButton appearance="link" onClick={onDismiss} iconAfter={<IconClose />} />
    </StyledToast>
  );
};

Toast.propTypes = {
  appearance: PropTypes.oneOf(['info', 'warning', 'success', 'error']).isRequired,
  children: PropTypes.node.isRequired,
  transitionDuration: PropTypes.number.isRequired,
  transitionState: PropTypes.oneOf(['entering', 'entered', 'exiting', 'exited']).isRequired,
  onDismiss: PropTypes.func.isRequired,
};

export default class Toaster extends Component {
  static defaultOptions = {
    placement: 'bottom-right',
    autoDismiss: true,
    autoDismissTimeout: 5000,
    pauseOnHover: false,
  };

  static success(...args) {
    Toaster._instance._success(args);
  }

  static error(notification) {
    Toaster._instance._error(notification);
  }

  static warning(notification) {
    Toaster._instance._warning(notification);
  }

  static info(notification) {
    Toaster._instance._info(notification);
  }

  static parseNotification(...args) {
    let content = {};
    let options = { ...Toaster.defaultOptions };
    if (args.length === 0) {
      throw new Error('Notifications cannot be empty');
    }
    if (args.length > 0) {
      content = { ...args[0] };
    }
    if (args.length === 2) {
      options = { ...options, ...args[1] };
    }
    return {
      content,
      options,
    };
  }

  constructor(props) {
    super(props);
    if (!Toaster._instance) {
      Toaster._instance = this;
    }
  }

  _success = args => {
    const { toastManager } = this.props;
    const { content, options } = Toaster.parseNotification(...args);
    toastManager.add(content, {
      ...options,
      appearance: 'success',
    });
  };

  _error = notification => {
    const { toastManager } = this.props;
    toastManager.add(notification, {
      appearance: 'error',
    });
  };

  _warning = notification => {
    const { toastManager } = this.props;
    toastManager.add(notification, {
      appearance: 'warning',
    });
  };

  _info = notification => {
    const { toastManager } = this.props;
    toastManager.add(notification, {
      appearance: 'info',
    });
  };

  render() {
    return null;
  }
}

Toaster.propTypes = {
  toastManager: PropTypes.func.isRequired,
};

export const WithToasts = ({ children }) => {
  const EnhancedToaster = withToastManager(Toaster);
  return (
    <ToastProvider placement="bottom-right" components={{ Toast }}>
      <>
        {children}
        <EnhancedToaster />
      </>
    </ToastProvider>
  );
};

WithToasts.propTypes = {
  children: PropTypes.node.isRequired,
};
