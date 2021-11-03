import { styled } from '../stitches.config';

export const Label = styled('label', {
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  userSelect: 'none',
  cursor: 'pointer',
  fontWeight: 500,
  color: '$neutral700',

  variants: {
    disabled: {
      true: {
        color: '$neutral400',
        cursor: 'initial',
      },
    },

    size: {
      medium: {
        height: 18,
        fontSize: '$2',
        paddingLeft: 24,
        lineHeight: '18px',
      },

      large: {
        height: 25,
        fontSize: '$2',
        paddingLeft: 35,
        lineHeight: '25px',
      },
    },
  },
});

export const CustomCheckbox = styled('span', {
  position: 'absolute',
  borderRadius: '$medium',
  top: 0,
  left: 0,
  backgroundColor: '$bg',
  borderWidth: 1,
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '$border',

  '&:hover': {
    backgroundColor: '$neutral50',
  },

  '&:after': {
    content: '""',
    position: 'absolute',
    display: 'none',
    border: 'solid white',
    transform: 'rotate(45deg)',
  },

  variants: {
    disabled: {
      true: {
        background: '$neutral300',
        boxShadow: 'none',
        pointerEvents: 'none',
      },
    },

    size: {
      medium: {
        width: 18,
        height: 18,

        '&:after': {
          left: '6px',
          top: '3px',
          width: 6,
          height: 10,
          borderWidth: '0 2px 2px 0',
        },
      },

      large: {
        width: 24,
        height: 24,

        '&:after': {
          top: 4,
          left: 8,
          width: 8,
          height: 13,
          borderWidth: '0 3px 3px 0',
        },
      },
    },
  },
});

export const StyledInput = styled('input', {
  position: 'absolute',
  opacity: 0,
  cursor: 'pointer',
  height: 0,
  width: 0,

  '&[data-focus-visible-added]:focus': {
    '& ~ .uic-custom-checkbox': {
      outline: 'none',
      boxShadow: '$focus',
    },
  },

  '&:checked': {
    '& ~ .uic-custom-checkbox': {
      backgroundColor: '$primary500',
      borderColor: '$primary500',
      boxShadow: '$borderPrimary',

      '&:after': {
        display: 'block',
      },
    },

    '&:disabled': {
      '& ~ .uic-custom-checkbox': {
        opacity: 0.7,
      },
    },
  },
});
