import { styled } from 'styled-components';

export const Title = styled.h1(({ theme }) => ({
  color: theme.colors.neutral700,
  fontSize: theme.fontSizes['5xl'],
  lineHeight: theme.lineHeights['5xl'],
  fontWeight: 700,
  marginBottom: theme.space[16],
}));

export const SubTitle = styled.h2(({ theme }) => ({
  color: theme.colors.neutral700,
  fontSize: theme.fontSizes['2xl'],
  fontWeight: 700,
  marginTop: theme.space[32],
  marginBottom: theme.space[16],
}));

export const SubSubTitle = styled.h3(({ theme }) => ({
  color: theme.colors.neutral700,
  fontSize: theme.fontSizes.md,
  fontWeight: 700,
  marginTop: theme.space[16],
  marginBottom: theme.space[8],
}));

export const Paragraph = styled.p(({ theme }) => ({
  color: theme.colors.neutral600,
  fontSize: theme.fontSizes.md,
  lineHeight: theme.lineHeights.md,
}));
