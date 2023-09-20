import { styled } from 'styled-components';

export const Table = styled.table(({ theme }) => ({
  width: '100%',
  borderCollapse: 'collapse',
  borderRadius: '12px',
  borderStyle: 'hidden',
  boxShadow: `0 0 0 1px ${theme.colors.neutral300}`,
  overflow: 'hidden',
}));
