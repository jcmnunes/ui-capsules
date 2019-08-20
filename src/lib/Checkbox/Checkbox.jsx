import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../theme';

const colors = {
  primary: {
    background: theme.blue500,
    backgroundDisabled: theme.blueDisabled,
  },
  success: {
    background: theme.green500,
    backgroundDisabled: theme.greenDisabled,
  },
  neutral: {
    background: theme.neutral300,
    backgroundDisabled: theme.neutral100,
  },
};

const dimensions = {
  small: {
    width: '16px',
    height: '16px',
    checkmarkWidth: '5px',
    checkmarkHeight: '9px',
    checkmarkTop: '2px',
    checkmarkLeft: '5px',
    checkmarkBorderWidth: '0 2px 2px 0',
    fontSize: '16px',
    padding: '22px',
  },
  medium: {
    width: '20px',
    height: '20px',
    checkmarkWidth: '7px',
    checkmarkHeight: '12px',
    checkmarkTop: '2px',
    checkmarkLeft: '6px',
    checkmarkBorderWidth: '0 3px 3px 0',
    fontSize: '18px',
    padding: '28px',
  },
  large: {
    width: '25px',
    height: '25px',
    checkmarkWidth: '8px',
    checkmarkHeight: '13px',
    checkmarkTop: '4px',
    checkmarkLeft: '8px',
    checkmarkBorderWidth: '0 3px 3px 0',
    fontSize: '20px',
    padding: '35px',
  },
};

const CustomCheckbox = styled.span`
  position: absolute;
  border-radius: 4px;
  top: 0;
  left: 0;
  width: ${props => dimensions[props.size].width};
  height: ${props => dimensions[props.size].height};
  background-color: ${props => (props.isDisabled ? theme.neutral050 : '#fff')};
  transition: background-color 0.2s ease;
  border: 1px solid ${props => (props.isDisabled ? theme.neutral075 : theme.neutral100)};

  &:after {
    content: '';
    position: absolute;
    display: none;
    left: ${props => dimensions[props.size].checkmarkLeft};
    top: ${props => dimensions[props.size].checkmarkTop};
    width: ${props => dimensions[props.size].checkmarkWidth};
    height: ${props => dimensions[props.size].checkmarkHeight};
    border: solid white;
    border-width: ${props => dimensions[props.size].checkmarkBorderWidth};
    transform: rotate(45deg);
  }

  &:hover {
    background-color: ${theme.neutral050};
  }
`;

const Label = styled.label`
  display: inline-flex;
  height: ${props => dimensions[props.size].height};
  align-items: center;
  position: relative;
  padding-left: ${props => dimensions[props.size].padding};
  cursor: ${props => (props.isDisabled ? 'not-allowed' : 'pointer')};
  font-size: ${props => dimensions[props.size].fontSize};
  user-select: none;
  color: ${props => (props.isDisabled ? theme.neutral300 : 'inherit')};
`;

const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:focus {
    & ~ ${CustomCheckbox} {
      outline: none;
      box-shadow: 0 0 0 2px ${theme.blue100};
    }
  }

  &:checked {
    & ~ ${CustomCheckbox} {
      background-color: ${props => colors[props.appearance].background};
      border-color: ${props => colors[props.appearance].background};

      &:after {
        display: block;
      }
    }

    &:disabled {
      & ~ ${CustomCheckbox} {
        background-color: ${props => colors[props.appearance].backgroundDisabled};
        border-color: ${props => colors[props.appearance].backgroundDisabled};
      }
    }
  }
`;

const Checkbox = ({
  checked,
  isDisabled,
  onChange,
  children,
  appearance,
  size,
  onClick,
  ...other
}) => (
  <Label onClick={onClick} size={size} isDisabled={isDisabled} data-testid="label" {...other}>
    {children}
    <StyledInput
      type="checkbox"
      checked={checked}
      onChange={onChange}
      appearance={appearance}
      disabled={isDisabled}
    />
    <CustomCheckbox size={size} isDisabled={isDisabled} />
  </Label>
);
Checkbox.displayName = 'Checkbox';

Checkbox.defaultProps = {
  children: null,
  appearance: 'neutral',
  onClick: null,
  size: 'small',
  isDisabled: false,
};

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node,
  appearance: PropTypes.oneOf(['primary', 'success', 'neutral']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClick: PropTypes.func,
};

export default Checkbox;
