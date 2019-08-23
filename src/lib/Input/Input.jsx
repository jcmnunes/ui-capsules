import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../theme';

const dimensions = {
  small: {
    fontSize: '14px',
    helperFontSize: '12px',
    height: '24px',
    padding: '2px 4px',
  },
  medium: {
    fontSize: '16px',
    helperFontSize: '14px',
    height: '32px',
    padding: '4px 8px',
  },
  large: {
    fontSize: '18px',
    helperFontSize: '16px',
    height: '48px',
    padding: '12px',
  },
};

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const StyledInput = styled.input`
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  height: ${props => dimensions[props.size].height};
  background: ${props => (props.error ? theme.red050 : '#fff')};
  color: ${theme.neutral600};
  border-radius: 4px;
  border: 1px solid ${props => (props.error ? theme.red500 : theme.neutral200)};
  font-size: ${props => dimensions[props.size].fontSize};
  padding: ${props => dimensions[props.size].padding};
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

const Input = ({ size, error, isDisabled, ...other }) => (
  <InputWrapper>
    <StyledInput size={size} disabled={isDisabled} error={error} {...other} />
    {error && <Error size={size}>{error}</Error>}
  </InputWrapper>
);
Input.displayName = 'Input';

Input.defaultProps = {
  size: 'medium',
  isDisabled: false,
  error: null,
};

Input.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  isDisabled: PropTypes.bool,
  error: PropTypes.string,
};

export default Input;
