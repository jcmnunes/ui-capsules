import React, { FC, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import { Appearance, ElementSize } from '../types';

const colors = {
  primary: {
    background: theme.blue500,
    backgroundDisabled: theme.blueDisabled,
  },
  success: {
    background: theme.green500,
    backgroundDisabled: theme.greenDisabled,
  },
  secondary: {
    background: theme.neutral300,
    backgroundDisabled: theme.neutral100,
  },
  error: {
    background: theme.red300,
    backgroundDisabled: theme.redDisabled,
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
  inputSize: ElementSize;
  isDisabled: boolean;
}
const CustomRadio = styled.span<CustomRadioProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: ${({ inputSize }) => dimensions[inputSize].height};
  width: ${({ inputSize }) => dimensions[inputSize].height};
  background-color: ${({ isDisabled }) => (isDisabled ? theme.neutral050 : '#fff')};
  border-radius: 50%;
  transition: background-color 0.2s ease, border 0.2s ease;
  border: 1px solid ${props => (props.isDisabled ? theme.neutral075 : theme.neutral100)};

  &:after {
    position: absolute;
    content: '';
    top: ${({ inputSize }) => dimensions[inputSize].displacement};
    left: ${({ inputSize }) => dimensions[inputSize].displacement};
    width: ${({ inputSize }) => dimensions[inputSize].bulletSize};
    height: ${({ inputSize }) => dimensions[inputSize].bulletSize};
    border-radius: 50%;
    background-color: white;
    display: none;
  }

  &:hover {
    background-color: ${theme.neutral050};
  }
`;

interface LabelProps {
  inputSize: ElementSize;
  isDisabled: boolean;
}
const Label = styled.label<LabelProps>`
  display: inline-flex;
  height: ${({ inputSize }) => dimensions[inputSize].height};
  align-items: center;
  position: relative;
  padding-left: ${({ inputSize }) => dimensions[inputSize].padding};
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
  font-size: ${({ inputSize }) => dimensions[inputSize].fontSize};
  user-select: none;
  color: ${({ isDisabled }) => (isDisabled ? theme.neutral300 : 'inherit')};
`;

interface StyledInputProps {
  appearance: Appearance;
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

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  appearance?: Appearance;
  inputSize?: ElementSize;
  isDisabled?: boolean;
}

export const Radio: FC<Props> = ({
  checked,
  onChange,
  appearance = 'secondary',
  isDisabled = false,
  inputSize = 'small',
  children,
  ...other
}) => {
  return (
    <Label inputSize={inputSize} isDisabled={isDisabled}>
      {children}
      <StyledInput
        checked={checked}
        onChange={onChange}
        appearance={appearance}
        type="radio"
        disabled={isDisabled}
        {...other}
      />
      <CustomRadio inputSize={inputSize} isDisabled={isDisabled} />
    </Label>
  );
};
Radio.displayName = 'Radio';

Radio.defaultProps = {
  appearance: 'secondary',
  inputSize: 'small',
  isDisabled: false,
};
