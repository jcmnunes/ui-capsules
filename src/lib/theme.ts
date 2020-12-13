import '@emotion/react';
import { palette } from './palette';

export const theme = {
  colors: {
    bg: palette.white,
    fg: palette.gray['700'],
    primary: palette.blue,
    info: palette.blue,
    success: palette.green,
    warning: palette.yellow,
    error: palette.red,
    neutral: palette.gray,
    ...palette,
  },

  space: {
    '0': 0,
    '2': 2,
    '4': 4,
    '8': 8,
    '12': 12,
    '16': 16,
    '24': 24,
    '32': 32,
    '40': 40,
    '48': 48,
    '56': 56,
  },

  fontSizes: {
    small: 12,
    body: 14,
    h6: 16,
    h5: 18,
    h4: 20,
    h3: 24,
    h2: 32,
    h1: 36,
    large: 48,
    xl: 60,
    xxl: 72,
  },

  lineHeights: {
    small: '18px',
    body: '21px',
    h6: '24px',
    h5: '24px',
    h4: '32px',
    h3: '32px',
    h2: '48px',
    h1: '56px',
    large: '72px',
    xl: '88px',
    xxl: '112px',
  },

  fontWeights: {
    400: 400,
    500: 500,
    600: 600,
  },

  fontFamily: '"Inter var", sans-serif',

  radii: {
    none: 0,
    small: 2,
    medium: 4,
    large: 6,
    xl: 8,
    full: 999,
  },

  letterSpacings: {
    normal: '0',
    wide: '0.5px',
  },

  get shadows() {
    return {
      focus: {
        boxShadow: `0px 0px 0px 3px ${this.colors.primary['200']}`,
        zIndex: 1,
      },
    };
  },

  breakpointsLegacy: {
    xxl: '1500px',
    xl: '1220px',
    lg: '1050px',
    md: '920px',
    sm: '720px',
    mobile: '450px',
  },

  transitionAll: 'all 0.2s ease',

  zIndices: {
    modal: 2718281,
    select: 3141592,
    larger: 4669201,
  },
};

export type UICTheme = typeof theme;

declare module '@emotion/react' {
  export interface Theme extends UICTheme {}
}
