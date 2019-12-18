import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon16 from '../Icon16/Icon16';
import Icon20 from '../Icon20/Icon20';
import theme from '../theme';

const dimensions = {
  small: {
    fontSize: '14px',
    helperFontSize: '12px',
    height: '24px',
    heightWithError: '44px',
  },
  medium: {
    fontSize: '16px',
    helperFontSize: '14px',
    height: '32px',
    heightWithError: '52px',
  },
  large: {
    fontSize: '18px',
    helperFontSize: '16px',
    height: '48px',
    heightWithError: '68px',
  },
};

const getPadding = (size, hasIconBefore, hasIconAfter) => {
  switch (size) {
    case 'small':
      return `2px ${hasIconAfter ? '26px' : '4px'} 2px ${hasIconBefore ? '26px' : '4px'}`;
    case 'medium':
      return `4px ${hasIconAfter ? '34px' : '8px'} 4px ${hasIconBefore ? '34px' : '8px'}`;
    case 'large':
      return `12px ${hasIconAfter ? '46px' : '12px'} 12px ${hasIconBefore ? '46px' : '12px'}`;
    default:
      return '2px 4px';
  }
};

const getIconPosition = size => {
  switch (size) {
    case 'small':
      return {
        top: '2px',
        side: '6px',
      };
    case 'medium':
      return {
        top: '6px',
        side: '8px',
      };
    case 'large':
      return {
        top: '14px',
        side: '14px',
      };
    default:
      return {
        top: '4px',
        side: '8px',
      };
  }
};

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: ${props =>
    props.error ? dimensions[props.size].heightWithError : dimensions[props.size].height};
  position: relative;
`;

const IconBeforeWrapper = styled.div`
  position: absolute;
  top: ${props => getIconPosition(props.size).top};
  left: ${props => getIconPosition(props.size).side};
  z-index: 3;
  color: ${props => props.theme.neutral500};
`;

const IconAfterWrapper = styled.div`
  position: absolute;
  top: ${props => getIconPosition(props.size).top};
  right: ${props => getIconPosition(props.size).side};
  z-index: 3;
  color: ${props => props.theme.neutral500};
`;

const StyledInput = styled.input`
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  height: ${props => dimensions[props.size].height};
  background: ${props => (props.error ? '#fffafa' : '#fff')};
  color: ${theme.neutral600};
  border-radius: 4px;
  border: 1px solid ${props => (props.error ? theme.red500 : theme.neutral200)};
  font-size: ${props => dimensions[props.size].fontSize};
  padding: ${props => getPadding(props.size, !!props.iconBefore, !!props.iconAfter)};
  width: 100%;

  &::placeholder {
    color: ${theme.neutral200};
  }

  &:hover {
    border-color: ${props => (props.error ? theme.red700 : theme.neutral300)};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${props => (props.error ? theme.red100 : theme.blue100)};
    border: 1px solid ${props => (props.error ? theme.red400 : theme.blue400)};
  }

  &:disabled {
    color: ${theme.neutral200};
    background: ${theme.neutral050};
    cursor: not-allowed;
    border-color: ${theme.neutral200};
  }
`;

const Error = styled.div`
  font-size: ${props => dimensions[props.size].helperFontSize};
  color: ${theme.red600};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 2px 4px;
  line-height: 16px;
`;

const Input = ({ size, error, isDisabled, iconBefore, iconAfter, ...other }) => (
  <InputWrapper size={size} error={error}>
    {iconBefore && (
      <IconBeforeWrapper size={size}>
        {size === 'small' ? <Icon16 icon={iconBefore} /> : <Icon20 icon={iconBefore} />}
      </IconBeforeWrapper>
    )}
    <StyledInput
      size={size}
      disabled={isDisabled}
      error={error}
      iconBefore={iconBefore}
      iconAfter={iconAfter}
      {...other}
    />
    {iconAfter && (
      <IconAfterWrapper size={size}>
        {size === 'small' ? <Icon16 icon={iconAfter} /> : <Icon20 icon={iconAfter} />}
      </IconAfterWrapper>
    )}
    {error && <Error size={size}>{error}</Error>}
  </InputWrapper>
);
Input.displayName = 'Input';

Input.defaultProps = {
  size: 'medium',
  isDisabled: false,
  error: null,
  iconBefore: null,
  iconAfter: null,
};

Input.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  isDisabled: PropTypes.bool,
  error: PropTypes.string,
  iconBefore: PropTypes.string,
  iconAfter: PropTypes.string,
};

export default Input;
