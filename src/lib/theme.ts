import { colors } from './colors';

const shadow300 = '0px 1px 2px rgba(55, 65, 81, 0.06), 0px 1px 3px rgba(55, 65, 81, 0.1)';

export const theme = {
  colors: {
    ...colors,

    bg: '#fff',

    neutral50: colors.gray50,
    neutral100: colors.gray100,
    neutral200: colors.gray200,
    neutral300: colors.gray300,
    neutral400: colors.gray400,
    neutral500: colors.gray500,
    neutral600: colors.gray600,
    neutral700: colors.gray700,
    neutral800: colors.gray800,
    neutral900: colors.gray900,

    primary50: colors.blue50,
    primary100: colors.blue100,
    primary200: colors.blue200,
    primary300: colors.blue300,
    primary400: colors.blue400,
    primary500: colors.blue500,
    primary600: colors.blue600,
    primary700: colors.blue700,
    primary800: colors.blue800,
    primary900: colors.blue900,
    primaryDisabled: '#8fbcea',

    secondary50: colors.pink50,
    secondary100: colors.pink100,
    secondary200: colors.pink200,
    secondary300: colors.pink300,
    secondary400: colors.pink400,
    secondary500: colors.pink500,
    secondary600: colors.pink600,
    secondary700: colors.pink700,
    secondary800: colors.pink800,
    secondary900: colors.pink900,

    tertiary50: colors.yellow50,
    tertiary100: colors.yellow100,
    tertiary200: colors.yellow200,
    tertiary300: colors.yellow300,
    tertiary400: colors.yellow400,
    tertiary500: colors.yellow500,
    tertiary600: colors.yellow600,
    tertiary700: colors.yellow700,
    tertiary800: colors.yellow800,
    tertiary900: colors.yellow900,

    info50: colors.blue50,
    info100: colors.blue100,
    info200: colors.blue200,
    info300: colors.blue300,
    info400: colors.blue400,
    info500: colors.blue500,
    info600: colors.blue600,
    info700: colors.blue700,
    info800: colors.blue800,
    info900: colors.blue900,

    success50: colors.green50,
    success100: colors.green100,
    success200: colors.green200,
    success300: colors.green300,
    success400: colors.green400,
    success500: colors.green500,
    success600: colors.green600,
    success700: colors.green700,
    success800: colors.green800,
    success900: colors.green900,

    warning50: colors.yellow50,
    warning100: colors.yellow100,
    warning200: colors.yellow200,
    warning300: colors.yellow300,
    warning400: colors.yellow400,
    warning500: colors.yellow500,
    warning600: colors.yellow600,
    warning700: colors.yellow700,
    warning800: colors.yellow800,
    warning900: colors.yellow900,

    error50: colors.red50,
    error100: colors.red100,
    error200: colors.red200,
    error300: colors.red300,
    error400: colors.red400,
    error500: colors.red500,
    error600: colors.red600,
    error700: colors.red700,
    error800: colors.red800,
    error900: colors.red900,
    errorDisabled: '#f496ae',
  },

  get shadows(): Record<string, string> {
    return {
      focus: `0px 0px 0px 3px ${this.colors.primary300}, inset 0px 0px 0px 1px ${this.colors.primary500}`,
      focusSuccess: `0px 0px 0px 3px ${this.colors.success200}, inset 0px 0px 0px 1px ${this.colors.success500}`,
      focusError: `0px 0px 0px 3px ${this.colors.error200}, inset 0px 0px 0px 1px ${this.colors.error500}`,
      border: `${shadow300}, inset 0px 0px 0px 1px ${this.colors.neutral400}`,
      borderPrimary: `${shadow300}, inset 0px 0px 0px 1px ${this.colors.primary500}`,
      borderError: `${shadow300}, inset 0px 0px 0px 1px ${this.colors.error500}`,
      borderErrorHover: `inset 0px 0px 0px 1px ${this.colors.error600}`,
      borderSuccess: `${shadow300}, inset 0px 0px 0px 1px ${this.colors.success500}`,
      borderSuccessHover: `${shadow300}, inset 0px 0px 0px 1px ${this.colors.success600}`,
      borderHover: `${shadow300}, inset 0px 0px 0px 1px ${this.colors.neutral500}`,
      borderDisabled: `inset 0px 0px 0px 1px ${this.colors.neutral400}`,
      100: '0px 1px 1px rgba(55, 65, 81, 0.06)',
      200: '0px 1px 2px rgba(55, 65, 81, 0.08)',
      300: shadow300,
      400: '0px 0px 4px rgba(55, 65, 81, 0.06), 0px 2px 6px rgba(55, 65, 81, 0.1)',
      500: '0px 8px 16px rgba(55, 65, 81, 0.1), 0px 2px 6px rgba(55, 65, 81, 0.05)',
      600: '0px 12px 25px rgba(55, 65, 81, 0.1), 0px 8px 10px rgba(55, 65, 81, 0.04)',
      700: '0px 24px 50px rgba(55, 65, 81, 0.25)',
      '-50': 'inset 0px 1px 2px rgba(55, 65, 81, 0.06)',
      '-100': 'inset 0px 2px 4px rgba(55, 65, 81, 0.06)',
    };
  },

  fonts: {
    inter: '"Inter", -apple-system, system-ui, sans-serif',
    hack: 'Hack, monospace',
  },

  space: {
    4: '4px',
    8: '8px',
    12: '12px',
    16: '16px',
    24: '24px',
    32: '32px',
    40: '40px',
    48: '48px',
    56: '56px',
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

  media: {
    sm: '@media (min-width: 640px)',
    md: '@media (min-width: 768px)',
    lg: '@media (min-width: 1024px)',
    xl: '@media (min-width: 1280px)',
    '2xl': '@media (min-width: 1536px)',
  },
};
