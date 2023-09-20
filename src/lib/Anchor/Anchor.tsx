import React, { ComponentPropsWithRef, forwardRef } from 'react';
import { styled } from 'styled-components';

const StyledAnchor = styled.a(({ theme }) => ({
  color: theme.colors.primary500,
  cursor: 'pointer',
  fontWeight: 500,
  fontSize: theme.fontSizes.md,
  lineHeight: theme.lineHeights.md,

  '&:hover': {
    color: theme.colors.primary700,

    '.darkTheme &': {
      color: theme.colors.primary600,
    },
  },

  '&[data-focus-visible-added]:focus': {
    outline: '2px auto #4098d7',
  },
}));

interface Props extends ComponentPropsWithRef<'a'> {
  href: string;
  children: string;
}

export const Anchor = forwardRef<HTMLAnchorElement, Props>(({ href, children, ...rest }, ref) => {
  return (
    <StyledAnchor ref={ref} href={href} target="_blank" rel="noreferrer noopener" {...rest}>
      {children}
    </StyledAnchor>
  );
});

Anchor.displayName = 'Anchor';
