import { styled } from '../stitches.config';

export const HeaderCell = styled('th', {
  height: '38px',
  verticalAlign: 'middle',
  padding: '0 18px',
  fontWeight: 600,

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
