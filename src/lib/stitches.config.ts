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
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.5rem',
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
      xs: '1.125rem',
      sm: '1.3125rem',
      md: '1.5rem',
      lg: '1.6875rem',
      xl: '1.875rem',
      '2xl': '2.25rem',
      '3xl': '3rem',
      '4xl': '3.375rem',
      '5xl': '4.5rem',
      '6xl': '5.25rem',
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
