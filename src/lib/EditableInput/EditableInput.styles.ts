import styled from '@emotion/styled/macro';
import { ElementSize } from '../types';
import { variant } from 'styled-system';
import { LayoutProps, PaddingProps, TypographyProps } from '../styledProps';
import { Input, Props as InputProps } from '../Input/Input';

export const StyledEditableInput = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
`;

export interface ValueProps {
  size: ElementSize;
  canEdit: boolean;
}

export const Value = styled.button<ValueProps>(
  ({ theme, canEdit }) => ({
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
      backgroundColor: canEdit ? theme.colors.neutral['100'] : 'initial',
    },

    '&:focus': {
      outline: 'none',
      boxShadow: `0 0 0 2px ${theme.colors.primary['100']}`,
    },
  }),

  variant<LayoutProps & PaddingProps & TypographyProps, ElementSize>({
    prop: 'size',
    variants: {
      small: {
        px: 5,
        py: 2,
        fontSize: 'small',
        height: 24,
      },
      medium: {
        px: 9,
        py: 4,
        fontSize: 'body',
        height: 32,
      },
      large: {
        px: 13,
        py: 12,
        fontSize: 'h6',
        height: 48,
      },
    },
  }),
);

export const StyledInput = styled(Input)<InputProps>`
  width: 100%;
  flex: 1;
  flex-direction: row;
`;

export const Buttons = styled.div`
  position: absolute;
  right: 0;
  bottom: -30px;
`;

export const Text = styled.div`
  width: 0;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
