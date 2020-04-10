import React, { FC } from 'react';
import styled from 'styled-components';
import { theme } from '../theme';

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

interface CustomCheckboxProps {
  size: 'small' | 'medium' | 'large';
  isDisabled: boolean;
}

const CustomCheckbox = styled.span<CustomCheckboxProps>`
  position: absolute;
  border-radius: 4px;
  top: 0;
  left: 0;
  width: ${({ size }) => dimensions[size].width};
  height: ${({ size }) => dimensions[size].height};
  background-color: ${({ isDisabled }) => (isDisabled ? theme.neutral050 : '#fff')};
  transition: background-color 0.2s ease;
  border: 1px solid ${({ isDisabled }) => (isDisabled ? theme.neutral075 : theme.neutral100)};

  &:after {
    content: '';
    position: absolute;
    display: none;
    left: ${props => dimensions[props.size].checkmarkLeft};
    top: ${props => dimensions[props.size].checkmarkTop};
    width: ${props => dimensions[props.size].checkmarkWidth};
    height: ${props => dimensions[props.size].checkmarkHeight};
    // noinspection CssReplaceWithShorthandSafely
    border: solid white;
    border-width: ${props => dimensions[props.size].checkmarkBorderWidth};
    transform: rotate(45deg);
  }

  &:hover {
    background-color: ${theme.neutral050};
  }
`;

interface LabelProps {
  onClick?(): void;
  size: 'small' | 'medium' | 'large';
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
    & ~ ${CustomCheckbox} {
      outline: none;
      box-shadow: 0 0 0 2px ${theme.blue100};
    }
  }

  &:checked {
    & ~ ${CustomCheckbox} {
      background-color: ${({ appearance }) => colors[appearance].background};
      border-color: ${({ appearance }) => colors[appearance].background};

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

interface Props {
  checked: boolean;
  onChange(): void;
  isDisabled?: boolean;
  appearance?: 'primary' | 'success' | 'neutral';
  size?: 'small' | 'medium' | 'large';
  onClick?(): void;
}

export const Checkbox: FC<Props> = ({
  checked,
  isDisabled = false,
  appearance = 'neutral',
  size = 'small',
  children,
  onClick,
  onChange,
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
  appearance: 'neutral',
  size: 'small',
  isDisabled: false,
};
