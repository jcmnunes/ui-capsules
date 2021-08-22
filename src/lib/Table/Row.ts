import styled from '@emotion/styled';

export const Row = styled.tr`
  &:nth-child(even) {
    background: ${({ theme }) => theme.colors.neutral['100']};
  }
`;
