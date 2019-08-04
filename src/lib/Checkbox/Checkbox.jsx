import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const getColors = props => {
  const colors = {};
  switch (props.intent) {
    case 'primary':
      colors.background = props.theme.blue500;
      break;
    case 'success':
      colors.background = props.theme.green500;
      break;
    case 'neutral':
      colors.background = props.theme.neutral300;
      break;
    default:
      colors.background = props.theme.neutral300;
      break;
  }
  return colors;
};

const CustomCheckbox = styled.span`
  position: absolute;
  border-radius: 4px;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: ${props => props.theme.neutral100};
  transition: background-color 0.2s ease;

  &:after {
    content: '';
    position: absolute;
    display: none;
    left: 9px;
    top: 5px;
    width: 7px;
    height: 12px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }

  &:hover {
    background-color: ${props => props.theme.neutral200};
  }
`;

const Label = styled.label`
  display: inline-flex;
  height: 25px;
  align-items: center;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 18px;
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
      background-color: ${props => getColors(props).background};

      &:after {
        display: block;
      }
    }
  }
`;

const Checkbox = ({ checked, onChange, children, intent, onClick, ...other }) => (
  <Label onClick={onClick} {...other}>
    {children}
    <StyledInput type="checkbox" checked={checked} onChange={onChange} intent={intent} />
    <CustomCheckbox />
  </Label>
);

Checkbox.defaultProps = {
  children: '',
  intent: 'neutral',
  onClick: null,
};

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node,
  intent: PropTypes.oneOf(['primary', 'success', 'neutral']),
  onClick: PropTypes.func,
};

export default Checkbox;
