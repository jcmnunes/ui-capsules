import { Input } from '../Input/Input';
import { styled } from 'styled-components';

export const StyledEditableInput = styled.form({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  position: 'relative',
});

interface ValueProps {
  $canEdit?: boolean;
  $size?: 'small' | 'medium' | 'large';
}

export const Value = styled.button<ValueProps>(
  ({ theme, $canEdit }) => ({
    display: 'flex',
    borderRadius: theme.radii.medium,
    userSelect: 'text',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    cursor: 'text',
    width: '100%',
    textAlign: 'left',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    transition: 'background-color 0.2s ease',

    '&:hover': {
      backgroundColor: $canEdit ? theme.colors.neutral100 : 'initial',
    },

    '&[data-focus-visible-added]:focus': {
      outline: 'none',
      boxShadow: theme.shadows.focus,
    },
  }),

  ({ theme, $size }) => {
    switch ($size) {
      case 'small': {
        return {
          padding: '2px 8px',
          fontSize: theme.fontSizes.sm,
          height: 32,
        };
      }
      case 'medium': {
        return {
          padding: '4px 8px',
          fontSize: theme.fontSizes.md,
          height: 32,
        };
      }
      case 'large': {
        return {
          padding: '12px 8px',
          fontSize: theme.fontSizes.lg,
          height: 40,
        };
      }
      default: {
        return {};
      }
    }
  },
);

export const StyledInput = styled(Input)({
  width: '100%',
  flex: '1',
  flexDirection: 'row',
});

export const Buttons = styled.div({
  position: 'absolute',
  right: 0,
  bottom: -30,
});

export const Text = styled.div({
  width: 0,
  flex: 1,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});
