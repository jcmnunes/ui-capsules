import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const dimensions = {
  small: {
    height: '24px',
    fontSize: '14px',
    padding: '4px 4px',
  },
  medium: {
    height: '32px',
    fontSize: '16px',
    padding: '4px 4px',
  },
  large: {
    height: '48px',
    fontSize: '18px',
    padding: '12px 8px',
  },
};

const StyledInput = styled.input`
  height: ${props => dimensions[props.size].height};
  background: #fff;
  color: ${props => props.theme.neutral600};
  border-radius: 4px;
  border: 1px solid ${props => props.theme.neutral200};
  font-size: ${props => dimensions[props.size].fontSize};
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  padding: ${props => dimensions[props.size].padding};
  width: ${props => (props.isBlock ? '100%' : 'auto')};

  &::placeholder {
    color: ${props => props.theme.neutral200};
  }

  &:hover {
    border-color: ${props => props.theme.neutral300};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${props => props.theme.blue100};
  }

  &:disabled {
    color: ${props => props.theme.neutral200};
    background: ${props => props.theme.neutral050};
    cursor: not-allowed;
    border-color: ${props => props.theme.neutral200};
  }
`;

const Input = ({ size, isDisabled, isBlock, ...other }) => (
  <StyledInput size={size} disabled={isDisabled} isBlock={isBlock} {...other} />
);

Input.defaultProps = {
  size: 'medium',
  isDisabled: false,
  isBlock: false,
};

Input.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  isDisabled: PropTypes.bool,
  isBlock: PropTypes.bool,
};

export default Input;
