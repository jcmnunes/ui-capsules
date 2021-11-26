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
  fontSize: '$2',
  color: '$neutral700',

  variants: {
    isTruncated: {
      true: {
        ...truncatedStyle,
      },
    },

    variant: {
      smallCaps: {
        fontWeight: 600,
        fontSize: '$1',
        lineHeight: '$1',
        color: '$neutral500',
        letterSpacing: '$wide',
        textTransform: 'uppercase',
      },

      label: {
        fontWeight: 600,
        fontSize: '$1',
        lineHeight: '$1',
        display: 'inline-block',
      },

      helper: {
        fontWeight: 500,
        fontSize: '$1',
        lineHeight: '$1',
        color: '$neutral500',
      },
    },

    size: {
      1: {
        fontSize: '$1',
        lineHeight: '$1',
      },
      2: {
        fontSize: '$2',
        lineHeight: '$2',
      },
      3: {
        fontSize: '$3',
        lineHeight: '$3',
      },
      4: {
        fontSize: '$4',
        lineHeight: '$4',
      },
      5: {
        fontSize: '$5',
        lineHeight: '$5',
      },
      6: {
        fontSize: '$6',
        lineHeight: '$6',
      },
      7: {
        fontSize: '$7',
        lineHeight: '$7',
      },
      8: {
        fontSize: '$8',
        lineHeight: '$8',
      },
      9: {
        fontSize: '$9',
        lineHeight: '$9',
      },
    },
  },
});

Text.displayName = 'Text';
Text.defaultProps = {
  variant: undefined,
};
