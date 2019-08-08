import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const colors = theme => ({
  primary: {
    background: theme.blue500,
  },
  success: {
    background: theme.green500,
  },
  neutral: {
    background: theme.neutral300,
  },
});

const dimensions = {
  small: {
    width: '20px',
    height: '20px',
    checkmarkWidth: '7px',
    checkmarkHeight: '12px',
    checkmarkTop: '2px',
    checkmarkLeft: '6px',
    checkmarkBorderWidth: '0 3px 3px 0',
    fontSize: '16px',
    padding: '28px',
  },
  medium: {
    width: '25px',
    height: '25px',
    checkmarkWidth: '8px',
    checkmarkHeight: '13px',
    checkmarkTop: '4px',
    checkmarkLeft: '8px',
    checkmarkBorderWidth: '0 3px 3px 0',
    fontSize: '18px',
    padding: '35px',
  },
  large: {
    width: '30px',
    height: '30px',
    checkmarkWidth: '10px',
    checkmarkHeight: '18px',
    checkmarkTop: '3px',
    checkmarkLeft: '9px',
    checkmarkBorderWidth: '0 4px 4px 0',
    fontSize: '20px',
    padding: '44px',
  },
};

const CustomCheckbox = styled.span`
  position: absolute;
  border-radius: 4px;
  top: 0;
  left: 0;
  width: ${props => dimensions[props.size].width};
  height: ${props => dimensions[props.size].height};
  background-color: #fff;
  transition: background-color 0.2s ease;
  border: 1px solid ${props => props.theme.neutral100};

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
    background-color: ${props => props.theme.neutral050};
  }
`;

const Label = styled.label`
  display: inline-flex;
  height: ${props => dimensions[props.size].height};
  align-items: center;
  position: relative;
  padding-left: ${props => dimensions[props.size].padding};
  cursor: pointer;
  font-size: ${props => dimensions[props.size].fontSize};
  user-select: none;
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
      box-shadow: 0 0 0 4px ${props => props.theme.blue100};
    }
  }

  &:checked {
    & ~ ${CustomCheckbox} {
      background-color: ${props => colors(props.theme)[props.appearance].background};
      border-color: ${props => colors(props.theme)[props.appearance].background};

      &:after {
        display: block;
      }
    }
  }
`;

const Checkbox = ({ checked, onChange, children, appearance, size, onClick, ...other }) => (
  <Label onClick={onClick} size={size} {...other}>
    {children}
    <StyledInput type="checkbox" checked={checked} onChange={onChange} appearance={appearance} />
    <CustomCheckbox size={size} />
  </Label>
);

Checkbox.defaultProps = {
  children: '',
  appearance: 'neutral',
  onClick: null,
  size: 'small',
};

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node,
  appearance: PropTypes.oneOf(['primary', 'success', 'neutral']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClick: PropTypes.func,
};

export default Checkbox;
