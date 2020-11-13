import React, { FC, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import { IconType, ElementSize } from '../types';
import { Icon } from '../Icon/Icon';

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

const getPadding = (size: ElementSize, hasIconBefore: boolean, hasIconAfter: boolean) => {
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

const getIconPosition = (size: ElementSize) => {
  switch (size) {
    case 'small':
      return {
        top: '3px',
        side: '6px',
      };
    case 'medium':
      return {
        top: '4px',
        side: '8px',
      };
    case 'large':
      return {
        top: '12px',
        side: '14px',
      };
    default:
      return {
        top: '4px',
        side: '8px',
      };
  }
};

interface InputWrapperProps {
  error?: string;
  inputSize: ElementSize;
}
const InputWrapper = styled.div<InputWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: ${({ error, inputSize }) =>
    error ? dimensions[inputSize].heightWithError : dimensions[inputSize].height};
  position: relative;
`;

interface IconWrapperProps {
  inputSize: ElementSize;
}
const IconBeforeWrapper = styled.div<IconWrapperProps>`
  position: absolute;
  top: ${({ inputSize }) => getIconPosition(inputSize).top};
  left: ${({ inputSize }) => getIconPosition(inputSize).side};
  z-index: 3;
  color: ${props => props.theme.neutral500};
  height: ${({ inputSize }) => (inputSize === 'small' ? '18px' : '24px')};
`;
const IconAfterWrapper = styled.div<IconWrapperProps>`
  position: absolute;
  top: ${({ inputSize }) => getIconPosition(inputSize).top};
  right: ${({ inputSize }) => getIconPosition(inputSize).side};
  z-index: 3;
  color: ${props => props.theme.neutral500};
`;

interface StyledInputProps {
  inputSize: ElementSize;
  error?: string;
  iconBefore?: IconType;
  iconAfter?: IconType;
}
const StyledInput = styled.input<StyledInputProps>`
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  height: ${({ inputSize }) => dimensions[inputSize].height};
  background: ${({ error }) => (error ? '#fffafa' : '#fff')};
  color: ${theme.neutral600};
  border-radius: 4px;
  border: 1px solid ${({ error }) => (error ? theme.red500 : theme.neutral200)};
  font-size: ${({ inputSize }) => dimensions[inputSize].fontSize};
  padding: ${({ inputSize, iconBefore, iconAfter }) =>
    getPadding(inputSize, !!iconBefore, !!iconAfter)};
  width: 100%;

  &::placeholder {
    color: ${theme.neutral200};
  }

  &:hover {
    border-color: ${props => (props.error ? theme.red700 : theme.neutral300)};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${props => (props.error ? theme.red200 : theme.blue200)};
    border: 1px solid ${props => (props.error ? theme.red400 : theme.blue400)};
  }

  &:disabled {
    color: ${theme.neutral200};
    background: ${theme.neutral050};
    cursor: not-allowed;
    border-color: ${theme.neutral200};
  }
`;

interface ErrorProps {
  size: ElementSize;
}
const Error = styled.div<ErrorProps>`
  font-size: ${({ size }) => dimensions[size].helperFontSize};
  color: ${theme.red600};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 2px 4px;
  line-height: 16px;
`;

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: ElementSize;
  isDisabled?: boolean;
  error?: string;
  iconBefore?: IconType;
  iconAfter?: IconType;
}

export const Input: FC<Props> = ({
  inputSize = 'medium',
  error,
  isDisabled = false,
  iconBefore,
  iconAfter,
  ...other
}) => (
  <InputWrapper inputSize={inputSize} error={error}>
    {iconBefore && (
      <IconBeforeWrapper inputSize={inputSize}>
        <Icon icon={iconBefore as IconType} size={inputSize === 'small' ? '18px' : '24px'} />
      </IconBeforeWrapper>
    )}
    <StyledInput
      inputSize={inputSize}
      disabled={isDisabled}
      error={error}
      iconBefore={iconBefore}
      iconAfter={iconAfter}
      {...other}
    />
    {iconAfter && (
      <IconAfterWrapper inputSize={inputSize}>
        <Icon icon={iconAfter as IconType} size={inputSize === 'small' ? '18px' : '24px'} />
      </IconAfterWrapper>
    )}
    {error && <Error size={inputSize}>{error}</Error>}
  </InputWrapper>
);
Input.displayName = 'Input';

Input.defaultProps = {
  inputSize: 'medium',
  isDisabled: false,
  error: '',
  iconBefore: undefined,
  iconAfter: undefined,
};
