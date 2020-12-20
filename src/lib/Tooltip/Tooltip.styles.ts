import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding: 4px 8px;
  background: ${({ theme }) => theme.colors.neutral[700]};
  color: ${({ theme }) => theme.colors.neutral['100']};
  font-size: ${({ theme }) => `${theme.fontSizes.small}px`};
  font-weight: 500;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(55, 65, 81, 0.06), 0 1px 3px rgba(55, 65, 81, 0.1);
  max-width: 250px;
`;
