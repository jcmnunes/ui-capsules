import { styled } from '../stitches.config';
import { Box } from '../Box/Box';

export const RadioPickerWrapper = styled(Box, {
  display: 'flex',
  alignItems: 'center',
  borderRadius: '$medium',
  borderWidth: '1px',
  borderColor: '$neutral300',
  borderStyle: 'solid',
  backgroundColor: '$bg',
  color: '$neutral700',
  boxShadow: '0px 1px 2px rgba(55, 65, 81, 0.08)',
  position: 'relative',
  padding: 16,

  '&:hover': {
    backgroundColor: '$neutral50',
  },

  variants: {
    checked: {
      true: {
        color: '$primary600',
        borderColor: '$primary300',
        backgroundColor: '$primary50',

        '&:hover': {
          backgroundColor: '$primary100',
        },
      },
    },

    hasFocus: {
      true: {
        boxShadow: '$focus',
      },
    },
  },
});
