import styled from '@emotion/styled';

export const Row = styled.tr`
  &:nth-child(odd) {
    background: ${({ theme }) => theme.colors.neutral['50']};
  }
`;
