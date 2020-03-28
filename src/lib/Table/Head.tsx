import React, { FC } from 'react';
import styled from 'styled-components';
import { theme } from '../theme';

const StyledHead = styled.thead`
  font-size: 14px;
  text-align: left;
  border-bottom: 1px solid ${theme.neutral200};
  font-weight: 700;
  color: ${theme.neutral300};
  text-transform: uppercase;
  letter-spacing: 1.2px;
`;

interface Props {}

export const Head: FC<Props> = ({ children }) => {
  return (
    <StyledHead>
      <tr>{children}</tr>
    </StyledHead>
  );
};
