import styled from 'styled-components';
import { theme } from '../theme';

export const Row = styled.tr`
  &:nth-child(odd) {
    background: ${theme.neutral050};
  }
`;
