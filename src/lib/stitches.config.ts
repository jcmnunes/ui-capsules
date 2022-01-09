import type * as Stitches from '@stitches/react';
import { createStitches } from '@stitches/react';

import { colors } from './colors';

export const { styled, css, keyframes, config, createTheme } = createStitches({
  theme: {
    colors,

    fonts: {
      inter: 'Inter, -apple-system, system-ui, sans-serif',
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
      1: '12px',
      2: '14px',
      3: '16px',
      4: '18px',
      5: '20px',
      6: '24px',
      7: '32px',
      8: '36px',
      9: '48px',
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
      1: '18px',
      2: '21px',
      3: '24px',
      4: '24px',
      5: '32px',
      6: '32px',
      7: '48px',
      8: '56px',
      9: '72px',
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

    shadows: {
      focus: '0px 0px 0px 3px #7EC4F6, inset 0px 0px 0px 1px #0078D4',
      focusSuccess: '0px 0px 0px 3px #84E1BC, inset 0px 0px 0px 1px #007A5A',
      focusError: '0px 0px 0px 3px #FEAEB6, inset 0px 0px 0px 1px #E01E5A',
      inset: 'inset 0px 1px 2px rgba(55, 65, 81, 0.06)',
      100: '0px 1px 1px rgba(55, 65, 81, 0.06)',
      200: '0px 1px 2px rgba(55, 65, 81, 0.08)',
      300: '0px 1px 2px rgba(55, 65, 81, 0.06), 0px 1px 3px rgba(55, 65, 81, 0.1)',
      400: '0px 0px 4px rgba(55, 65, 81, 0.06), 0px 2px 6px rgba(55, 65, 81, 0.1)',
      500: '0px 8px 16px rgba(55, 65, 81, 0.1), 0px 2px 6px rgba(55, 65, 81, 0.05)',
      600: '0px 12px 25px rgba(55, 65, 81, 0.1), 0px 8px 10px rgba(55, 65, 81, 0.04)',
      700: '0px 24px 50px rgba(55, 65, 81, 0.25)',
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
