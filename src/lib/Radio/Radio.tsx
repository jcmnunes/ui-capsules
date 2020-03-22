import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import { Size } from '../typings';

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

interface CustomRadioProps {
  size: Size;
  isDisabled: boolean;
}
const CustomRadio = styled.span<CustomRadioProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: ${({ size }) => dimensions[size].height};
  width: ${({ size }) => dimensions[size].height};
  background-color: ${({ isDisabled }) => (isDisabled ? theme.neutral050 : '#fff')};
  border-radius: 50%;
  transition: background-color 0.2s ease, border 0.2s ease;
  border: 1px solid ${props => (props.isDisabled ? theme.neutral075 : theme.neutral100)};

  &:after {
    position: absolute;
    content: '';
    top: ${({ size }) => dimensions[size].displacement};
    left: ${({ size }) => dimensions[size].displacement};
    width: ${({ size }) => dimensions[size].bulletSize};
    height: ${({ size }) => dimensions[size].bulletSize};
    border-radius: 50%;
    background-color: white;
    display: none;
  }

  &:hover {
    background-color: ${theme.neutral050};
  }
`;

interface LabelProps {
  size: Size;
  isDisabled: boolean;
}
const Label = styled.label<LabelProps>`
  display: inline-flex;
  height: ${({ size }) => dimensions[size].height};
  align-items: center;
  position: relative;
  padding-left: ${({ size }) => dimensions[size].padding};
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
  font-size: ${({ size }) => dimensions[size].fontSize};
  user-select: none;
  color: ${({ isDisabled }) => (isDisabled ? theme.neutral300 : 'inherit')};
`;

interface StyledInputProps {
  appearance: 'primary' | 'success' | 'neutral';
}
const StyledInput = styled.input<StyledInputProps>`
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

interface Props {
  checked: boolean;
  onChange(): void;
  appearance?: 'primary' | 'success' | 'neutral';
  size?: Size;
  isDisabled?: boolean;
}

export const Radio: React.FC<Props> = ({
  checked,
  onChange,
  appearance = 'neutral',
  isDisabled = false,
  size = 'small',
  children,
  ...other
}) => {
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
  isDisabled: false,
};
