import { styled } from '../stitches.config';
import { darkTheme } from '../darkTheme';
import { Icon } from '../Icon/Icon';

export const LeftIcon = styled(Icon, {
  position: 'absolute',
  color: '$white',
  left: 3,
});

export const RightIcon = styled(Icon, {
  position: 'absolute',
  color: '$white',
  right: 3,
});

export const StyledSwitch = styled('span', {
  display: 'inline-block',
  background: '$neutral500',
  borderRadius: '$full',
  position: 'relative',

  [`.${darkTheme} &`]: {
    background: '$neutral400',
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    borderRadius: '100%',
    top: '50%',
    left: '25%',
    background: '$white',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    boxShadow: '$300',
    willChange: 'left',
    transition: 'left 0.1s ease',
  },

  variants: {
    size: {
      medium: {
        width: '32px',
        height: '16px',

        '&::after': {
          width: '12px',
          height: '12px',
        },

        [`& ${LeftIcon}`]: {
          left: 3,
        },

        [`& ${RightIcon}`]: {
          right: 3,
        },
      },

      large: {
        width: '48px',
        height: '24px',

        '&::after': {
          width: '20px',
          height: '20px',
        },

        [`& ${LeftIcon}`]: {
          left: 6,
        },

        [`& ${RightIcon}`]: {
          right: 6,
        },
      },
    },
  },
});

export const Icons = styled('div', {
  position: 'absolute',
  width: '100%',
  height: '100%',
  zIndex: 1,
  color: '$white',
  display: 'flex',
  alignItems: 'center',
  boxSizing: 'border-box',
});

export const StyledToggle = styled('label', {
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  position: 'relative',
  verticalAlign: 'bottom',

  input: {
    position: 'absolute',
    opacity: 0,
    zIndex: -1,

    '&:disabled': {
      [`& ~ ${StyledSwitch}`]: {
        background: '$neutral200',
        '&:after': {
          background: '$neutral400',
        },

        [`& ${Icons}`]: {
          color: '$neutral400',
        },
      },
    },

    '&:checked:not(:disabled)': {
      [`& ~ ${StyledSwitch}`]: {
        background: '$primary500',
      },
    },

    '&[data-focus-visible-added]:focus': {
      [`& ~ ${StyledSwitch}`]: {
        boxShadow: '$focus',
      },
    },

    '&:checked': {
      [`& ~ ${StyledSwitch}:after`]: {
        left: '75%',
      },
      [`& ~ ${StyledSwitch}`]: {
        [`& ${Icons}`]: {
          '&:before': {
            opacity: 1,
          },
          '&:after': {
            opacity: 0,
          },
        },
      },
    },
  },

  variants: {
    disabled: {
      true: {
        cursor: 'initial',

        [`& ${LeftIcon}`]: {
          opacity: 0.3,
        },

        [`& ${RightIcon}`]: {
          opacity: 0.3,
        },
      },
    },
  },
});
