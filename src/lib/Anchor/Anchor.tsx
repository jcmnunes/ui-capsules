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

export interface AnchorProps extends ComponentPropsWithRef<'a'>, CSSProp {
  href: string;
  children: string;
}

export const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ href, children, ...rest }, ref) => {
    return (
      <StyledAnchor ref={ref} href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </StyledAnchor>
    );
  },
);

Anchor.displayName = 'Anchor';
