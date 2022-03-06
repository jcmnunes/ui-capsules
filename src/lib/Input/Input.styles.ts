import { styled } from '../stitches.config';

export type InputVariant = 'error' | 'success';

// Hide spin box for Input type number
export const Wrapper = styled('div', {
  [`input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button`]: {
    '-webkit-appearance': 'none',
    margin: 0,
  },

  'input[type="number"]': {
    '-moz-appearance': 'textfield',
  },

  width: '100%',
});

export const InputWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
  position: 'relative',
});

export const IconWrapper = styled('div', {
  position: 'absolute',
  zIndex: 3,
  color: '$neutral500',
  pointerEvents: 'none',

  variants: {
    size: {
      small: {
        top: 8,
        left: 'auto',
        right: 6,
      },

      medium: {
        top: 8,
        left: 'auto',
        right: 8,
      },

      large: {
        top: 10,
        left: 'auto',
        right: 8,
      },
    },

    position: {
      left: {},
      right: {},
    },
  },

  compoundVariants: [
    {
      size: 'small',
      position: 'left',
      css: {
        left: 6,
        right: 'auto',
      },
    },
    {
      size: 'medium',
      position: 'left',
      css: {
        left: 8,
        right: 'auto',
      },
    },
    {
      size: 'large',
      position: 'left',
      css: {
        left: 8,
        right: 'auto',
      },
    },
  ],
});

export const StyledInput = styled('input', {
  fontFamily: '$inter',
  background: '$bg',
  color: '$neutral700',
  borderRadius: '$medium',
  border: 'none',
  width: '100%',
  boxShadow: '$border',
  '-webkit-appearance': 'none',
  appearance: 'none',

  '&::placeholder': {
    color: '$neutral400',
  },

  '&:hover': {
    boxShadow: '$borderHover',
  },

  '&:focus': {
    outline: 'none',
    boxShadow: '$focus',
  },

  '&:disabled': {
    color: '$neutral400',
    background: '$neutral100',
    borderColor: '$neutral300',
    pointerEvents: 'none',
  },

  variants: {
    variant: {
      success: {
        boxShadow: '$borderSuccess',

        '&:hover': {
          boxShadow: '$borderSuccessHover',
        },

        '&:focus': {
          outline: 'none',
          boxShadow: '$focusSuccess',
        },
      },

      error: {
        boxShadow: '$borderError',

        '&:hover': {
          boxShadow: '$borderErrorHover',
        },

        '&:focus': {
          outline: 'none',
          boxShadow: '$focusError',
        },
      },
    },

    inputSize: {
      small: {
        height: 32,
        fontSize: '$sm',
        pr: 8,
        pl: 8,
      },

      medium: {
        height: 36,
        fontSize: '$md',
        pr: 8,
        pl: 8,
      },

      large: {
        height: 40,
        fontSize: '$lg',
        pr: 8,
        pl: 8,
      },
    },

    hasLeftIcon: {
      true: {},
    },

    hasRightIcon: {
      true: {},
    },
  },

  compoundVariants: [
    {
      inputSize: 'small',
      hasLeftIcon: true,
      css: {
        pl: 26,
      },
    },
    {
      inputSize: 'medium',
      hasLeftIcon: true,
      css: {
        pl: 34,
      },
    },
    {
      inputSize: 'large',
      hasLeftIcon: true,
      css: {
        pl: 38,
      },
    },
    {
      inputSize: 'small',
      hasRightIcon: true,
      css: {
        pr: 26,
      },
    },
    {
      inputSize: 'medium',
      hasRightIcon: true,
      css: {
        pr: 34,
      },
    },
    {
      inputSize: 'large',
      hasRightIcon: true,
      css: {
        pr: 38,
      },
    },
  ],
});

export const InputIcon = styled('div', {});
