import { styled } from '../stitches.config';

export const Row = styled('tr', {
  '&:nth-child(even)': {
    background: '$neutral100',
  },
});
