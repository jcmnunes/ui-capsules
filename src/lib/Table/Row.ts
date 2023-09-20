import { styled } from 'styled-components';

export const Row = styled.tr(({ theme }) => ({
  '&:nth-child(even)': {
    background: theme.colors.neutral100,
  },
}));
