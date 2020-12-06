import styled from '@emotion/styled/macro';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 12px;
  border-style: hidden;
  box-shadow: ${({ theme }) => `0 0 0 1px ${theme.colors.neutral['200']}`};
  overflow: hidden;
`;
