import { styled } from '../stitches.config';
import RTooltip from '@reach/tooltip';
import { darkTheme } from '../darkTheme';

export const StyledTooltip = styled(RTooltip, {
  padding: '4px 8px',
  background: '$neutral700',
  color: '$white',
  fontSize: '$sm',
  lineHeight: '$sm',
  fontWeight: 500,
  borderRadius: '$medium',
  boxShadow: '$300',
  maxWidth: '250px',
  border: 'none',
  whiteSpace: 'normal',

  [`.${darkTheme} &`]: {
    background: '$neutral100',
    border: `1px solid $neutral200`,
    color: '$neutral600',
  },
});
