import { createTheme } from './stitches.config';

export const darkTheme = createTheme({
  colors: {
    bg: '#18191B',

    neutral50: '$gray900',
    neutral100: '$gray800',
    neutral200: '$gray700',
    neutral300: '$gray600',
    neutral400: '$gray500',
    neutral500: '$gray400',
    neutral600: '$gray300',
    neutral700: '$gray200',
    neutral800: '$gray100',
    neutral900: '$gray50',

    primary50: '$blue900',
    primary100: '$blue800',
    primary200: '$blue700',
    primary300: '$blue600',
    primary400: '$blue500',
    primary500: '$blue400',
    primary600: '$blue300',
    primary700: '$blue200',
    primary800: '$blue100',
    primary900: '$blue50',

    error50: '$red900',
    error100: '$red800',
    error200: '$red700',
    error300: '$red600',
    error400: '$red500',
    error500: '$red400',
    error600: '$red300',
    error700: '$red200',
    error800: '$red100',
    error900: '$red50',

    warning50: '$yellow900',
    warning100: '$yellow800',
    warning200: '$yellow700',
    warning300: '$yellow600',
    warning400: '$yellow500',
    warning500: '$yellow400',
    warning600: '$yellow300',
    warning700: '$yellow200',
    warning800: '$yellow100',
    warning900: '$yellow50',

    success50: '$green900',
    success100: '$green800',
    success200: '$green700',
    success300: '$green600',
    success400: '$green500',
    success500: '$green400',
    success600: '$green300',
    success700: '$green200',
    success800: '$green100',
    success900: '$green50',

    info50: '$blue900',
    info100: '$blue800',
    info200: '$blue700',
    info300: '$blue600',
    info400: '$blue500',
    info500: '$blue400',
    info600: '$blue300',
    info700: '$blue200',
    info800: '$blue100',
    info900: '$blue50',

    secondary50: '$pink900',
    secondary100: '$pink800',
    secondary200: '$pink700',
    secondary300: '$pink600',
    secondary400: '$pink500',
    secondary500: '$pink400',
    secondary600: '$pink300',
    secondary700: '$pink200',
    secondary800: '$pink100',
    secondary900: '$pink50',
  },

  shadows: {
    border: '$300, inset 0px 0px 0px 1px $colors$neutral500',
    borderHover: '$300, inset 0px 0px 0px 1px $colors$neutral400',
    borderPrimary: '$300, inset 0px 0px 0px 1px $colors$primary400',
    borderError: '$300, inset 0px 0px 0px 1px $colors$error400',
    borderErrorHover: '$300, inset 0px 0px 0px 1px $colors$error300',
    borderSuccess: '$300, inset 0px 0px 0px 1px $colors$success400',
    borderSuccessHover: '$300, inset 0px 0px 0px 1px $colors$success300',
  },
});
