import RTooltip from '@reach/tooltip';
import { styled } from 'styled-components';

export const StyledTooltip = styled(RTooltip)(({ theme }) => ({
  padding: '4px 8px',
  background: theme.colors.neutral700,
  color: theme.colors.white,
  fontSize: theme.fontSizes.sm,
  lineHeight: theme.lineHeights.sm,
  fontWeight: 500,
  borderRadius: theme.radii.medium,
  boxShadow: theme.shadows['300'],
  maxWidth: '250px',
  border: 'none',
  whiteSpace: 'normal',

  '.darkTheme &': {
    background: theme.colors.neutral200,
    color: theme.colors.neutral600,
  },
}));
