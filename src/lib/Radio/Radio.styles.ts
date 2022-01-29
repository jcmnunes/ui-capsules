import { styled } from '../stitches.config';

export const Label = styled('label', {
  fontSize: '$md',
  fontWeight: 500,
  fontFamily: '$inter',
  display: 'inline-flex',
  cursor: 'pointer',
  alignItems: 'center',
  position: 'relative',
  userSelect: 'none',
  color: '$neutral700',

  variants: {
    disabled: {
      true: {
        cursor: 'initial',
        color: '$neutral400',
      },
    },

    size: {
      medium: {
        height: 16,
        pl: 22,
        fontSize: '$md',
      },

      large: {
        height: 20,
        pl: 28,
        fontSize: '$md',
      },
    },
  },
});

export const CustomRadio = styled('span', {
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: '$bg',
  borderRadius: '50%',
  boxShadow: '$border',

  '&:after': {
    content: '""',
    position: 'absolute',
    borderRadius: '50%',
    backgroundColor: 'white',
    display: 'none',
  },

  '&:hover': {
    backgroundColor: '$neutral100',
  },

  variants: {
    disabled: {
      true: {
        backgroundColor: '$neutral300',
        boxShadow: 'none',
        pointerEvents: 'none',
      },
    },

    size: {
      medium: {
        height: 16,
        width: 16,

        '&:after': {
          top: 5,
          left: 5,
          width: 6,
          height: 6,
        },
      },

      large: {
        height: 20,
        width: 20,

        '&:after': {
          top: 6,
          left: 6,
          width: 8,
          height: 8,
        },
      },
    },
  },

  defaultVariants: {
    size: 'medium',
  },
});

export const StyledRadioInput = styled('input', {
  position: 'absolute',
  opacity: 0,
  cursor: 'pointer',
  height: 0,
  width: 0,

  '&[data-focus-visible-added]:focus': {
    '& ~ .uic-custom-radio': {
      outline: 'none',
      boxShadow: '$focus',
    },
  },

  '&:checked': {
    '~ .uic-custom-radio': {
      backgroundColor: '$primary500',
      boxShadow: '$borderPrimary',

      '&:after': {
        display: 'block',
      },
    },

    '&:disabled': {
      '& ~ .uic-custom-radio': {
        opacity: 0.7,
      },
    },
  },
});
