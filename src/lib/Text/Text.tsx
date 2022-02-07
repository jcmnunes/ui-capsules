import React from 'react';
import { styled } from '../stitches.config';

export type TextVariant = 'smallCaps' | 'label' | 'helper';

const truncatedStyle: React.CSSProperties = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: 'block',
};

export const Text = styled('span', {
  fontFamily: '$inter',
  fontVariantNumeric: 'tabular-nums',
  fontWeight: 400,
  fontSize: '$md',
  lineHeight: '$md',
  color: '$neutral700',
  display: 'block',

  variants: {
    isTruncated: {
      true: {
        ...truncatedStyle,
      },
    },

    variant: {
      smallCaps: {
        fontWeight: 600,
        fontSize: '$sm',
        lineHeight: '$sm',
        color: '$neutral500',
        letterSpacing: '$wide',
        textTransform: 'uppercase',
      },

      label: {
        fontWeight: 600,
        fontSize: '$sm',
        lineHeight: '$sm',
        display: 'inline-block',
      },

      helper: {
        fontWeight: 500,
        fontSize: '$sm',
        lineHeight: '$sm',
        color: '$neutral500',
      },
    },

    size: {
      sm: {
        fontSize: '$sm',
        lineHeight: '$sm',
      },
      md: {
        fontSize: '$md',
        lineHeight: '$md',
      },
      lg: {
        fontSize: '$lg',
        lineHeight: '$lg',
      },
      xl: {
        fontSize: '$xl',
        lineHeight: '$xl',
      },
      '2xl': {
        fontSize: '$2xl',
        lineHeight: '$2xl',
      },
      '3xl': {
        fontSize: '$3xl',
        lineHeight: '$3xl',
      },
      '4xl': {
        fontSize: '$4xl',
        lineHeight: '$4xl',
      },
      '5xl': {
        fontSize: '$5xl',
        lineHeight: '$5xl',
      },
      '6xl': {
        fontSize: '$6xl',
        lineHeight: '$6xl',
      },
    },
  },
});

Text.displayName = 'Text';
Text.defaultProps = {
  variant: undefined,
};
