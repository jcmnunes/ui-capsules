import { styled } from '../stitches.config';

export const ModalFooter = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  background: '$bg',
  padding: '16px 24px',

  '& > *': {
    marginLeft: 8,
  },
});
