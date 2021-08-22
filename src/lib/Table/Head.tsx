import React, { FC } from 'react';
import styled from '@emotion/styled';

const StyledHead = styled.thead(({ theme }) => ({
  fontSize: `${theme.fontSizes.small}px`,
  textAlign: 'left',
  borderBottom: `1px solid ${theme.colors.neutral['300']}`,
  fontWeight: 600,
  color: theme.colors.neutral['500'],
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
