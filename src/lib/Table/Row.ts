import styled from '@emotion/styled/macro';

export const Row = styled.tr`
  &:nth-child(odd) {
    background: ${({ theme }) => theme.colors.neutral['50']};
  }
`;
