import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ToastProvider, withToastManager } from 'react-toast-notifications';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { theme } from '../theme';

function getTranslate(placement) {
  const pos = placement.split('-');
  const relevantPlacement = pos[1] === 'center' ? pos[0] : pos[1];
  const translateMap = {
    right: 'translate3d(120%, 0, 0)',
    left: 'translate3d(-120%, 0, 0)',
    bottom: 'translate3d(0, 120%, 0)',
    top: 'translate3d(0, -120%, 0)',
  };

  return translateMap[relevantPlacement];
}

const transitionStates = placement => ({
  entering: { transform: getTranslate(placement) },
  entered: { transform: 'translate3d(0,0,0)' },
  exiting: { transform: 'scale(0.66)', opacity: 0 },
  exited: { transform: 'scale(0.66)', opacity: 0 },
});

const colors = {
  error: {
    background: theme.red500,
    border: theme.red500,
    ring: theme.red100,
    ringBorder: theme.red500,
    text: '#fff',
    accentBorder: theme.red500,
    icon: theme.red500,
  },
  success: {
    background: theme.green500,
    border: theme.green500,
    ring: theme.green100,
    ringBorder: theme.green500,
    text: '#fff',
    accentBorder: theme.green500,
    icon: theme.green500,
  },
  warning: {
    background: theme.yellow100,
    border: theme.yellow300,
    ring: theme.yellow500,
    ringBorder: theme.yellow500,
    text: theme.yellow700,
    accentBorder: theme.yellow500,
  },
  info: {
    background: theme.blue100,
    border: theme.blue300,
    ring: theme.blue300,
    ringBorder: theme.blue300,
    text: theme.blue700,
    accentBorder: theme.blue300,
  },
};

const icons = {
  info: 'INFO',
  success: 'CHECK_SM',
  warning: 'EXCLAMATION',
  error: 'EXCLAMATION',
};

const StyledToast = styled.div`
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.175);
  border-radius: 4px;
  margin-bottom: 8px;
  min-width: 288px;
  max-width: 568px;
  padding: 14px 24px 14px 14px;
  pointer-events: initial;
  transition-property: transform;
  transition-duration: ${props => props.transitionDuration}ms;
  transition-timing-function: cubic-bezier(0.2, 0, 0, 1);
  transform-origin: bottom;
  z-index: 2;
  transition: transform ${props => props.transitionDuration}ms cubic-bezier(0.2, 0, 0, 1),
    opacity ${props => props.transitionDuration}ms;
  background: ${props => colors[props.appearance].background};
  border: 1px solid ${props => colors[props.appearance].border};
  display: flex;
  flex-direction: row;
  overflow: hidden;
  color: ${props => colors[props.appearance].text};
  ${props => ({ ...transitionStates(props.placement)[props.transitionState] })};

  &::after {
    content: '';
    position: absolute;
    width: 10px;
    background: ${props => colors[props.appearance].accentBorder};
    top: 0;
    left: 0;
    bottom: 0;
  }
`;

const StyledButton = styled(Button)`
  position: absolute;
  top: 4px;
  right: 4px;
  color: inherit;
`;

const IconContainer = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${props => colors[props.appearance].ring};
  position: relative;
  margin: 0 10px 0 6px;

  &::after {
    content: '';
    background: white;
    border: 1px solid ${props => colors[props.appearance].ringBorder};
    border-radius: 50%;
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    color: ${props => colors[props.appearance].icon};
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h4`
  font-size: 16px;
  font-weight: 700;
  color: ${props => colors[props.appearance].text};
`;

const Message = styled.p`
  font-size: 16px;
  color: ${props => colors[props.appearance].text};
`;

export const Toast = ({
  appearance,
  children,
  placement,
  transitionDuration,
  transitionState,
  onDismiss,
}) => {
  const title = typeof children === 'string' ? null : children.title;
  const message = typeof children === 'string' ? children : children.message;
  return (
    <StyledToast
      appearance={appearance}
      transitionDuration={transitionDuration}
      transitionState={transitionState}
      placement={placement}
    >
      <IconContainer appearance={appearance}>
        <Icon icon={icons[appearance]} size="32px" />
      </IconContainer>
      <Wrapper>
        {title && <Title appearance={appearance}>{title}</Title>}
        {message && <Message appearance={appearance}>{message}</Message>}
      </Wrapper>
      <StyledButton
        appearance="none"
        isSuccess={appearance === 'success'}
        size="small"
        onClick={onDismiss}
        iconAfter="CROSS"
      />
    </StyledToast>
  );
};

Toast.propTypes = {
  appearance: PropTypes.oneOf(['info', 'warning', 'success', 'error']).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      title: PropTypes.string,
      message: PropTypes.string,
    }),
    PropTypes.element,
  ]).isRequired,
  transitionDuration: PropTypes.number.isRequired,
  transitionState: PropTypes.oneOf(['entering', 'entered', 'exiting', 'exited']).isRequired,
  placement: PropTypes.oneOf([
    'bottom-left',
    'bottom-center',
    'bottom-right',
    'top-left',
    'top-center',
    'top-right',
  ]).isRequired,
  onDismiss: PropTypes.func.isRequired,
};

export class Toaster extends Component {
  // eslint-disable-next-line react/sort-comp
  static defaultOptions = {
    placement: 'bottom-right',
    autoDismiss: true,
    autoDismissTimeout: 4000,
    pauseOnHover: false,
  };

  static success(...args) {
    Toaster._instance._success(args);
  }

  static error(...args) {
    Toaster._instance._error(args);
  }

  static warning(...args) {
    Toaster._instance._warning(args);
  }

  static info(...args) {
    Toaster._instance._info(args);
  }

  static getToasts() {
    return Toaster._instance._getToasts();
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

  _error = args => {
    const { toastManager } = this.props;
    const { content, options } = Toaster.parseNotification(...args);
    toastManager.add(content, {
      ...options,
      appearance: 'error',
    });
  };

  _warning = args => {
    const { toastManager } = this.props;
    const { content, options } = Toaster.parseNotification(...args);
    toastManager.add(content, {
      ...options,
      appearance: 'warning',
    });
  };

  _info = args => {
    const { toastManager } = this.props;
    const { content, options } = Toaster.parseNotification(...args);
    toastManager.add(content, {
      ...options,
      appearance: 'info',
    });
  };

  _getToasts = () => {
    const {
      toastManager: { toasts },
    } = this.props;
    return toasts;
  };

  render() {
    return null;
  }
}

Toaster.propTypes = {
  toastManager: PropTypes.shape({
    add: PropTypes.func,
    remove: PropTypes.func,
    toasts: PropTypes.array,
  }).isRequired,
};

export const WithToasts = ({ children }) => {
  const EnhancedToaster = withToastManager(Toaster);

  return (
    <ToastProvider components={{ Toast }} placement="bottom-right">
      {children}
      <EnhancedToaster />
    </ToastProvider>
  );
};

WithToasts.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      title: PropTypes.string,
      message: PropTypes.string,
    }),
    PropTypes.element,
  ]).isRequired,
};
