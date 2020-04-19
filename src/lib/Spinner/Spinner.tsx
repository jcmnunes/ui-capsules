import styled, { keyframes } from 'styled-components';
import { theme } from '../theme';
import { ElementSize } from '../types';

const getColors = (props: SpinnerProps) => {
  if (props.appearance === 'light') {
    return {
      border: '#FFFFFF32',
      accent: '#FFF',
    };
  }
  return {
    border: theme.neutral100,
    accent: theme.neutral200,
  };
};

const spin = keyframes`
  100% { 
    transform: rotate(360deg); 
  } 
`;

interface SpinnerProps {
  size: ElementSize;
  appearance?: 'light' | 'dark';
}
export const Spinner = styled.span<SpinnerProps>`
  display: inline-block;
  box-sizing: border-box;
  width: ${({ size }) =>
    (size === 'small' && '14px') || (size === 'medium' && '18px') || (size === 'large' && '24px')};
  height: ${({ size }) =>
    (size === 'small' && '14px') || (size === 'medium' && '18px') || (size === 'large' && '24px')};
  border-radius: 100%;
  border: ${props => `3px solid ${getColors(props).border}`};
  border-top-color: ${props => getColors(props).accent};
  animation: ${spin} 500ms infinite linear;
`;
Spinner.displayName = 'Spinner';

Spinner.defaultProps = {
  size: 'medium',
  appearance: 'dark',
};
