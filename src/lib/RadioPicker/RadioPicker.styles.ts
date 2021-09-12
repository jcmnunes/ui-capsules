import styled from '@emotion/styled';
import { Box } from '../Box/Box';

interface RadioPickerWrapperProps {
  disabled?: boolean;
  checked?: boolean;
  hasFocus: boolean;
}

export const RadioPickerWrapper = styled(Box)<RadioPickerWrapperProps>(
  ({ theme, checked, hasFocus }) => ({
    display: 'flex',
    alignItems: 'center',
    borderRadius: theme.radii.medium,
    borderWidth: '1px',
    borderColor: checked ? theme.colors.primary['300'] : theme.colors.neutral['300'],
    borderStyle: 'solid',
    backgroundColor: checked ? theme.colors.primary['50'] : theme.colors.bg,
    color: checked ? theme.colors.primary['600'] : theme.colors.neutral['700'],
    boxShadow: hasFocus
      ? `0 0 0 2px ${theme.colors.primary['200']}`
      : '0px 1px 2px rgba(55, 65, 81, 0.08)',
    position: 'relative',
    padding: 16,

    '&:hover': {
      backgroundColor: checked ? theme.colors.primary['100'] : theme.colors.neutral['50'],
    },
  }),
);
