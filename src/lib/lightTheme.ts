import { createTheme } from './stitches.config';

export const lightTheme = createTheme({
  colors: {
    bg: '$white',

    neutral50: '$gray50',
    neutral100: '$gray100',
    neutral200: '$gray200',
    neutral300: '$gray300',
    neutral400: '$gray400',
    neutral500: '$gray500',
    neutral600: '$gray600',
    neutral700: '$gray700',
    neutral800: '$gray800',
    neutral900: '$gray900',

    primary50: '$blue50',
    primary100: '$blue100',
    primary200: '$blue200',
    primary300: '$blue300',
    primary400: '$blue400',
    primary500: '$blue500',
    primary600: '$blue600',
    primary700: '$blue700',
    primary800: '$blue800',
    primary900: '$blue900',

    error50: '$red50',
    error100: '$red100',
    error200: '$red200',
    error300: '$red300',
    error400: '$red400',
    error500: '$red500',
    error600: '$red600',
    error700: '$red700',
    error800: '$red800',
    error900: '$red900',

    warning50: '$yellow50',
    warning100: '$yellow100',
    warning200: '$yellow200',
    warning300: '$yellow300',
    warning400: '$yellow400',
    warning500: '$yellow500',
    warning600: '$yellow600',
    warning700: '$yellow700',
    warning800: '$yellow800',
    warning900: '$yellow900',

    success50: '$green50',
    success100: '$green100',
    success200: '$green200',
    success300: '$green300',
    success400: '$green400',
    success500: '$green500',
    success600: '$green600',
    success700: '$green700',
    success800: '$green800',
    success900: '$green900',

    info50: '$blue50',
    info100: '$blue100',
    info200: '$blue200',
    info300: '$blue300',
    info400: '$blue400',
    info500: '$blue500',
    info600: '$blue600',
    info700: '$blue700',
    info800: '$blue800',
    info900: '$blue900',

    secondary50: '$pink50',
    secondary100: '$pink100',
    secondary200: '$pink200',
    secondary300: '$pink300',
    secondary400: '$pink400',
    secondary500: '$pink500',
    secondary600: '$pink600',
    secondary700: '$pink700',
    secondary800: '$pink800',
    secondary900: '$pink900',
  },

  shadows: {
    border: '$300, inset 0px 0px 0px 1px $colors$neutral400',
    borderPrimary: '$300, inset 0px 0px 0px 1px $colors$primary500',
    borderError: '$300, inset 0px 0px 0px 1px $colors$error500',
    borderErrorHover: '$300, inset 0px 0px 0px 1px $colors$error600',
    borderSuccess: '$300, inset 0px 0px 0px 1px $colors$success500',
    borderSuccessHover: '$300, inset 0px 0px 0px 1px $colors$success600',
    borderHover: '$300, inset 0px 0px 0px 1px $colors$neutral500',
  },
});
