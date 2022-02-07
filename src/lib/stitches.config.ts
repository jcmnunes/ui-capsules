import type * as Stitches from '@stitches/react';
import { createStitches } from '@stitches/react';

import { colors } from './colors';

export const { styled, css, keyframes, config, createTheme } = createStitches({
  theme: {
    colors,

    fonts: {
      inter: '"Inter", -apple-system, system-ui, sans-serif',
      hack: 'Hack, monospace',
    },

    space: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '24px',
      6: '32px',
      7: '40px',
      8: '48px',
      9: '56px',
    },

    fontSizes: {
      sm: '12px',
      md: '14px',
      lg: '16px',
      xl: '18px',
      '2xl': '20px',
      '3xl': '24px',
      '4xl': '32px',
      '5xl': '36px',
      '6xl': '48px',
    },

    fontWeights: {
      400: 400,
      500: 500,
      600: 600,
    },

    letterSpacings: {
      normal: '0',
      wide: '0.5px',
    },

    lineHeights: {
      sm: '18px',
      md: '21px',
      lg: '24px',
      xl: '24px',
      '2xl': '32px',
      '3xl': '32px',
      '4xl': '48px',
      '5xl': '56px',
      '6xl': '72px',
    },

    radii: {
      none: '0px',
      small: '2px',
      medium: '4px',
      large: '6px',
      xl: '8px',
      round: '50%',
      full: '999px',
    },

    zIndices: {
      modal: '2718281',
      select: '3141592',
      toast: '4669201',
      splash: '5772156',
    },
  },

  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
    '2xl': '(min-width: 1536px)',
  },

  utils: {
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),

    bg: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),
  },
});

export type CSS = Stitches.CSS<typeof config>;
