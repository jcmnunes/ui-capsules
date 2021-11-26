import { styled } from '../stitches.config';

export const IllustratedIconWrapper = styled('span', {
  outline: 'none',
  pointerEvents: 'none',
  cursor: 'initial',

  '&[data-focus-visible-added]:focus': {
    boxShadow: '$focus',
    zIndex: 1,
  },

  variants: {
    isClickable: {
      true: {
        cursor: 'pointer',
        pointerEvents: 'initial',
      },
    },
  },
});
