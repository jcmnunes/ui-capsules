import styled from '@emotion/styled';
import { typography, space, color, layout } from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';
import { ColorProps, SpaceProps, TypographyProps } from '../styledProps';

export interface TextProps extends ColorProps, TypographyProps, SpaceProps {
  textAlign?: 'left' | 'right' | 'center' | 'justify';
  children: string;
}

export const Text = styled('div', { shouldForwardProp })<TextProps>(
  space,
  typography,
  color,
  layout,
  ({ theme, textTransform, textAlign, fontSize }) => ({
    fontFamily: theme.fontFamily,
    lineHeight: theme.lineHeights[fontSize!],
    textTransform,
    textAlign,
  }),
);

Text.defaultProps = {
  fontWeight: 400,
  fontSize: 'body',
  color: 'neutral.700',
  textTransform: 'none',
};
Text.displayName = 'Text';
