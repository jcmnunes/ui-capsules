import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Spinner from '../Spinner/Spinner';
import Icon20 from '../Icon20/Icon20';
import theme from '../theme';

const getButtonColors = props => {
  const colors = {
    text: '',
    gradient: {},
    active: '',
    disabled: '',
  };
  switch (props.appearance) {
    case 'primary':
      colors.text = '#FFF';
      colors.gradient.top = theme.blue500;
      colors.gradient.topHover = theme.blue600;
      colors.gradient.bottom = theme.blue600;
      colors.gradient.bottomHover = theme.blue700;
      colors.active = theme.blue700;
      colors.disabled = '#A8D1EB';
      break;
    case 'secondary': {
      colors.text = props.disabled ? '#CAD2D9' : theme.neutral600;
      colors.gradient.top = theme.neutral100;
      colors.gradient.topHover = '#D7DBE0';
      colors.gradient.bottom = theme.neutral100;
      colors.gradient.bottomHover = '#D7DBE0';
      colors.active = theme.neutral200;
      colors.disabled = '#F5F7FA';
      break;
    }
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
      colors.text = props.disabled ? '#CAD2D9' : theme.neutral600;
      colors.gradient.top = 'none';
      colors.gradient.topHover = theme.neutral075;
      colors.gradient.bottom = 'none';
      colors.gradient.bottomHover = theme.neutral075;
      colors.active = theme.neutral100;
      colors.disabled = 'none';
      break;
    case 'minimal':
      colors.text = 'inherit';
      colors.gradient.top = 'none';
      colors.gradient.topHover = 'none';
      colors.gradient.bottom = 'none';
      colors.gradient.bottomHover = 'none';
      colors.active = 'none';
      colors.disabled = 'none';
      break;
    case 'link':
      colors.gradient.top = 'none';
      colors.gradient.topHover = 'none';
      colors.gradient.bottom = 'none';
      colors.gradient.bottomHover = 'none';
      colors.active = 'none';
      colors.disabled = 'none';
      colors.text = props.color;
      break;
    default:
      throw new Error(
        `The appearance value "${props.appearance}" is not allowed. It must be one of: 'primary', 'secondary', 'success', 'warning', 'error', 'dropdown', 'link',`,
      );
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

  if (props.appearance === 'link') {
    return {
      ...dimensions,
      height: 'auto',
      padding: 0,
      fontSize: 'inherit',
    };
  }

  switch (props.size) {
    case 'medium':
      dimensions.height = '32px';
      dimensions.fontSize = '16px';
      dimensions.padding = '4px 6px';
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

export const SpinnerWrapper = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: ${props => getDimensions(props).spinnerHeight};
`;

export const Content = styled.div`
  visibility: ${props => (props.isLoading ? 'hidden' : 'visible')};
  display: inline-flex;
  align-items: center;
`;

export const Text = styled.span`
  white-space: nowrap;
  margin-left: ${props => (props.iconBefore ? '8px' : 'auto')};
  margin-right: ${props => (props.iconAfter ? '8px' : 'auto')};
`;

const StyledButton = styled.span`
  position: relative;
  height: ${props => getDimensions(props).height};
  color: ${props => getButtonColors(props).text};
  border-radius: 4px;
  border: none;
  font-size: ${props => getDimensions(props).fontSize};
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  padding: ${props => getDimensions(props).padding};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: ${props => (props.appearance === 'dropdown' ? 'flex-start' : 'center')};
  width: ${props => (props.isBlock ? '100%' : 'auto')};
  background: ${props =>
    props.highlighted
      ? `linear-gradient(to bottom,
    ${getButtonColors(props).gradient.topHover},
    ${getButtonColors(props).gradient.bottomHover}
  )`
      : `linear-gradient(to bottom,
    ${getButtonColors(props).gradient.top},
    ${getButtonColors(props).gradient.bottom}
  )`};

  &::placeholder {
    color: ${theme.neutral300};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px ${theme.blue100}};
  }

  &:hover {
    background: ${props => `linear-gradient(to bottom,
      ${getButtonColors(props).gradient.topHover},
      ${getButtonColors(props).gradient.bottomHover}
    )`};
    text-decoration: ${props => (props.appearance === 'link' ? 'underline' : 'none')};
  }

  &:active {
    background: ${props => getButtonColors(props).active};
  }

  &:disabled {
    background: ${props => getButtonColors(props).disabled};
    cursor: not-allowed;
  }
`;

const Anchor = styled.a`
  color: ${props => props.color};
  cursor: pointer;

  &:hover {
    box-shadow: inset 0 -2px 0 0 ${props => props.color};
  }
`;

const Button = ({
  as,
  color,
  type,
  isLoading,
  isBlock,
  isDisabled,
  iconBefore,
  iconAfter,
  appearance,
  size,
  onClick,
  children,
  handleAction,
  ...other
}) => {
  const handleClick = e => {
    e.stopPropagation();
    if (!onClick) return;
    onClick(e);
  };

  if (appearance === 'link') {
    return (
      <Anchor color={color} {...other}>
        {children}
      </Anchor>
    );
  }

  return (
    <StyledButton
      as={as}
      color={color}
      disabled={isDisabled || isLoading}
      isLoading={isLoading}
      isBlock={isBlock}
      appearance={appearance}
      size={size}
      onClick={handleClick}
      iconBefore={iconBefore}
      iconAfter={iconAfter}
      handleAction={handleAction}
      {...other}
    >
      {isLoading && (
        <SpinnerWrapper size={size}>
          <Spinner size={size} appearance={appearance} />
        </SpinnerWrapper>
      )}
      <Content isLoading={isLoading}>
        {iconBefore && <Icon20 icon={iconBefore} />}
        {children.length > 0 && (
          <Text iconBefore={iconBefore} iconAfter={iconAfter}>
            {children}
          </Text>
        )}
        {iconAfter && <Icon20 icon={iconAfter} />}
      </Content>
    </StyledButton>
  );
};
Button.displayName = 'Button';

Button.defaultProps = {
  isLoading: false,
  isDisabled: false,
  iconBefore: null,
  iconAfter: null,
  size: 'medium',
  type: 'button',
  isBlock: false,
  children: '',
  onClick: null,
  handleAction: null,
  as: 'button',
  color: theme.blue600,
};

Button.propTypes = {
  appearance: PropTypes.oneOf([
    'dropdown',
    'error',
    'link',
    'primary',
    'secondary',
    'success',
    'warning',
    'minimal',
  ]).isRequired,
  as: PropTypes.oneOf(['a', 'button']),
  children: PropTypes.node,
  color: PropTypes.string,
  iconAfter: PropTypes.string,
  iconBefore: PropTypes.string,
  isBlock: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  handleAction: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.string,
};

export default Button;
