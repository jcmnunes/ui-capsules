import React from 'react';
import styled from '@emotion/styled';
import { typography, space, color, layout, variant } from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';
import { ColorProps, SpaceProps, TypographyProps } from '../styledProps';

export type TextVariant = 'smallCaps' | 'label' | 'helper' | 'tabular';

export interface TextProps extends ColorProps, TypographyProps, SpaceProps {
  textAlign?: 'left' | 'right' | 'center' | 'justify';
  isTruncated?: boolean;
  variant?: TextVariant;
}

const truncatedStyle: React.CSSProperties = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

export const Text = styled('div', { shouldForwardProp })<TextProps>(
  space,
  typography,
  color,
  layout,
  ({ theme, textTransform, textAlign, fontSize, isTruncated }) => ({
    fontFamily: theme.fontFamily,
    lineHeight: theme.lineHeights[fontSize!],
    textTransform,
    textAlign,
    ...(isTruncated ? truncatedStyle : {}),
  }),

  variant<TypographyProps & ColorProps, TextVariant>({
    variants: {
      smallCaps: {
        fontWeight: 600,
        fontSize: 'small',
        lineHeight: 'small',
        color: 'neutral.500',
        letterSpacing: 'wide',
        textTransform: 'uppercase',
      },

      label: {
        fontWeight: 600,
        fontSize: 'body',
        lineHeight: 'body',
        color: 'neutral.600',
      },

      tabular: {
        fontVariantNumeric: 'tabular-nums',
      },

      helper: {
        fontWeight: 500,
        fontSize: 'small',
        lineHeight: 'small',
        color: 'neutral.500',
      },
    },
  }),
);

Text.displayName = 'Text';
Text.defaultProps = {
  fontWeight: 400,
  fontSize: 'body',
  color: 'neutral.700',
  textTransform: 'none',
  variant: undefined,
};
