import React, { FC } from 'react';
import { styled } from 'styled-components';

const StyledHead = styled.thead(({ theme }) => ({
  fontSize: theme.fontSizes.sm,
  textAlign: 'left',
  borderBottom: `1px solid ${theme.colors.neutral300}`,
  fontWeight: 600,
  color: theme.colors.neutral500,
  textTransform: 'uppercase',
  letterSpacing: theme.letterSpacings.wide,
}));

export const Head: FC = ({ children }) => {
  return (
    <StyledHead>
      <tr>{children}</tr>
    </StyledHead>
  );
};
