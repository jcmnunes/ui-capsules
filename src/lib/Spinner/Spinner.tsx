import styled, { keyframes } from 'styled-components';
import { css, theme, ThemeColors } from '../theme';
import { ElementSize } from '../types';
import { Box, BoxProps } from '../Box/Box';
import { variant } from 'styled-system';
import { LayoutProps } from '../styledProps';

const spin = keyframes`
  100% { 
    transform: rotate(360deg); 
  } 
`;

interface SpinnerProps extends BoxProps {
  size?: ElementSize;
  variantColor?: ThemeColors;
}

export const Spinner = styled(Box)<SpinnerProps>(
  ({ variantColor = 'primary' }) => ({
    display: 'inline-block',
    boxSizing: 'border-box',
    borderRadius: '100%',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: theme.colors[variantColor as keyof typeof theme.colors]['100'],
    borderTopColor: theme.colors[variantColor as keyof typeof theme.colors]['400'],
  }),
  css`
    animation: ${spin} 500ms infinite linear;
  `,
  variant<LayoutProps, ElementSize>({
    prop: 'size',
    variants: {
      small: {
        width: 14,
        height: 14,
      },
      medium: {
        width: 18,
        height: 18,
      },
      large: {
        width: 24,
        height: 24,
      },
    },
  }),
);

Spinner.defaultProps = {
  size: 'medium',
  variantColor: 'primary',
};
