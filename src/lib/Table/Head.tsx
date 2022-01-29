import React, { FC } from 'react';
import { styled } from '../stitches.config';

const StyledHead = styled('thead', {
  fontSize: '$xs',
  textAlign: 'left',
  borderBottom: `1px solid $neutral300`,
  fontWeight: 600,
  color: '$neutral500',
  textTransform: 'uppercase',
  letterSpacing: '$wide',
});

export const Head: FC = ({ children }) => {
  return (
    <StyledHead>
      <tr>{children}</tr>
    </StyledHead>
  );
};
