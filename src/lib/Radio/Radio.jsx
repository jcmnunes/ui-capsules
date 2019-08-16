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
    bulletSize: '6px',
    displacement: '4px',
    fontSize: '16px',
    padding: '22px',
  },
  medium: {
    width: '20px',
    height: '20px',
    bulletSize: '8px',
    displacement: '5px',
    fontSize: '18px',
    padding: '28px',
  },
  large: {
    width: '25px',
    height: '25px',
    bulletSize: '9px',
    displacement: '7px',
    fontSize: '20px',
    padding: '35px',
  },
};

const CustomRadio = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: ${props => dimensions[props.size].height};
  width: ${props => dimensions[props.size].height};
  background-color: ${props => (props.isDisabled ? theme.neutral050 : '#fff')};
  border-radius: 50%;
  transition: background-color 0.2s ease, border 0.2s ease;
  border: 1px solid ${props => (props.isDisabled ? theme.neutral075 : theme.neutral100)};

  &:after {
    position: absolute;
    content: '';
    top: ${props => dimensions[props.size].displacement};
    left: ${props => dimensions[props.size].displacement};
    width: ${props => dimensions[props.size].bulletSize};
    height: ${props => dimensions[props.size].bulletSize};
    border-radius: 50%;
    background-color: white;
    display: none;
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
    & ~ ${CustomRadio} {
      outline: none;
      box-shadow: 0 0 0 2px ${theme.blue100};
    }
  }

  &:checked {
    ~ ${CustomRadio} {
      background-color: ${props => colors[props.appearance].background};
      border-color: ${props => colors[props.appearance].background};

      &:after {
        display: block;
      }
    }

    &:disabled {
      & ~ ${CustomRadio} {
        background-color: ${props => colors[props.appearance].backgroundDisabled};
        border-color: ${props => colors[props.appearance].backgroundDisabled};
      }
    }
  }
`;

const Radio = ({ checked, appearance, onChange, isDisabled, size, children, ...other }) => {
  return (
    <Label size={size} isDisabled={isDisabled}>
      {children}
      <StyledInput
        checked={checked}
        onChange={onChange}
        appearance={appearance}
        type="radio"
        disabled={isDisabled}
        {...other}
      />
      <CustomRadio size={size} isDisabled={isDisabled} />
    </Label>
  );
};
Radio.displayName = 'Radio';

Radio.defaultProps = {
  appearance: 'neutral',
  size: 'small',
  children: null,
  isDisabled: false,
};

Radio.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  appearance: PropTypes.oneOf(['primary', 'success', 'neutral']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  children: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Radio;
