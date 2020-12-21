import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { ToastProvider as RTNToastProvider, withToastManager } from 'react-toast-notifications';
import { Icon } from '../Icon/Icon';
import { theme } from '../theme';
import { CloseButton } from '../CloseButton/CloseButton';

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
    background: theme.colors.error['500'],
    border: theme.colors.error['500'],
    ring: theme.colors.error['100'],
    ringBorder: theme.colors.error['500'],
    text: '#fff',
    accentBorder: theme.colors.error['500'],
    icon: theme.colors.error['500'],
  },
  success: {
    background: theme.colors.success['500'],
    border: theme.colors.success['500'],
    ring: theme.colors.success['100'],
    ringBorder: theme.colors.success['500'],
    text: '#fff',
    accentBorder: theme.colors.success['500'],
    icon: theme.colors.success['500'],
  },
  warning: {
    background: theme.colors.warning['100'],
    border: theme.colors.warning['300'],
    ring: theme.colors.warning['500'],
    ringBorder: theme.colors.warning['500'],
    text: theme.colors.warning['700'],
    accentBorder: theme.colors.warning['500'],
  },
  info: {
    background: theme.colors.info['100'],
    border: theme.colors.info['300'],
    ring: theme.colors.info['300'],
    ringBorder: theme.colors.info['300'],
    text: theme.colors.info['700'],
    accentBorder: theme.colors.info['300'],
  },
};

const icons = {
  info: 'info',
  success: 'check_sm',
  warning: 'exclamation',
  error: 'exclamation',
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

const StyledButton = styled(CloseButton)`
  position: absolute !important;
  top: 4px;
  right: 4px;
  color: inherit !important;
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
  font-size: 14px;
  font-weight: 600;
  color: ${props => colors[props.appearance].text};
`;

const Message = styled.p`
  font-size: 14px;
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
        <Icon icon={icons[appearance]} size={32} />
      </IconContainer>

      <Wrapper>
        {title && <Title appearance={appearance}>{title}</Title>}
        {message && <Message appearance={appearance}>{message}</Message>}
      </Wrapper>

      <StyledButton size="small" onClick={onDismiss} />
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

export const ToastProvider = ({ children }) => {
  const EnhancedToaster = withToastManager(Toaster);

  return (
    <RTNToastProvider components={{ Toast }} placement="bottom-right">
      {children}
      <EnhancedToaster />
    </RTNToastProvider>
  );
};

ToastProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      title: PropTypes.string,
      message: PropTypes.string,
    }),
    PropTypes.element,
  ]).isRequired,
};
