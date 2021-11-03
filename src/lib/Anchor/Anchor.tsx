import React, { ComponentPropsWithRef, forwardRef } from 'react';
import { styled } from '../stitches.config';
import { CSSProp } from '../types';

const StyledAnchor = styled('a', {
  color: '$primary500',
  cursor: 'pointer',
  fontWeight: 500,
  lineHeight: '$2',

  '&:hover': {
    color: '$primary700',
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
