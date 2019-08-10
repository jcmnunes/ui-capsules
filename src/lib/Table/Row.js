import styled from 'styled-components';
import theme from '../theme';

const Row = styled.tr`
  &:nth-child(odd) {
    background: ${theme.neutral050};
  }
`;

export default Row;
