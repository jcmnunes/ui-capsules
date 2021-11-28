import { styled } from '../stitches.config';
import { darkTheme } from '../darkTheme';

export type ButtonVariant = 'primary' | 'secondary' | 'error' | 'ghostGray' | 'ghost' | 'link';
export type ButtonSize = 'small' | 'medium' | 'large';

export const StyledButton = styled('button', {
  fontFamily: '$inter',
  borderRadius: '$medium',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: 1,
  pointerEvents: 'initial',
  padding: '0 12px',
  position: 'relative',
  fontWeight: 500,
  display: 'inline-flex',
  appearance: 'none',
  userSelect: 'none',
  whiteSpace: 'nowrap',
  outline: 'none',
  borderWidth: '1px',
  borderStyle: 'solid',
  verticalAlign: 'middle',
  width: 'auto',
  border: 'none',

  '&[data-focus-visible-added]:focus': {
    boxShadow: '$focus',
    zIndex: 1,
  },

  '&:disabled': {
    opacity: 0.5,
    pointerEvents: 'none',
  },

  variants: {
    variant: {
      primary: {
        background: '$primary500',
        borderColor: '$primary500',
        color: '$white',

        [`.${darkTheme} &`]: {
          background: '$primary400',
          borderColor: '$primary400',
        },

        '&:hover': {
          background: '$primary600',
          borderColor: '$primary600',

          [`.${darkTheme} &`]: {
            background: '$primary500',
            borderColor: '$primary500',
          },
        },

        '&:active': {
          background: '$primary700',
          borderColor: '$primary700',

          [`.${darkTheme} &`]: {
            background: '$primary400',
            borderColor: '$primary400',
          },
        },
      },

      secondary: {
        background: '$bg',
        border: 'none',
        color: '$neutral600',
        boxShadow: '$border',

        '&[data-focus-visible-added]:focus': {
          boxShadow: '$focus',
          zIndex: 1,
        },

        '&:hover': {
          background: '$neutral100',
        },

        '&:active': {
          background: '$neutral200',
        },

        '&:disabled': {
          boxShadow: '$borderDisabled',
        },
      },

      error: {
        background: '$error500',
        borderColor: '$error500',
        color: '$white',

        [`.${darkTheme} &`]: {
          background: '$error400',
          borderColor: '$error400',
        },

        '&[data-focus-visible-added]:focus': {
          boxShadow: '$focusError',
          zIndex: 1,
        },

        '&:hover': {
          background: '$error600',
          borderColor: '$error600',

          [`.${darkTheme} &`]: {
            background: '$error500',
            borderColor: '$error500',
          },
        },

        '&:active': {
          background: '$error700',
          borderColor: '$error700',

          [`.${darkTheme} &`]: {
            background: '$error400',
            borderColor: '$error400',
          },
        },
      },

      ghost: {
        background: 'transparent',
        color: '$primary500',
        border: 'none',

        '&:focus': {
          background: 'transparent',
        },

        '&:hover': {
          background: '$primary100',
          color: '$primary600',
        },

        '&:active': {
          background: '$primary200',
          color: '$primary600',
        },
      },

      ghostGray: {
        background: 'transparent',
        color: '$neutral600',
        border: 'none',

        '&:focus': {
          background: 'transparent',
        },

        '&:hover': {
          background: '$neutral200',
        },

        '&:active': {
          background: '$neutral300',
        },
      },

      link: {
        padding: '0 2px',
        color: '$primary500',
        borderRadius: 'none',
        lineHeight: '$2',
        height: 'auto',
        border: 'none',

        '&:hover': {
          color: '$primary600',
        },
      },
    },

    size: {
      small: {
        height: 24,
        fontSize: '$1',
        lineHeight: '24px',
        paddingLeft: '$1',
        paddingRight: '$1',
      },

      medium: {
        height: 36,
        fontSize: '$2',
        lineHeight: '36px',
        paddingLeft: '$4',
        paddingRight: '$4',
      },

      large: {
        height: 48,
        fontSize: '$2',
        lineHeight: '48px',
        paddingLeft: '$5',
        paddingRight: '$5',
      },
    },
  },
});
