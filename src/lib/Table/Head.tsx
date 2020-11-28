import React, { FC } from 'react';
import styled from 'styled-components';

const StyledHead = styled.thead`
  font-size: 14px;
  text-align: left;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.neutral['200']}}`};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.neutral['400']};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
`;

interface Props {}

export const Head: FC<Props> = ({ children }) => {
  return (
    <StyledHead>
      <tr>{children}</tr>
    </StyledHead>
  );
};
