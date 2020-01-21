import styled from 'styled-components';

const Cell = styled.td`
  padding: 8px 16px;
  text-align: ${({ textAlign }) => textAlign};
`;

export default Cell;
