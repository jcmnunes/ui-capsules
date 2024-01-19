import React from 'react';
import { CSSProp, styled } from 'styled-components';

export type TextVariant = 'smallCaps' | 'label' | 'helper';

const truncatedStyle: React.CSSProperties = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: 'block',
};

export interface TextProps {
  color?: string;
  isTruncated?: boolean;
  variant?: TextVariant;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  css?: CSSProp;
}

export const Text = styled.span<TextProps>(
  ({ theme, isTruncated }) => ({
    fontFamily: theme.fonts.inter,
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 400,
    fontSize: theme.fontSizes.md,
    lineHeight: theme.lineHeights.md,
    color: theme.colors.neutral700,
    display: 'block',
    ...(isTruncated && truncatedStyle),
  }),

  ({ theme, variant }) => {
    switch (variant) {
      case 'smallCaps':
        return {
          fontWeight: 600,
          fontSize: theme.fontSizes.sm,
          lineHeight: theme.lineHeights.sm,
          color: theme.colors.neutral500,
          letterSpacing: theme.letterSpacings.wide,
          textTransform: 'uppercase',
        };
      case 'label':
        return {
          fontWeight: 600,
          fontSize: theme.fontSizes.sm,
          lineHeight: theme.lineHeights.sm,
          display: 'inline-block',
        };
      case 'helper':
        return {
          fontWeight: 500,
          fontSize: theme.fontSizes.sm,
          lineHeight: theme.lineHeights.sm,
          color: theme.colors.neutral500,
        };
      default:
        return {};
    }
  },

  ({ theme, size }) => {
    switch (size) {
      case 'sm':
        return {
          fontSize: theme.fontSizes.sm,
          lineHeight: theme.lineHeights.sm,
        };
      case 'md':
        return {
          fontSize: theme.fontSizes.md,
          lineHeight: theme.lineHeights.md,
        };
      case 'lg':
        return {
          fontSize: theme.fontSizes.lg,
          lineHeight: theme.lineHeights.lg,
        };
      case 'xl':
        return {
          fontSize: theme.fontSizes.xl,
          lineHeight: theme.lineHeights.xl,
        };
      case '2xl':
        return {
          fontSize: theme.fontSizes['2xl'],
          lineHeight: theme.lineHeights['2xl'],
        };
      case '3xl':
        return {
          fontSize: theme.fontSizes['3xl'],
          lineHeight: theme.lineHeights['3xl'],
        };
      case '4xl':
        return {
          fontSize: theme.fontSizes['4xl'],
          lineHeight: theme.lineHeights['4xl'],
        };
      case '5xl':
        return {
          fontSize: theme.fontSizes['5xl'],
          lineHeight: theme.lineHeights['5xl'],
        };
      case '6xl':
        return {
          fontSize: theme.fontSizes['6xl'],
          lineHeight: theme.lineHeights['6xl'],
        };
    }
  },

  ({ color }) => {
    if (color)
      return {
        color,
      };
  },
);

Text.displayName = 'Text';
Text.defaultProps = {
  variant: undefined,
};
