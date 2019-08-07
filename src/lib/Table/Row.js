import styled from 'styled-components';

const Row = styled.tr`
  &:nth-child(odd) {
    background: ${props => props.theme.neutral050};
  }
`;

export default Row;
