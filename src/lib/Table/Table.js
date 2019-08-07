import styled from 'styled-components';
import Head from './Head';
import Body from './Body';
import Row from './Row';
import Cell from './Cell';
import HeaderCell from './HeaderCell';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 12px;
  border-style: hidden;
  box-shadow: 0 0 0 1px ${props => props.theme.neutral200};
`;

Table.Head = Head;
Table.Body = Body;
Table.Row = Row;
Table.Cell = Cell;
Table.HeaderCell = HeaderCell;

export default Table;
