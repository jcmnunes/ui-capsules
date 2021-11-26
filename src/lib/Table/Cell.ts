import { styled } from '../stitches.config';

export const Cell = styled('td', {
  padding: '8px 16px',

  variants: {
    textAlign: {
      left: {
        textAlign: 'left',
      },

      center: {
        textAlign: 'center',
      },

      right: {
        textAlign: 'right',
      },
    },

    noWrap: {
      true: {
        whiteSpace: 'nowrap',
      },
    },
  },

  defaultVariants: {
    textAlign: 'left',
    noWrap: 'false',
  },
});
