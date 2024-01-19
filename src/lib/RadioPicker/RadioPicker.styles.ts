import { styled } from 'styled-components';
import { Text } from '../Text/Text';

interface RadioPickerWrapperProps {
  $checked?: boolean;
  $hasFocus: boolean;
}

export const RadioPickerWrapper = styled.label<RadioPickerWrapperProps>(
  ({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    borderRadius: theme.radii.medium,
    borderWidth: '1px',
    borderColor: theme.colors.neutral300,
    borderStyle: 'solid',
    backgroundColor: theme.colors.bg,
    color: theme.colors.neutral700,
    boxShadow: '0px 1px 2px rgba(55, 65, 81, 0.08)',
    position: 'relative',
    padding: 16,

    '&:hover': {
      backgroundColor: theme.colors.neutral50,
    },
  }),

  ({ $checked, theme }) => {
    if ($checked) {
      return {
        color: theme.colors.primary600,
        borderColor: theme.colors.primary300,
        backgroundColor: theme.colors.primary50,

        '&:hover': {
          backgroundColor: theme.colors.primary100,
        },
      };
    }
  },

  ({ $hasFocus, theme }) => {
    if ($hasFocus) {
      return {
        boxShadow: theme.shadows.focus,
      };
    }
  },
);

interface HelpTextProps {
  checked: boolean;
}

export const HelpText = styled(Text)<HelpTextProps>(({ checked, theme }) => ({
  color: checked ? theme.colors.primary600 : theme.colors.neutral600,
}));
