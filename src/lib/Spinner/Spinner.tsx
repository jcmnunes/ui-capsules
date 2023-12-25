import React from 'react';
import { css, keyframes, styled } from 'styled-components';

const pulse = keyframes`
  0% { transform: scale(1); opacity: 1 }
  45% { transform: scale(0.1); opacity: 0.7 }
  80% { transform: scale(1); opacity: 1 }
`;

type Size = 'medium' | 'large';

interface DotsProps {
  $size?: Size;
}

export const Dots = styled.span<DotsProps>(
  {
    display: 'inline-flex',
  },

  ({ $size }) => {
    switch ($size) {
      case 'large':
        return { height: 18 };
      default:
        return {
          height: 11,
        };
    }
  },
);

interface DotProps {
  $size?: Size;
  $variant?: 'light' | 'dark';
}

export const Dot = styled.span<DotProps>(
  {
    borderRadius: '100%',
    display: 'inline-block',
    animationTimingFunction: 'ease',
    animationFillMode: 'both',
    animationIterationCount: 'infinite',
    animationDuration: '0.75s',
    transformOrigin: 'center,'
  },

  css`
    animation-name: ${pulse};
  `,

  ({ $variant, theme }) => {
    switch ($variant) {
      case 'dark':
        return {
          backgroundColor: theme.colors.neutral600,
        };
      default:
        return {
          backgroundColor: theme.colors.white,

          '.darkTheme &': {
            backgroundColor: theme.colors.neutral600,
          },
        };
    }
  },

  ({ $size }) => {
    switch ($size) {
      case 'large':
        return {
          width: 10,
          height: 10,
          margin: 4,
        };
      default:
        return {
          width: 5,
          height: 5,
          margin: 3,
        };
    }
  },
);

interface Props extends React.ComponentPropsWithRef<'span'> {
  size?: 'medium' | 'large';
  variant?: 'light' | 'dark';
  dotColor?: string;
}

export const Spinner = ({ dotColor, variant, size, ...rest }: Props) => {
  return (
    <Dots $size={size} {...rest}>
      <Dot
        css={{ '&&': { animationDelay: '0.12s', backgroundColor: dotColor } }}
        $variant={variant}
        $size={size}
      />
      <Dot
        css={{ '&&': { animationDelay: '0.24s', backgroundColor: dotColor } }}
        $variant={variant}
        $size={size}
      />
      <Dot
        css={{ '&&': { animationDelay: '0.36s', backgroundColor: dotColor } }}
        $variant={variant}
        $size={size}
      />
    </Dots>
  );
};
