import { styled } from 'styled-components';

export const Card = styled.div(({ theme }) => ({
  borderRadius: theme.radii.medium,
  boxShadow: theme.shadows['400'],
  border: `1px solid ${theme.colors.neutral200}`,
}));
