import styled from 'styled-components';

const HeaderCell = styled.th`
  height: 38px;
  vertical-align: middle;
  padding: 0 18px;
  text-align: ${({ textAlign }) => textAlign};
`;

export default HeaderCell;
