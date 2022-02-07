import React, { ComponentPropsWithRef, forwardRef } from 'react';
import { styled } from '../stitches.config';
import { CSSProp } from '../types';
import { darkTheme } from '../darkTheme';

const StyledAnchor = styled('a', {
  color: '$primary500',
  cursor: 'pointer',
  fontWeight: 500,
  fontSize: '$md',
  lineHeight: '$md',

  '&:hover': {
    color: '$primary700',

    [`.${darkTheme} &`]: {
      color: '$primary600',
    },
  },

  '&[data-focus-visible-added]:focus': {
    outline: '2px auto #4098d7',
  },
});

interface Props extends ComponentPropsWithRef<'a'>, CSSProp {
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
