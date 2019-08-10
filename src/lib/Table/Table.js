import styled from 'styled-components';
import Head from './Head';
import Body from './Body';
import Row from './Row';
import Cell from './Cell';
import HeaderCell from './HeaderCell';
import theme from '../theme';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 12px;
  border-style: hidden;
  box-shadow: 0 0 0 1px ${theme.neutral200};
  overflow: hidden;
`;

Table.Head = Head;
Table.Body = Body;
Table.Row = Row;
Table.Cell = Cell;
Table.HeaderCell = HeaderCell;

export default Table;
