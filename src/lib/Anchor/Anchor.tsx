import React, { ComponentPropsWithoutRef, FC } from 'react';
import styled from '@emotion/styled/macro';
import { margin } from 'styled-system';
import { MarginProps } from '../styledProps';

const StyledAnchor = styled.a(
  ({ theme }) => ({
    color: theme.colors.primary['500'],
    cursor: 'pointer',
    boxShadow: 'inset 0 -2px 0 0',

    '&:hover': {
      boxShadow: 'none',
    },

    '&:focus': {
      boxShadow: 'none',
      outline: '2px auto #4098d7',
    },
  }),
  margin,
);

interface Props extends ComponentPropsWithoutRef<'a'>, MarginProps {
  href: string;
  children: string;
}

export const Anchor: FC<Props> = ({ href, children, ...rest }) => {
  return (
    <StyledAnchor href={href} target="_blank" rel="noreferrer noopener" {...rest}>
      {children}
    </StyledAnchor>
  );
};

Anchor.displayName = 'Anchor';
