import React, { AnchorHTMLAttributes, FC } from 'react';
import styled from 'styled-components';
import { theme } from '../theme';

const StyledAnchor = styled.a`
  color: ${theme.blue600};
  cursor: pointer;
  box-shadow: inset 0 -2px 0 0;

  &:hover {
    box-shadow: none;
  }
`;

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const Anchor: FC<Props> = ({ href, children, ...other }) => {
  return (
    <StyledAnchor href={href} {...other}>
      {children}
    </StyledAnchor>
  );
};
Anchor.displayName = 'Anchor';
