import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Spinner from '../Spinner/Spinner';
import theme from '../theme';

const getButtonColors = props => {
  const colors = {
    text: props.disabled ? '#CAD2D9' : theme.neutral600,
    gradient: {
      top: theme.neutral100,
      topHover: '#D7DBE0',
      bottom: theme.neutral100,
      bottomHover: '#D7DBE0',
    },
    active: theme.neutral200,
    disabled: '#F5F7FA',
  };
  switch (props.intent) {
    case 'primary':
      colors.text = '#FFF';
      colors.gradient.top = theme.blue500;
      colors.gradient.topHover = theme.blue600;
      colors.gradient.bottom = theme.blue600;
      colors.gradient.bottomHover = theme.blue700;
      colors.active = theme.blue700;
      colors.disabled = '#A8D1EB';
      break;
    case 'error':
      colors.text = '#FFF';
      colors.gradient.top = theme.red500;
      colors.gradient.topHover = theme.red600;
      colors.gradient.bottom = theme.red600;
      colors.gradient.bottomHover = theme.red700;
      colors.active = theme.red700;
      colors.disabled = '#FFBCC2';
      break;
    case 'warning':
      colors.text = '#FFF';
      colors.gradient.top = theme.yellow600;
      colors.gradient.topHover = theme.yellow700;
      colors.gradient.bottom = theme.yellow700;
      colors.gradient.bottomHover = theme.yellow800;
      colors.active = theme.yellow800;
      colors.disabled = '#F4D2B5';
      break;
    case 'success':
      colors.text = '#FFF';
      colors.gradient.top = theme.green500;
      colors.gradient.topHover = theme.green600;
      colors.gradient.bottom = theme.green600;
      colors.gradient.bottomHover = theme.green700;
      colors.active = theme.green700;
      colors.disabled = '#AFE1D5';
      break;
    case 'dropdown':
      colors.gradient.top = 'none';
      colors.gradient.topHover = theme.neutral050;
      colors.gradient.bottom = 'none';
      colors.gradient.bottomHover = theme.neutral050;
      colors.active = theme.neutral100;
      colors.disabled = 'none';
      break;
    default:
      break;
  }
  return colors;
};

const getDimensions = props => {
  const dimensions = {
    height: '22px',
    fontSize: '14px',
    padding: '0 4px',
    spinnerHeight: '16px',
  };

  switch (props.size) {
    case 'medium':
      dimensions.height = '32px';
      dimensions.fontSize = '16px';
      dimensions.padding = '4px 12px';
      dimensions.spinnerHeight = '18px';
      break;
    case 'large':
      dimensions.height = '48px';
      dimensions.fontSize = '18px';
      dimensions.padding = '12px 16px';
      dimensions.spinnerHeight = '24px';
      break;
    default:
      break;
  }
  return dimensions;
};

const StyledButton = styled.button`
  position: relative;
  height: ${props => getDimensions(props).height};
  color: ${props => getButtonColors(props).text};
  border-radius: 4px;
  border: none;
  font-size: ${props => getDimensions(props).fontSize};
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  padding: ${props => getDimensions(props).padding};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: ${props => (props.intent === 'dropdown' ? 'flex-start' : 'center')};
  width: ${props => (props.block ? '100%' : 'auto')};
  background: ${props => `linear-gradient(to bottom,
    ${getButtonColors(props).gradient.top},
    ${getButtonColors(props).gradient.bottom}
  )`};

  &::placeholder {
    color: ${props => theme.neutral300};
  }

  &:focus {
    outline: none;
    box-shadow: ${props =>
      props.intent === 'dropdown' ? 'none' : `0 0 0 4px ${theme.blue100}`};
  }

  &:hover {
    background: ${props => `linear-gradient(to bottom,
      ${getButtonColors(props).gradient.topHover},
      ${getButtonColors(props).gradient.bottomHover}
    )`};
  }

  &:active {
    background: ${props => getButtonColors(props).active};
  }

  &:disabled {
    background: ${props => getButtonColors(props).disabled};
    cursor: not-allowed;
  }

  .content {
    visibility: ${props => (props.isLoading ? 'hidden' : 'visible')};
    display: flex;
    align-items: center;

    .button-text {
      white-space: nowrap;
      margin-left: ${props => (props.iconBefore ? '8px' : 'auto')};
      margin-right: ${props => (props.iconAfter ? '8px' : 'auto')};
    }
  }

  .spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: ${props => getDimensions(props).spinnerHeight};
  }
`;

const Button = ({
  isLoading,
  disabled,
  iconBefore,
  iconAfter,
  intent,
  size,
  onClick,
  children,
  ...other
}) => {
  const handleClick = e => {
    e.stopPropagation();
    if (!onClick) return;
    onClick();
  };

  const handleKeyDown = e => {
    if (!onClick) return;
    if (e.key === 'Enter') {
      onClick();
    }
  };
  return (
    <StyledButton
      disabled={disabled || isLoading}
      isLoading={isLoading}
      intent={intent}
      size={size}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      iconBefore={iconBefore}
      iconAfter={iconAfter}
      {...other}
    >
      {isLoading && (
        <span className="spinner">
          <Spinner size={size} intent={intent} />
        </span>
      )}
      <div className="content">
        {iconBefore && iconBefore}
        {children.length > 0 && <span className="button-text">{children}</span>}
        {iconAfter && iconAfter}
      </div>
    </StyledButton>
  );
};

Button.defaultProps = {
  isLoading: false,
  disabled: false,
  iconBefore: null,
  iconAfter: null,
  intent: 'secondary',
  size: 'medium',
  type: 'button',
  block: false,
  children: '',
  onClick: null,
};

Button.propTypes = {
  intent: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'error', 'dropdown']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  iconBefore: PropTypes.element,
  iconAfter: PropTypes.element,
  type: PropTypes.string,
  block: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
