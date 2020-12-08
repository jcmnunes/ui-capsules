import styled from '@emotion/styled';
import { variant } from 'styled-system';
import { Button } from '../Button/Button';
import { ButtonSize, ButtonVariant } from '../Button/Button.styles';
import { LayoutProps, PaddingProps } from '../styledProps';

export interface StyledIconButtonProps {
  variant: ButtonVariant;
  size: ButtonSize;
}

export const StyledIconButton = styled(Button)<StyledIconButtonProps>(
  variant<LayoutProps & PaddingProps, ButtonSize>({
    prop: 'size',
    variants: {
      small: {
        height: 24,
        width: 24,
        p: 0,
      },
      medium: {
        height: 32,
        width: 32,
        p: 0,
      },
      large: {
        height: 40,
        width: 40,
        p: 0,
      },
    },
  }),
);
