import React from 'react';
import { VariantProps } from '@stitches/react';
import { keyframes, styled } from '../stitches.config';
import { CSSProp } from '../types';
import { darkTheme } from '../darkTheme';

const pulse = keyframes({
  '0%': { transform: 'scale(1); opacity: 1' },
  '45%': { transform: 'scale(0.1); opacity: 0.7' },
  '80%': { transform: 'scale(1); opacity: 1' },
});

export const Dots = styled('span', {
  display: 'inline-block',

  variants: {
    size: {
      medium: {
        height: 11,
      },

      large: {
        height: 18,
      },
    },
  },
});

export const Dot = styled('span', {
  borderRadius: '100%',
  display: 'inline-block',
  animationName: `${pulse}`,
  animationTimingFunction: 'ease',
  animationFillMode: 'both',
  animationIterationCount: 'infinite',
  animationDuration: '0.75s',

  variants: {
    size: {
      medium: {
        width: 5,
        height: 5,
        margin: 3,
      },

      large: {
        width: 10,
        height: 10,
        margin: 4,
      },
    },

    variant: {
      light: {
        backgroundColor: '$white',

        [`.${darkTheme} &`]: {
          backgroundColor: '$neutral600',
        },
      },

      dark: {
        backgroundColor: '$neutral600',
      },
    },
  },

  defaultVariants: {
    size: 'medium',
    variant: 'light',
  },
});

interface Props extends VariantProps<typeof Dot>, CSSProp {}

export const Spinner: React.FC<Props> = ({ css, ...rest }) => {
  return (
    <Dots css={css} size={rest.size}>
      <Dot css={{ animationDelay: '0.12s' }} {...rest} />
      <Dot css={{ animationDelay: '0.24s' }} {...rest} />
      <Dot css={{ animationDelay: '0.36s' }} {...rest} />
    </Dots>
  );
};
