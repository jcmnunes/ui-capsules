import '@emotion/react';
import { Interpolation } from '@emotion/serialize';
import * as styledComponents from 'styled-components';
import { useContext } from 'react';
import { palette } from './palette';

export const theme = {
  yellow050: '#FFFBEA',
  yellow075: '#FCF6E1',
  yellow100: '#FFF3C4',
  yellow200: '#FCE588',
  yellow300: '#FADB5F',
  yellow400: '#F7C948',
  yellow500: '#F0B429',
  yellow600: '#DE911C',
  yellow700: '#CB6F17',
  yellow800: '#B44D12',
  yellow900: '#8D2B0B',
  yellowDisabled: '#F4D2B5',

  blue025: '#EDF6FC',
  blue050: '#DCEEFB',
  blue100: '#B6E0FE',
  blue200: '#84C5F4',
  blue300: '#62B0E8',
  blue400: '#4098D7',
  blue500: '#2680C2',
  blue600: '#186FAF',
  blue700: '#0F609B',
  blue800: '#0A558C',
  blue900: '#003E6B',
  blueDisabled: '#A8D1EB',

  neutral025: '#F7F9FC',
  neutral075: '#EBEEF2',
  neutral050: '#F5F7FA',
  neutral100: '#E4E7EB',
  neutral200: '#CBD2D8',
  neutral300: '#9AA5B1',
  neutral400: '#7B8794',
  neutral500: '#616E7C',
  neutral600: '#52616D',
  neutral700: '#3E4C59',
  neutral800: '#323F4B',
  neutral900: '#1F2933',
  neutralDisabled: '#F5F7FA',

  green050: '#EFFCF6',
  green100: '#C6F7E2',
  green200: '#8EEDC7',
  green300: '#65D6AD',
  green400: '#3DBD93',
  green500: '#27AB83',
  green600: '#199473',
  green700: '#137D64',
  green800: '#0C6B58',
  green900: '#014D40',
  greenDisabled: '#AFE1D5',

  red050: '#FFE3E3',
  red100: '#FFBDBD',
  red200: '#FF9B9B',
  red300: '#F86A6A',
  red400: '#EF4E4E',
  red500: '#E12D39',
  red600: '#CF1124',
  red700: '#AB091E',
  red800: '#8A041A',
  red900: '#610316',
  redDisabled: '#FFBCC2',

  pink050: '#FFE0F0',
  pink100: '#FAB8D9',
  pink200: '#F191C1',
  pink300: '#E668A7',
  pink400: '#DA4A91',
  pink500: '#C42D78',
  pink600: '#AD2167',
  pink700: '#9B1B5A',
  pink800: '#781244',
  pink900: '#5C0B33',

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
    small: 14,
    body: 16,
    h6: 18,
    h5: 20,
    h4: 22,
    h3: 26,
    h2: 34,
    h1: 38,
    large: 50,
    xl: 62,
    xxl: 74,
  },

  lineHeights: {
    small: '16px',
    body: '20px',
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

  fontFamily: '"Source Sans Pro var", sans-serif',

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

export type Theme = typeof theme;
export type UICTheme = typeof theme;

export type ThemeColors = Omit<keyof typeof theme.colors, 'bg' | 'fg' | 'white' | 'black'>;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

declare module '@emotion/react' {
  export interface Theme extends UICTheme {}
}

declare module 'react' {
  interface Attributes {
    css?: Interpolation<Theme>;
  }
}

const { css } = styledComponents;

const useTheme = () => {
  return useContext<Theme>(styledComponents.ThemeContext);
};

export { css, useTheme };
