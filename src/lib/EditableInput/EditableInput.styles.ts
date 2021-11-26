import { Input } from '../Input/Input';
import { styled } from '../stitches.config';

export const StyledEditableInput = styled('form', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  position: 'relative',
});

export const Value = styled('button', {
  display: 'flex',
  borderRadius: '$medium',
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
    backgroundColor: 'initial',
  },

  '&[data-focus-visible-added]:focus': {
    outline: 'none',
    boxShadow: '$focus',
  },

  variants: {
    canEdit: {
      true: {
        '&:hover': {
          backgroundColor: '$neutral100',
        },
      },
    },

    size: {
      small: {
        px: 8,
        py: 2,
        fontSize: '$1',
        height: 32,
      },

      medium: {
        px: 8,
        py: 4,
        fontSize: '$2',
        height: 32,
      },

      large: {
        px: 8,
        py: 12,
        fontSize: '$2',
        height: 40,
      },
    },
  },
});

export const StyledInput = styled(Input, {
  width: '100%',
  flex: '1',
  flexDirection: 'row',
});

export const Buttons = styled('div', {
  position: 'absolute',
  right: 0,
  bottom: -30,
});

export const Text = styled('div', {
  width: 0,
  flex: 1,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});
