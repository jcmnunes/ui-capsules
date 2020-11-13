import React from 'react';
import styled from 'styled-components';
import { typography, space, color, layout } from 'styled-system';
import { ColorProps, SpaceProps, TypographyProps } from '../styledProps';

export interface TextProps extends ColorProps, TypographyProps, SpaceProps {
  textAlign?: 'left' | 'right' | 'center' | 'justify';
  children: string;
}

const StyledText = styled.div<TextProps>(
  space,
  typography,
  color,
  layout,
  ({ theme, textTransform, textAlign, fontSize }) => ({
    fontFamily: theme.fontFamily,
    lineHeight: theme.lineHeights[fontSize!],
    textTransform,
    textAlign,
    '& strong': {
      color: 'inherit',
      fontWeight: 600,
    },
  }),
);

export const Text: React.FC<TextProps> = props => <StyledText {...props} />;

Text.defaultProps = {
  fontWeight: 400,
  fontSize: 'body',
  color: 'neutral.700',
  textTransform: 'none',
};

Text.displayName = 'Text';
