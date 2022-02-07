import { styled } from '../stitches.config';

export const HelpText = styled('div', {
  fontSize: '$sm',
  lineHeight: '$sm',
  color: '$neutral500',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  margin: 4,

  variants: {
    variant: {
      success: {
        color: '$success600',
      },

      error: {
        color: '$error700',
      },
    },
  },
});
