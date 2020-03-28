import styled from 'styled-components';
import { theme } from '../theme';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 12px;
  border-style: hidden;
  box-shadow: 0 0 0 1px ${theme.neutral200};
  overflow: hidden;
`;
