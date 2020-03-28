import React, { ChangeEvent, FC } from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import { IconType, Size } from '../types';
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

const getPadding = (size: Size, hasIconBefore: boolean, hasIconAfter: boolean) => {
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

const getIconPosition = (size: Size) => {
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
  size: Size;
}
const InputWrapper = styled.div<InputWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: ${({ error, size }) =>
    error ? dimensions[size].heightWithError : dimensions[size].height};
  position: relative;
`;

interface IconWrapperProps {
  size: Size;
}

const IconBeforeWrapper = styled.div<IconWrapperProps>`
  position: absolute;
  top: ${({ size }) => getIconPosition(size).top};
  left: ${({ size }) => getIconPosition(size).side};
  z-index: 3;
  color: ${props => props.theme.neutral500};
  height: ${({ size }) => (size === 'small' ? '18px' : '24px')};
`;

const IconAfterWrapper = styled.div<IconWrapperProps>`
  position: absolute;
  top: ${({ size }) => getIconPosition(size).top};
  right: ${({ size }) => getIconPosition(size).side};
  z-index: 3;
  color: ${props => props.theme.neutral500};
`;

interface StyledInputProps {
  inputSize: Size;
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

interface ErrorProps {
  size: Size;
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

interface Props {
  size?: Size;
  isDisabled?: boolean;
  error?: string;
  iconBefore?: IconType;
  iconAfter?: IconType;
  value?: string;
  onChange?(ev?: ChangeEvent<HTMLInputElement>): void;
  autoFocus?: boolean;
}

export const Input: FC<Props> = ({
  size = 'medium',
  error,
  isDisabled = false,
  iconBefore,
  iconAfter,
  ...other
}) => (
  <InputWrapper size={size} error={error}>
    {iconBefore && (
      <IconBeforeWrapper size={size}>
        <Icon icon={iconBefore as IconType} size={size === 'small' ? '18px' : '24px'} />
      </IconBeforeWrapper>
    )}
    <StyledInput
      inputSize={size}
      disabled={isDisabled}
      error={error}
      iconBefore={iconBefore}
      iconAfter={iconAfter}
      {...other}
    />
    {iconAfter && (
      <IconAfterWrapper size={size}>
        <Icon icon={iconAfter as IconType} size={size === 'small' ? '18px' : '24px'} />
      </IconAfterWrapper>
    )}
    {error && <Error size={size}>{error}</Error>}
  </InputWrapper>
);
Input.displayName = 'Input';

Input.defaultProps = {
  size: 'medium',
  isDisabled: false,
  error: '',
  iconBefore: undefined,
  iconAfter: undefined,
};
